/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useAreaThumbnail } from "../../../hooks/use-area-thumbnail";
import { AppState } from "../../../redux/reducer";
import { hasAreaBeenVisitedViaCinematicProgression } from "../../../shared/helpers";
import { is } from "../../../shared/is";
import { ILocationArea } from "../../../shared/types";
import { AreaThumbnailImage } from "./image";
import { AreaThumbnailNameDescription } from "./name";

interface IProps {
	area: ILocationArea;
	onClick: (id: string) => void;
}

export const ExploreLocationAreaThumbnail: React.FunctionComponent<IProps> = ({ area, onClick }) => {
	const divRef = useRef<HTMLDivElement>(null);
	const { imageUri, onClickArea, onMouseOutImage, onMouseOverImage, description, isHovering } = useAreaThumbnail(
		area,
		onClick
	);
	const cinematicProgression = useSelector((state: AppState) => state.site.userDataPlayer.cinematicProgression);

	useEffect(() => {
		if (is.null(divRef.current)) {
			return;
		}

		const localDiv = divRef.current;

		function watchFocus() {
			onMouseOverImage();
		}

		function watchBlur() {
			onMouseOutImage();
		}

		localDiv?.addEventListener("focus", watchFocus);
		localDiv?.addEventListener("blur", watchBlur);

		return () => {
			localDiv?.removeEventListener("focus", watchFocus);
			localDiv?.removeEventListener("blur", watchBlur);
		};
	}, [onMouseOutImage, onMouseOverImage]);

	useEffect(() => {
		function scrolledPastMe() {
			if (!divRef.current || !is.touchDevice()) {
				return;
			}

			const elementTarget = divRef.current;
			if (window.scrollY > elementTarget.offsetTop) {
				onMouseOverImage();
			} else if (isHovering) {
				onMouseOutImage();
			}
		}

		window.addEventListener("scroll", scrolledPastMe);

		return () => window.removeEventListener("scroll", scrolledPastMe);
	}, [onMouseOutImage, onMouseOverImage, isHovering]);

	const visited = hasAreaBeenVisitedViaCinematicProgression(area, cinematicProgression);

	return (
		<div
			onMouseOver={onMouseOverImage}
			onMouseOut={onMouseOutImage}
			onFocus={onMouseOverImage}
			onBlur={onMouseOutImage}
			ref={divRef}
			className="flex rounded-xl border border-solid border-gray-300 bg-white shadow">
			<AreaThumbnailImage area={area} onClick={onClickArea} imageUri={imageUri} visited={visited} />
			<div className="flex grow items-center border-l border-solid border-gray-300 p-4 align-middle">
				<div>
					<AreaThumbnailNameDescription
						area={area}
						description={description}
						visited={visited}
						onClick={onClickArea}
						onFocus={onMouseOverImage}
						onBlur={onMouseOutImage}
					/>
				</div>
			</div>
		</div>
	);
};