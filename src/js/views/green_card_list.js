import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Green_card_list extends React.Component {
	render() {
		return (
			<div className="text mt-5">
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h1 className="card-title" align="center">
								The List of Documents to file Application to Register Permanent Residence or Adjust
								Status required by USCIS
							</h1>

							<ol>
								<li> Form G1145 E-Notification of Application/Petition Acceptance </li>
								<li> Check in the amount of US $ 535.00 for form I-130 </li>{" "}
								<li>
									{" "}
									Check in the amount of US $ 1225.00 for form I-485{" "}
									<i>(if applicant 13 or younger the fee is $750) </i>{" "}
								</li>{" "}
								<li> I-130 Petition for Alien Relative</li>
								<ul>
									<li> Copy of Petitioners( US Citizen) passport</li>
									<li> Copy of Marriage Certificate </li>
									<li>Copy of Termination of Previous Marriage </li>
									<li> Two photos</li>
									<li>Affidavits sworn or affirmed by third parties </li>{" "}
									<li> G-1145 e-Notification of Application </li>
								</ul>
								<li> I-130A Supplemental Information for Spouse Beneficiary </li>{" "}
								<ul>
									<li>Copy of Beneficiary&#39;s (Alien Spouse) passport</li>
									<li>Two photos</li>
									<li> Copy of I-94</li>
									<li> Copy of I-797C (Notice of Action)</li>{" "}
									<li>G-1145 e-Notification of Application</li>
								</ul>
								<li> I-864 Affidavit of Support</li>
								<ul>
									<li>Copy of the passport</li>
									<li> Copy of W2 2016</li>
									<li> Copy of U.S. Individual Income Tax Return 2016 </li>
								</ul>
								<li> I-485 Application to Register Permanent Residence Or Adjust Status</li>{" "}
								<ul>
									<li>Copy of the Passport</li>
									<li>Copy of Marriage Certificate</li>
									<li>Two photos</li>
									<li>Copy of I-94</li>
									<li>Copy of the Visa</li>{" "}
									<li> Copy of Birth Certificate with certified translation </li>
									<li>Affidavits sworn or affirmed by third parties </li>
									<li> Joint Bank Account Statement</li>{" "}
									<li> G-1145 e-Notification of Application (optional)</li>{" "}
								</ul>
								<li> I-693 Report of Medical Examination and Vaccination Record (Sealed)</li>{" "}
								<li> I-765 Application For Employment Authorization</li>
								<ul>
									<li> Copy of the Passport </li>
									<li>Copy of the Visa</li>
									<li>Copy of I-94</li>
									<li>Two photos</li>
									<li>Copy of Birth Certificate with certified translation</li>
								</ul>
							</ol>

							<div className="card-footer text-right">
								<Link to="/form">
									<button className="btn btn-primary">Continue</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
