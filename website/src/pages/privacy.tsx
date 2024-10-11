/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { BackLink } from "../components/back-link";
import { SiteLogo } from "../components/logo";
import { Page } from "../components/page";
import { DivPageWrapper, H1Left } from "../components/tailwind";
import { routes } from "../router";
import Strings from "../strings";

export const PrivacyPage: React.FunctionComponent = () => {
	const intl = useIntl();

	return (
		<Page
			title={intl.formatMessage({ id: Strings.privacy_policy_title })}
			isPlayFabIdRequired={false}
			isTitleIdRequired={false}>
			<DivPageWrapper className="break-words privacy">
				<div className="flex justify-center">
					<SiteLogo className="h-32" />
				</div>
				<BackLink
					link={{
						to: routes.About(),
					}}
				/>
				<H1Left>
					<FormattedMessage id={Strings.privacy_policy_title} />
				</H1Left>
				<h1>Attachment — The Standard Contractual Clauses (Processors)</h1>
				<p>
					Acceptance of the PlayFab Terms of Service by you (as data exporter) includes acceptance of this
					Attachment, which is countersigned by PlayFab, Inc. Capitalized terms that are not defined herein
					will have the same meaning as specified in the PlayFab Terms of Service. In the event of a conflict
					between the PlayFab Terms of Service and this Attachment, the parties agree that this Attachment
					shall control interpretation of any inconsistency. However, the documents shall, to the extent
					possible, be construed to be consistent.
				</p>
				<p>
					In countries where regulatory approval is required for use of the Standard Contractual Clauses, the
					Standard Contractual Clauses cannot be relied upon under European Commission 2010/87/EU (of February
					2010) to legitimize export of data from the country, unless data exporter has the required
					regulatory approval.
				</p>
				<p>
					References to various Articles from the Directive 95/46/EC in the Standard Contractual Clauses below
					will be treated as references to the relevant and appropriate Articles in the GDPR.
				</p>
				<p>
					For the purposes of Article 26(2) of Directive 95/46/EC for the transfer of personal data to
					processors established in third countries which do not ensure an adequate level of data protection,
					data exporter and PlayFab, Inc. (as data importer, whose signature appears below), each a “party,”
					together “the parties,” have agreed on the following Contractual Clauses (the “Clauses” or “Standard
					Contractual Clauses”) in order to adduce adequate safeguards with respect to the protection of
					privacy and fundamental rights and freedoms of individuals for the transfer by the data exporter to
					the data importer of the personal data specified in Appendix 1.
				</p>
				<h2>STANDARD CONTRACTUAL CLAUSES</h2>
				<h3>SECTION I</h3>
				<h4>Clause 1</h4>
				<h5>Purpose and scope</h5>
				<p>
					a. The purpose of these standard contractual clauses is to ensure compliance with the requirements
					of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the
					protection of natural persons with regard to the processing of personal data and on the free
					movement of such data (General Data Protection Regulation)&nbsp;^1^&nbsp;for the transfer of
					personal data to a third country.
				</p>
				<p>b. The Parties:</p>
				<pre className="whitespace-pre-wrap overflow-scroll">
					<code>
						i. the natural or legal person(s), public authority/ies, agency/ies or other body/ies
						(hereinafter \&quot;entity/ies\&quot;) transferring the personal data, as listed in Annex I.A.
						(hereinafter each \&quot;data exporter\&quot;), and ii. the entity/ies in a third country
						receiving the personal data from the data exporter, directly or indirectly via another entity
						also Party to these Clauses, as listed in Annex I.A. (hereinafter each \&quot;data
						importer\&quot;) have agreed to these standard contractual clauses (hereinafter:
						\&quot;Clauses\&quot;).
					</code>
				</pre>
				<p>c. These Clauses apply with respect to the transfer of personal data as specified in Annex I.B.</p>
				<p>
					d. The Appendix to these Clauses containing the Annexes referred to therein forms an integral part
					of these Clauses.
				</p>
				<h4>Clause 2</h4>
				<h5>Effect and invariability of the Clauses</h5>
				<p>
					a. These Clauses set out appropriate safeguards, including enforceable data subject rights and
					effective legal remedies, pursuant to Article 46(1) and Article 46 (2)(c) of Regulation (EU)
					2016/679 and, with respect to data transfers from controllers to processors and/or processors to
					processors, standard contractual clauses pursuant to Article 28(7) of Regulation (EU) 2016/679,
					provided they are not modified, except to select the appropriate Module(s) or to add or update
					information in the Appendix. This does not prevent the Parties from including the standard
					contractual clauses laid down in these Clauses in a wider contract and/or to add other clauses or
					additional safeguards, provided that they do not contradict, directly or indirectly, these Clauses
					or prejudice the fundamental rights or freedoms of data subjects.
				</p>
				<p>
					b. These Clauses are without prejudice to obligations to which the data exporter is subject by
					virtue of Regulation (EU) 2016/679.
				</p>
				<h4>Clause 3</h4>
				<h5>Third-party beneficiaries</h5>
				<p>
					a. Data subjects may invoke and enforce these Clauses, as third-party beneficiaries, against the
					data exporter and/or data importer, with the following exceptions:
				</p>
				<pre className="whitespace-pre-wrap overflow-scroll">
					<code>
						i. Clause 1, Clause 2, Clause 3, Clause 6, Clause 7; ii. Clause 8 --- Clause 8.1(b), 8.9(a),
						(c), (d) and (e); iii. Clause 9 --- Clause 9(a), (c), (d) and (e); iv. Clause 12 --- Clause
						12(a), (d) and (f); v. Clause 13; vi. Clause 15.1(c), (d) and (e); vii. Clause 16(e); viii.
						Clause 18 --- Clause 18(a) and (b).
					</code>
				</pre>
				<p>b. Paragraph (a) is without prejudice to rights of data subjects under Regulation (EU) 2016/679.</p>
				<h4>Clause 4</h4>
				<h5>Interpretation</h5>
				<p>
					a. Where these Clauses use terms that are defined in Regulation (EU) 2016/679, those terms shall
					have the same meaning as in that Regulation.
				</p>
				<p>
					b. These Clauses shall be read and interpreted in the light of the provisions of Regulation (EU)
					2016/679.
				</p>
				<p>
					c. These Clauses shall not be interpreted in a way that conflicts with rights and obligations
					provided for in Regulation (EU) 2016/679.
				</p>
				<h4>Clause 5</h4>
				<h5>Hierarchy</h5>
				<p>
					In the event of a contradiction between these Clauses and the provisions of related agreements
					between the Parties, existing at the time these Clauses are agreed or entered into thereafter, these
					Clauses shall prevail.
				</p>
				<h4>Clause 6</h4>
				<h5>Description of the transfer(s)</h5>
				<p>
					The details of the transfer(s), and in particular the categories of personal data that are
					transferred and the purpose(s) for which they are transferred, are specified in Annex I.B.
				</p>
				<h4>Clause 7</h4>
				<h5>Intentionally Omitted</h5>
				<h3>SECTION II — OBLIGATIONS OF THE PARTIES</h3>
				<h4>Clause 8</h4>
				<h5>Data protection safeguards</h5>
				<p>
					The data exporter warrants that it has used reasonable efforts to determine that the data importer
					is able, through the implementation of appropriate technical and organisational measures, to satisfy
					its obligations under these Clauses.
				</p>
				<p>
					8.1
					<strong>Instructions</strong>
				</p>
				<p>
					a. The data importer shall process the personal data only on documented instructions from the data
					exporter. The data exporter may give such instructions throughout the duration of the contract.
				</p>
				<p>
					b. The data importer shall immediately inform the data exporter if it is unable to follow those
					instructions.
				</p>
				<p>
					8.2
					<strong>Purpose limitation</strong>
				</p>
				<p>
					The data importer shall process the personal data only for the specific purpose(s) of the transfer,
					as set out in Annex I.B, unless on further instructions from the data exporter.
				</p>
				<p>
					8.3
					<strong>Transparency</strong>
				</p>
				<p>
					On request, the data exporter shall make a copy of these Clauses, including the Appendix as
					completed by the Parties, available to the data subject free of charge. To the extent necessary to
					protect business secrets or other confidential information, including the measures described in
					Annex II and personal data, the data exporter may redact part of the text of the Appendix to these
					Clauses prior to sharing a copy, but shall provide a meaningful summary where the data subject would
					otherwise not be able to understand the its content or exercise his/her rights. On request, the
					Parties shall provide the data subject with the reasons for the redactions, to the extent possible
					without revealing the redacted information. This Clause is without prejudice to the obligations of
					the data exporter under Articles 13 and 14 of Regulation (EU) 2016/679.
				</p>
				<p>
					8.4
					<strong>Accuracy</strong>
				</p>
				<p>
					If the data importer becomes aware that the personal data it has received is inaccurate, or has
					become outdated, it shall inform the data exporter without undue delay. In this case, the data
					importer shall cooperate with the data exporter to erase or rectify the data.
				</p>
				<p>
					8.5
					<strong>Duration of processing and erasure or return of data</strong>
				</p>
				<p>
					Processing by the data importer shall only take place for the duration specified in Annex I.B. After
					the end of the provision of the processing services, the data importer shall, at the choice of the
					data exporter, delete all personal data processed on behalf of the data exporter and certify to the
					data exporter that it has done so, or return to the data exporter all personal data processed on its
					behalf and delete existing copies. Until the data is deleted or returned, the data importer shall
					continue to ensure compliance with these Clauses. In case of local laws applicable to the data
					importer that prohibit return or deletion of the personal data, the data importer warrants that it
					will continue to ensure compliance with these Clauses and will only process it to the extent and for
					as long as required under that local law. This is without prejudice to Clause 14, in particular the
					requirement for the data importer under Clause 14(e) to notify the data exporter throughout the
					duration of the contract if it has reason to believe that it is or has become subject to laws or
					practices not in line with the requirements under Clause 14(a).
				</p>
				<p>
					8.6
					<strong>Security of processing</strong>
				</p>
				<p>
					a. The data importer and, during transmission, also the data exporter shall implement appropriate
					technical and organisational measures to ensure the security of the data, including protection
					against a breach of security leading to accidental or unlawful destruction, loss, alteration,
					unauthorised disclosure or access to that data (hereinafter &quot;personal data breach&quot;). In
					assessing the appropriate level of security, the Parties shall take due account of the state of the
					art, the costs of implementation, the nature, scope, context and purpose(s) of processing and the
					risks involved in the processing for the data subjects. The Parties shall in particular consider
					having recourse to encryption or pseudonymisation, including during transmission, where the purpose
					of processing can be fulfilled in that manner. In case of pseudonymisation, the additional
					information for attributing the personal data to a specific data subject shall, where possible,
					remain under the exclusive control of the data exporter. In complying with its obligations under
					this paragraph, the data importer shall at least implement the technical and organisational measures
					specified in Annex II. The data importer shall carry out regular checks to ensure that these
					measures continue to provide an appropriate level of security.
				</p>
				<p>
					b. The data importer shall grant access to the personal data to members of its personnel only to the
					extent strictly necessary for the implementation, management and monitoring of the contract. It
					shall ensure that persons authorised to process the personal data have committed themselves to
					confidentiality or are under an appropriate statutory obligation of confidentiality.
				</p>
				<p>
					c. In the event of a personal data breach concerning personal data processed by the data importer
					under these Clauses, the data importer shall take appropriate measures to address the breach,
					including measures to mitigate its adverse effects. The data importer shall also notify the data
					exporter without undue delay after having become aware of the breach. Such notification shall
					contain the details of a contact point where more information can be obtained, a description of the
					nature of the breach (including, where possible, categories and approximate number of data subjects
					and personal data records concerned), its likely consequences and the measures taken or proposed to
					address the breach including, where appropriate, measures to mitigate its possible adverse effects.
					Where, and in so far as, it is not possible to provide all information at the same time, the initial
					notification shall contain the information then available and further information shall, as it
					becomes available, subsequently be provided without undue delay.
				</p>
				<p>
					d. The data importer shall cooperate with and assist the data exporter to enable the data exporter
					to comply with its obligations under Regulation (EU) 2016/679, in particular to notify the competent
					supervisory authority and the affected data subjects, taking into account the nature of processing
					and the information available to the data importer.
				</p>
				<p>
					8.7
					<strong>Sensitive data</strong>
				</p>
				<p>
					Where the transfer involves personal data revealing racial or ethnic origin, political opinions,
					religious or philosophical beliefs, or trade union membership, genetic data, or biometric data for
					the purpose of uniquely identifying a natural person, data concerning health or a person&aposl;s sex
					life or sexual orientation, or data relating to criminal convictions and offences (hereinafter
					“sensitive data”), the data importer shall apply the specific restrictions and/or additional
					safeguards described in Annex I.B.
				</p>
				<p>
					8.8
					<strong>Onward transfers</strong>
				</p>
				<p>
					The data importer shall only disclose the personal data to a third party on documented instructions
					from the data exporter. In addition, the data may only be disclosed to a third party located outside
					the European Union&nbsp;^2^&nbsp;(in the same country as the data importer or in another third
					country, hereinafter “onward transfer”) if the third party is or agrees to be bound by these
					Clauses, under the appropriate Module, or if:
				</p>
				<p>
					i. the onward transfer is to a country benefitting from an adequacy decision pursuant to Article 45
					of Regulation (EU) 2016/679 that covers the onward transfer;
				</p>
				<p>
					ii. the third party otherwise ensures appropriate safeguards pursuant to Articles 46 or 47
					Regulation of (EU) 2016/679 with respect to the processing in question;
				</p>
				<p>
					iii. the onward transfer is necessary for the establishment, exercise or defence of legal claims in
					the context of specific administrative, regulatory or judicial proceedings; or
				</p>
				<p>
					iv. the onward transfer is necessary in order to protect the vital interests of the data subject or
					of another natural person.
				</p>
				<p>
					Any onward transfer is subject to compliance by the data importer with all the other safeguards
					under these Clauses, in particular purpose limitation.
				</p>
				<p>
					8.9
					<strong>Documentation and compliance</strong>
				</p>
				<p>
					a. The data importer shall promptly and adequately deal with enquiries from the data exporter that
					relate to the processing under these Clauses.
				</p>
				<p>
					b. The Parties shall be able to demonstrate compliance with these Clauses. In particular, the data
					importer shall keep appropriate documentation on the processing activities carried out on behalf of
					the data exporter.
				</p>
				<p>
					c. The data importer shall make available to the data exporter all information necessary to
					demonstrate compliance with the obligations set out in these Clauses and at the data exporter&apos;s
					request, allow for and contribute to audits of the processing activities covered by these Clauses,
					at reasonable intervals or if there are indications of non-compliance. In deciding on a review or
					audit, the data exporter may take into account relevant certifications held by the data importer.
				</p>
				<p>
					d. The data exporter may choose to conduct the audit by itself or mandate an independent auditor.
					Audits may include inspections at the premises or physical facilities of the data importer and
					shall, where appropriate, be carried out with reasonable notice.
				</p>
				<p>
					e. The Parties shall make the information referred to in paragraphs (b) and (c), including the
					results of any audits, available to the competent supervisory authority on request.
				</p>
				<h4>Clause 9</h4>
				<h5>Use of sub-processors</h5>
				<p>
					a. The data importer has the data exporter&apos;s general authorisation for the engagement of
					sub-processor(s) from an agreed list. The data importer shall specifically inform the data exporter
					in writing of any intended changes to that list through the addition or replacement of
					sub-processors at least 30 days in advance, thereby giving the data exporter sufficient time to be
					able to object to such changes prior to the engagement of the sub-processor(s). The data importer
					shall provide the data exporter with the information necessary to enable the data exporter to
					exercise its right to object.
				</p>
				<p>
					b. Where the data importer engages a sub-processor to carry out specific processing activities (on
					behalf of the data exporter), it shall do so by way of a written contract that provides for, in
					substance, the same data protection obligations as those binding the data importer under these
					Clauses, including in terms of third-party beneficiary rights for data subjects.&nbsp;^3^&nbsp;The
					Parties agree that, by complying with this Clause, the data importer fulfils its obligations under
					Clause 8.8. The data importer shall ensure that the sub-processor complies with the obligations to
					which the data importer is subject pursuant to these Clauses.
				</p>
				<p>
					c. The data importer shall provide, at the data exporter&apos;s request, a copy of such a
					sub-processor agreement and any subsequent amendments to the data exporter. To the extent necessary
					to protect business secrets or other confidential information, including personal data, the data
					importer may redact the text of the agreement prior to sharing a copy.
				</p>
				<p>
					d. The data importer shall remain fully responsible to the data exporter for the performance of the
					sub-processor&apos;s obligations under its contract with the data importer. The data importer shall
					notify the data exporter of any failure by the sub-processor to fulfil its obligations under that
					contract.
				</p>
				<p>
					e. The data importer shall agree a third-party beneficiary clause with the sub-processor whereby —
					in the event the data importer has factually disappeared, ceased to exist in law or has become
					insolvent — the data exporter shall have the right to terminate the sub-processor contract and to
					instruct the sub-processor to erase or return the personal data.
				</p>
				<h4>Clause 10</h4>
				<h5>Data subject rights</h5>
				<p>
					a. The data importer shall promptly notify the data exporter of any request it has received from a
					data subject. It shall not respond to that request itself unless it has been authorised to do so by
					the data exporter.
				</p>
				<p>
					b. The data importer shall assist the data exporter in fulfilling its obligations to respond to data
					subjects&apos; requests for the exercise of their rights under Regulation (EU) 2016/679. In this
					regard, the Parties shall set out in Annex II the appropriate technical and organisational measures,
					taking into account the nature of the processing, by which the assistance shall be provided, as well
					as the scope and the extent of the assistance required.
				</p>
				<p>
					c. In fulfilling its obligations under paragraphs (a) and (b), the data importer shall comply with
					the instructions from the data exporter.
				</p>
				<h4>Clause 11</h4>
				<h5>Redress</h5>
				<p>
					a. The data importer shall inform data subjects in a transparent and easily accessible format,
					through individual notice or on its website, of a contact point authorised to handle complaints. It
					shall deal promptly with any complaints it receives from a data subject.
				</p>
				<p>
					b. In case of a dispute between a data subject and one of the Parties as regards compliance with
					these Clauses, that Party shall use its best efforts to resolve the issue amicably in a timely
					fashion. The Parties shall keep each other informed about such disputes and, where appropriate,
					cooperate in resolving them.
				</p>
				<p>
					c. Where the data subject invokes a third-party beneficiary right pursuant to Clause 3, the data
					importer shall accept the decision of the data subject to:
				</p>
				<pre className="whitespace-pre-wrap overflow-scroll">
					<code>
						i. lodge a complaint with the supervisory authority in the Member State of his/her habitual
						residence or place of work, or the competent supervisory authority pursuant to Clause 13; ii.
						refer the dispute to the competent courts within the meaning of Clause 18.
					</code>
				</pre>
				<p>
					d. The Parties accept that the data subject may be represented by a not-for-profit body,
					organisation or association under the conditions set out in Article 80(1) of Regulation (EU)
					2016/679.
				</p>
				<p>
					e. The data importer shall abide by a decision that is binding under the applicable EU or Member
					State law.
				</p>
				<p>
					f. The data importer agrees that the choice made by the data subject will not prejudice his/her
					substantive and procedural rights to seek remedies in accordance with applicable laws.
				</p>
				<h4>Clause 12</h4>
				<h5>Liability</h5>
				<p>
					a. Each Party shall be liable to the other Party/ies for any damages it causes the other Party/ies
					by any breach of these Clauses.
				</p>
				<p>
					b. The data importer shall be liable to the data subject, and the data subject shall be entitled to
					receive compensation, for any material or non-material damages the data importer or its
					sub-processor causes the data subject by breaching the third-party beneficiary rights under these
					Clauses.
				</p>
				<p>
					c. Notwithstanding paragraph (b), the data exporter shall be liable to the data subject, and the
					data subject shall be entitled to receive compensation, for any material or non-material damages the
					data exporter or the data importer (or its sub-processor) causes the data subject by breaching the
					third-party beneficiary rights under these Clauses. This is without prejudice to the liability of
					the data exporter and, where the data exporter is a processor acting on behalf of a controller, to
					the liability of the controller under Regulation (EU) 2016/679 or Regulation (EU) 2018/1725, as
					applicable.
				</p>
				<p>
					d. The Parties agree that if the data exporter is held liable under paragraph (c) for damages caused
					by the data importer (or its sub-processor), it shall be entitled to claim back from the data
					importer that part of the compensation corresponding to the data importer&apos;s responsibility for
					the damage.
				</p>
				<p>
					e. Where more than one Party is responsible for any damage caused to the data subject as a result of
					a breach of these Clauses, all responsible Parties shall be jointly and severally liable and the
					data subject is entitled to bring an action in court against any of these Parties.
				</p>
				<p>
					f. The Parties agree that if one Party is held liable under paragraph (e), it shall be entitled to
					claim back from the other Party/ies that part of the compensation corresponding to its / their
					responsibility for the damage.
				</p>
				<p>g. The data importer may not invoke the conduct of a sub-processor to avoid its own liability.</p>
				<h4>Clause 13</h4>
				<h5>Supervision</h5>
				<p>
					a. Where the data exporter is established in an EU Member State, the supervisory authority with
					responsibility for ensuring compliance by the data exporter with Regulation (EU) 2016/679 as regards
					the data transfer, as indicated in Annex I.C, shall act as competent supervisory authority. Where
					the data exporter is not established in an EU Member State, but falls within the territorial scope
					of application of Regulation (EU) 2016/679 in accordance with its Article 3(2) and has appointed a
					representative pursuant to Article 27(1) of Regulation (EU) 2016/679, the supervisory authority of
					the Member State in which the representative within the meaning of Article 27(1) of Regulation (EU)
					2016/679 is established, as indicated in Annex I.C, shall act as competent supervisory authority.
					Where the data exporter is not established in an EU Member State, but falls within the territorial
					scope of application of Regulation (EU) 2016/679 in accordance with its Article 3(2) without however
					having to appoint a representative pursuant to Article 27(2) of Regulation (EU) 2016/679, the
					supervisory authority of one of the Member States in which the data subjects whose personal data is
					transferred under these Clauses in relation to the offering of goods or services to them, or whose
					behaviour is monitored, are located, as indicated in Annex I.C, shall act as competent supervisory
					authority.
				</p>
				<p>
					b. The data importer agrees to submit itself to the jurisdiction of and cooperate with the competent
					supervisory authority in any procedures aimed at ensuring compliance with these Clauses. In
					particular, the data importer agrees to respond to enquiries, submit to audits and comply with the
					measures adopted by the supervisory authority, including remedial and compensatory measures. It
					shall provide the supervisory authority with written confirmation that the necessary actions have
					been taken.
				</p>
				<h3>SECTION III — LOCAL LAWS AND OBLIGATIONS IN CASE OF ACCESS BY PUBLIC AUTHORITIES</h3>
				<h4>Clause 14</h4>
				<h5>Local laws and practices affecting compliance with the Clauses</h5>
				<p>
					a. The Parties warrant that they have no reason to believe that the laws and practices in the third
					country of destination applicable to the processing of the personal data by the data importer,
					including any requirements to disclose personal data or measures authorising access by public
					authorities, prevent the data importer from fulfilling its obligations under these Clauses. This is
					based on the understanding that laws and practices that respect the essence of the fundamental
					rights and freedoms and do not exceed what is necessary and proportionate in a democratic society to
					safeguard one of the objectives listed in Article 23(1) of Regulation (EU) 2016/679, are not in
					contradiction with these Clauses.
				</p>
				<p>
					b. The Parties declare that in providing the warranty in paragraph (a), they have taken due account
					in particular of the following elements:
				</p>
				<pre className="whitespace-pre-wrap overflow-scroll">
					<code>
						i. the specific circumstances of the transfer, including the length of the processing chain, the
						number of actors involved and the transmission channels used; intended onward transfers; the
						type of recipient; the purpose of processing; the categories and format of the transferred
						personal data; the economic sector in which the transfer occurs; the storage location of the
						data transferred; ii. the laws and practices of the third country of destination\&quot;
						including those requiring the disclosure of data to public authorities or authorising access by
						such authorities \&quot; relevant in light of the specific circumstances of the transfer, and
						the applicable limitations and safeguards&nbsp;^4^; iii. any relevant contractual, technical or
						organisational safeguards put in place to supplement the safeguards under these Clauses,
						including measures applied during transmission and to the processing of the personal data in the
						country of destination.
					</code>
				</pre>
				<p>
					c. The data importer warrants that, in carrying out the assessment under paragraph (b), it has made
					its best efforts to provide the data exporter with relevant information and agrees that it will
					continue to cooperate with the data exporter in ensuring compliance with these Clauses.
				</p>
				<p>
					d. The Parties agree to document the assessment under paragraph (b) and make it available to the
					competent supervisory authority on request.
				</p>
				<p>
					e. The data importer agrees to notify the data exporter promptly if, after having agreed to these
					Clauses and for the duration of the contract, it has reason to believe that it is or has become
					subject to laws or practices not in line with the requirements under paragraph (a), including
					following a change in the laws of the third country or a measure (such as a disclosure request)
					indicating an application of such laws in practice that is not in line with the requirements in
					paragraph (a).
				</p>
				<p>
					f. Following a notification pursuant to paragraph (e), or if the data exporter otherwise has reason
					to believe that the data importer can no longer fulfil its obligations under these Clauses, the data
					exporter shall promptly identify appropriate measures (e.g. technical or organisational measures to
					ensure security and confidentiality) to be adopted by the data exporter and/or data importer to
					address the situation. The data exporter shall suspend the data transfer if it considers that no
					appropriate safeguards for such transfer can be ensured, or if instructed by the competent
					supervisory authority to do so. In this case, the data exporter shall be entitled to terminate the
					contract, insofar as it concerns the processing of personal data under these Clauses. If the
					contract involves more than two Parties, the data exporter may exercise this right to termination
					only with respect to the relevant Party, unless the Parties have agreed otherwise. Where the
					contract is terminated pursuant to this Clause, Clause 16(d) and (e) shall apply.
				</p>
				<h4>Clause 15</h4>
				<h5>Obligations of the data importer in case of access by public authorities</h5>
				<blockquote>
					<p>
						15.1
						<strong>Notification</strong>
					</p>
				</blockquote>
				<p>
					a. The data importer agrees to notify the data exporter and, where possible, the data subject
					promptly (if necessary with the help of the data exporter) if it:
				</p>
				<pre className="whitespace-pre-wrap overflow-scroll">
					<code>
						i. receives a legally binding request from a public authority, including judicial authorities,
						under the laws of the country of destination for the disclosure of personal data transferred
						pursuant to these Clauses; such notification shall include information about the personal data
						requested, the requesting authority, the legal basis for the request and the response provided;
						or ii. becomes aware of any direct access by public authorities to personal data transferred
						pursuant to these Clauses in accordance with the laws of the country of destination; such
						notification shall include all information available to the importer.
					</code>
				</pre>
				<p>
					b. If the data importer is prohibited from notifying the data exporter and/or the data subject under
					the laws of the country of destination, the data importer agrees to use its best efforts to obtain a
					waiver of the prohibition, with a view to communicating as much information as possible, as soon as
					possible. The data importer agrees to document its best efforts in order to be able to demonstrate
					them on request of the data exporter.
				</p>
				<p>
					c. Where permissible under the laws of the country of destination, the data importer agrees to
					provide the data exporter, at regular intervals for the duration of the contract, with as much
					relevant information as possible on the requests received (in particular, number of requests, type
					of data requested, requesting authority/ies, whether requests have been challenged and the outcome
					of such challenges, etc.).
				</p>
				<p>
					d. The data importer agrees to preserve the information pursuant to paragraphs (a) to (c) for the
					duration of the contract and make it available to the competent supervisory authority on request.
				</p>
				<p>
					e. Paragraphs (a) to (c) are without prejudice to the obligation of the data importer pursuant to
					Clause 14(e) and Clause 16 to inform the data exporter promptly where it is unable to comply with
					these Clauses.
				</p>
				<blockquote>
					<p>
						15.2
						<strong>Review of legality and data minimisation</strong>
					</p>
				</blockquote>
				<p>
					a. The data importer agrees to review the legality of the request for disclosure, in particular
					whether it remains within the powers granted to the requesting public authority, and to challenge
					the request if, after careful assessment, it concludes that there are reasonable grounds to consider
					that the request is unlawful under the laws of the country of destination, applicable obligations
					under international law and principles of international comity. The data importer shall, under the
					same conditions, pursue possibilities of appeal. When challenging a request, the data importer shall
					seek interim measures with a view to suspending the effects of the request until the competent
					judicial authority has decided on its merits. It shall not disclose the personal data requested
					until required to do so under the applicable procedural rules. These requirements are without
					prejudice to the obligations of the data importer under Clause 14(e).
				</p>
				<p>
					b. The data importer agrees to document its legal assessment and any challenge to the request for
					disclosure and, to the extent permissible under the laws of the country of destination, make the
					documentation available to the data exporter. It shall also make it available to the competent
					supervisory authority on request.
				</p>
				<p>
					c. The data importer agrees to provide the minimum amount of information permissible when responding
					to a request for disclosure, based on a reasonable interpretation of the request.
				</p>
				<h3>SECTION IV — FINAL PROVISIONS</h3>
				<h4>Clause 16</h4>
				<h5>Non-compliance with the Clauses and termination</h5>
				<p>
					a. The data importer shall promptly inform the data exporter if it is unable to comply with these
					Clauses, for whatever reason.
				</p>
				<p>
					b. In the event that the data importer is in breach of these Clauses or unable to comply with these
					Clauses, the data exporter shall suspend the transfer of personal data to the data importer until
					compliance is again ensured or the contract is terminated. This is without prejudice to Clause
					14(f).
				</p>
				<p>
					c. The data exporter shall be entitled to terminate the contract, insofar as it concerns the
					processing of personal data under these Clauses, where:
				</p>
				<pre className="whitespace-pre-wrap overflow-scroll">
					<code>
						i. the data exporter has suspended the transfer of personal data to the data importer pursuant
						to paragraph (b) and compliance with these Clauses is not restored within a reasonable time and
						in any event within one month of suspension; ii. the data importer is in substantial or
						persistent breach of these Clauses; or iii. the data importer fails to comply with a binding
						decision of a competent court or supervisory authority regarding its obligations under these
						Clauses.
					</code>
				</pre>
				<blockquote>
					<p>
						In these cases, it shall inform the competent supervisory authority of such non-compliance.
						Where the contract involves more than two Parties, the data exporter may exercise this right to
						termination only with respect to the relevant Party, unless the Parties have agreed otherwise.
					</p>
				</blockquote>
				<p>
					d. Personal data that has been transferred prior to the termination of the contract pursuant to
					paragraph (c) shall at the choice of the data exporter immediately be returned to the data exporter
					or deleted in its entirety. The same shall apply to any copies of the data. The data importer shall
					certify the deletion of the data to the data exporter. Until the data is deleted or returned, the
					data importer shall continue to ensure compliance with these Clauses. In case of local laws
					applicable to the data importer that prohibit the return or deletion of the transferred personal
					data, the data importer warrants that it will continue to ensure compliance with these Clauses and
					will only process the data to the extent and for as long as required under that local law.
				</p>
				<p>
					e. Either Party may revoke its agreement to be bound by these Clauses where (i) the European
					Commission adopts a decision pursuant to Article 45(3) of Regulation (EU) 2016/679 that covers the
					transfer of personal data to which these Clauses apply; or (ii) Regulation (EU) 2016/679 becomes
					part of the legal framework of the country to which the personal data is transferred. This is
					without prejudice to other obligations applying to the processing in question under Regulation (EU)
					2016/679.
				</p>
				<h4>Clause 17</h4>
				<h5>Governing law</h5>
				<blockquote>
					<p>
						These Clauses shall be governed by the law of the EU Member State in which the data exporter is
						established. Where such law does not allow for third-party beneficiary rights, they shall be
						governed by the law of another EU Member State that does allow for third-party beneficiary
						rights. The Parties agree that this shall be the law of Ireland.
					</p>
				</blockquote>
				<h4>Clause 18</h4>
				<h5>Choice of forum and jurisdiction</h5>
				<p>a. Any dispute arising from these Clauses shall be resolved by the courts of an EU Member State.</p>
				<p>b. The Parties agree that those shall be the courts of Ireland.</p>
				<p>
					c. A data subject may also bring legal proceedings against the data exporter and/or data importer
					before the courts of the Member State in which he/she has his/her habitual residence.
				</p>
				<p>d. The Parties agree to submit themselves to the jurisdiction of such courts.</p>
				<h3>APPENDIX</h3>
				<h4>ANNEX I</h4>
				<blockquote>
					<p>
						A.
						<strong>LIST OF PARTIES</strong>
					</p>
					<p>
						<strong>Data exporter(s):</strong>
					</p>
				</blockquote>
				<p>
					a. Name: The party who has executed the PlayFab Terms of Service with PlayFab, Inc. to which these
					Standard Contractual Clauses are attached.
					<br /> Address: As reflected in the Terms
					<br /> Contact person&apos;s name, position and contact details: As reflected in the Terms
					<br /> Activities relevant to the data transferred under these Clauses: As reflected in the Terms
					<br /> Signature and date: The parties agree that execution of the PlayFab Terms of Service by the
					data importer and the data exporter shall constitute execution of these Clauses by both parties as
					of the execution date of the PlayFab Terms of Service
					<br /> Role (controller/processor): Controller
				</p>
				<blockquote>
					<p>
						<strong>Data importer:</strong>
					</p>
				</blockquote>
				<p>
					a. Name: PlayFab, Inc.
					<br /> Address: 1 Microsoft Way, Redmond, WA 98052 USA
					<br /> Contact person&apos;s name, position and contact details: Chief Privacy Officer, 1 Microsoft
					Way, Redmond, WA 98052 USA
					<br /> Activities relevant to the data transferred under these Clauses: As reflected in the Terms
					<br /> Signature and date: The parties agree that execution of the PlayFab Terms of Service by the
					data importer and the data exporter shall constitute execution of these Clauses by both parties as
					of the execution date of the PlayFab Terms of Service
					<br /> Role (controller/processor): Processor
				</p>
				<blockquote>
					<p>
						B.
						<strong>DESCRIPTION OF TRANSFER</strong>
					</p>
					<p>
						<em>Categories of data subjects whose personal data is transferred</em>
					</p>
					<p>
						Data subjects include the data exporter&apos;s representatives and end-users including
						employees, contractors, collaborators, and customers of the data exporter. Data subjects may
						also include individuals attempting to communicate or transfer personal information to users of
						the services provided by data importer. PlayFab acknowledges that, depending on data
						exporter&apos;s use of the PlayFab Services, data exporter may elect to include personal data
						from any of the following types of data subjects in the personal data:
					</p>
				</blockquote>
				<p>a. Employees, contractors and temporary workers (current, former, prospective) of data exporter;</p>
				<p>b. Dependents of the above;</p>
				<p>
					c. Data exporter&apos;s collaborators/contact persons (natural persons) or employees, contractors or
					temporary workers of legal entity collaborators/contact persons (current, prospective, former);
				</p>
				<p>
					d. Users (e.g., customers, clients, visitors, etc.) and other data subjects that are users of data
					exporter&apos;s services;
				</p>
				<p>
					e. Partners, stakeholders or individuals who actively collaborate, communicate or otherwise interact
					with employees of the data exporter and/or use communication tools such as apps and websites
					provided by the data exporter;
				</p>
				<p>
					f. Stakeholders or individuals who passively interact with data exporter (e.g., because they are the
					subject of an investigation, research or mentioned in documents or correspondence from or to the
					data exporter);
				</p>
				<p>g. Minors; or</p>
				<p>h. Professionals.</p>
				<blockquote>
					<p>
						<em>Categories of personal data transferred</em>
					</p>
					<p>
						The personal data transferred that is included in e-mail, documents and other data in an
						electronic form in the context of the PlayFab Services. PlayFab acknowledges that, depending on
						data exporter&apos;s use of the PlayFab Services, data exporter may elect to include personal
						data from any of the following categories in the personal data:
					</p>
				</blockquote>
				<p>a. Basic personal data including email address;</p>
				<p>
					b. Authentication data [for example user name, password (hashed and not accessible by PlayFab) and
					sign-in history];
				</p>
				<p>
					c. Contact information [(for example addresses email, phone numbers, and social media identifiers
					(if a user authenticates with social media)];
				</p>
				<p>
					d. Unique identification numbers and signatures (for example IP addresses, and unique identifiers in
					tracking cookies or similar technology);
				</p>
				<p>e. Pseudonymous identifiers;</p>
				<p>
					f. Commercial Information (for example history of purchases, special offers, subscription
					information, and purchase history);
				</p>
				<p>
					g. Location data [for example, IP Address (with the ability for the developer to turn off the last
					octet)];
				</p>
				<p>h. Audio data may be routed through PlayFab Services;</p>
				<p>
					i. Device identification (for example if a developer is using the PlayFab SKD, device data is
					collected);
				</p>
				<p>
					j. Profiling (for example a developer can turn on a moderation tool to scan for inappropriate user
					names, event data, IP addresses, apps installed, or profiles based on marketing preferences);
				</p>
				<p>
					k. Education data (for example education history, current education, grades and results, highest
					degree achieved, learning disability); or
				</p>
				<p>l. Any other personal data identified in Article 4 of the GDPR.</p>
				<blockquote>
					<p>
						<em>
							Sensitive data transferred (if applicable) and applied restrictions or safeguards that fully
							take into consideration the nature of the data and the risks involved, such as for instance
							strict purpose limitation, access restrictions (including access only for staff having
							followed specialised training), keeping a record of access to the data, restrictions for
							onward transfers or additional security measures.
						</em>
					</p>
					<p>
						No sensitive data will be transferred to PlayFab in the performance of PlayFab Services for the
						data exporter under the PlayFab Terms of Service.
					</p>
					<p>
						<em>
							The frequency of the transfer (e.g. whether the data is transferred on a one-off or
							continuous basis).
						</em>
					</p>
					<p>The data will be transferred on a continuous basis.</p>
					<p>
						<em>Nature of the processing</em>
					</p>
					<p>The objective of the data processing is the performance of PlayFab Services.</p>
					<p>
						<em>Purpose(s) of the data transfer and further processing</em>
					</p>
					<p>
						The scope and purpose of processing personal data is described in the Section 4.2 of the PlayFab
						Terms of Service. The data importer operates a global network of data centers and
						management/support facilities, and, subject to data exporter&apos;s documented instructions,
						processing may take place in any jurisdiction where data importer or its sub-processors operate
						such facilities in accordance with the Section 4.6 of the PlayFab Terms of Service.
					</p>
					<p>
						<em>
							The period for which the personal data will be retained, or, if that is not possible, the
							criteria used to determine that period
						</em>
					</p>
					<p>
						The duration of data processing shall be for the term designated under the PlayFab Terms of
						Service between data exporter and the entity to which these Standard Contractual Clauses are
						annexed.
					</p>
					<p>
						<em>
							For transfers to (sub-) processors, also specify subject matter, nature and duration of the
							processing
						</em>
					</p>
					<p>
						In accordance with Section 4.6 of the PlayFab Terms of Service, the data importer may hire other
						companies to provide limited services on data importer&apos;s behalf, such as providing customer
						support. Any such subcontractors will be permitted to obtain Game Data and personal data only to
						deliver the services the data importer has retained them to provide, and they are prohibited
						from using Game Data and personal data for any other purpose.
					</p>
					<p>
						C.
						<strong>COMPETENT SUPERVISORY AUTHORITY</strong>
					</p>
					<p>
						<em>Identify the competent supervisory authority/ies in accordance with Clause 13</em>
					</p>
					<p>The competent supervisory authority is determined by Clause 13 in accordance with the GDPR.</p>
				</blockquote>
				<h4>ANNEX II</h4>
				<h5>
					TECHNICAL AND ORGANISATIONAL MEASURES INCLUDING TECHNICAL AND ORGANISATIONAL MEASURES TO ENSURE THE
					SECURITY OF THE DATA
				</h5>
				<blockquote>
					<p>
						<em>
							Description of the technical and organisational measures implemented by the data importer(s)
							(including any relevant certifications) to ensure an appropriate level of security, taking
							into account the nature, scope, context and purpose of the processing, and the risks for the
							rights and freedoms of natural persons.
						</em>
					</p>
					<p>
						The data importer has implemented and will maintain appropriate technical and organizational
						measures, internal controls, and information security routines intended to protect Game Data and
						personal data, as defined in Section 4.5 of the Terms of Service, against accidental loss,
						destruction, or alteration; unauthorized disclosure or access; or unlawful destruction as
						follows: The technical and organizational measures, internal controls, and information security
						routines set forth in Section 4.5 of the Terms of Service are hereby incorporated into this
						Annex 2 by this reference and are binding on the data importer as if they were set forth in this
						Annex 2 in their entirety.
					</p>
					<p>
						<em>
							For transfers to (sub-) processors, also describe the specific technical and organisational
							measures to be taken by the (sub-) processor to be able to provide assistance to the
							controller and, for transfers from a processor to a sub-processor, to the data exporter
						</em>
					</p>
					<p>
						The technical and organisational measures that the data importer will impose on sub-processors
						is set forth in this Annex II.
					</p>
				</blockquote>
				<h4>ANNEX III — LIST OF SUB-PROCESSORS</h4>
				<blockquote>
					<p>The controller has authorised the use of the sub-processors listed herein:</p>
				</blockquote>
				<table>
					<thead>
						<tr>
							<th>Company Name</th>
							<th className="text-center">Processing Location</th>
							<th className="text-center">Short Description</th>
							<th className="text-right">
								EEA Personal Data
								<br />
								Transfer Mechanism
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Amazon Web Services
								<br />
								(AWS)
							</td>
							<td className="text-center">United States</td>
							<td className="text-center">
								Data Center Services
								<br />- General Purpose
							</td>
							<td className="text-right">
								Standard Contractual
								<br />
								Clauses
							</td>
						</tr>
					</tbody>
				</table>
				<blockquote>
					<p>
						^1^&nbsp;Where the data exporter is a processor subject to Regulation (EU) 2016/679 acting on
						behalf of a Union institution or body as controller, reliance on these Clauses when engaging
						another processor (sub-processing) not subject to Regulation (EU) 2016/679 also ensures
						compliance with Article 29(4) of Regulation (EU) 2018/1725 of the European Parliament and of the
						Council of 23 October 2018 on the protection of natural persons with regard to the processing of
						personal data by the Union institutions, bodies, offices and agencies and on the free movement
						of such data, and repealing Regulation (EC) No 45/2001 and Decision No 1247/2002/EC (OJ L 295 of
						21.11.2018, p. 39), to the extent these Clauses and the data protection obligations as set out
						in the contract or other legal act between the controller and the processor pursuant to Article
						29(3) of Regulation (EU) 2018/1725 are aligned. This will in particular be the case where the
						controller and processor rely on the standard contractual clauses included in Decision 2021/915.
					</p>
					<p>
						^2^&nbsp;The Agreement on the European Economic Area (EEA Agreement) provides for the extension
						of the European Union&apos;s internal market to the three EEA States Iceland, Liechtenstein and
						Norway. The Union data protection legislation, including Regulation (EU) 2016/679, is covered by
						the EEA Agreement and has been incorporated into Annex XI thereto. Therefore, any disclosure by
						the data importer to a third party located in the EEA does not qualify as an onward transfer for
						the purpose of these Clauses.
					</p>
					<p>
						^3^&nbsp;This requirement may be satisfied by the sub-processor acceding to these Clauses under
						the appropriate Module, in accordance with Clause 7.
					</p>
					<p>
						^4^&nbsp;As regards the impact of such laws and practices on compliance with these Clauses,
						different elements may be considered as part of an overall assessment. Such elements may include
						relevant and documented practical experience with prior instances of requests for disclosure
						from public authorities, or the absence of such requests, covering a sufficiently representative
						time-frame. This refers in particular to internal records or other documentation, drawn up on a
						continuous basis in accordance with due diligence and certified at senior management level,
						provided that this information can be lawfully shared with third parties. Where this practical
						experience is relied upon to conclude that the data importer will not be prevented from
						complying with these Clauses, it needs to be supported by other relevant, objective elements,
						and it is for the Parties to consider carefully whether these elements together carry sufficient
						weight, in terms of their reliability and representativeness, to support this conclusion. In
						particular, the Parties have to take into account whether their practical experience is
						corroborated and not contradicted by publicly available or otherwise accessible, reliable
						information on the existence or absence of requests within the same sector and/or the
						application of the law in practice, such as case law and reports by independent oversight
						bodies.
					</p>
				</blockquote>
			</DivPageWrapper>
		</Page>
	);
};
