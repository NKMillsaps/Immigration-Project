import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Green_card_list extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h2 className="card-title">
								<u>Application to Register Permanent Residence or Adjust Status (I-485)</u>
							</h2>
							<p className="card-text">
								The Full List of Document required by USCIS. I-130 (Petition for Alien Relative), I-130A
								(Supplemental Information for Spouse Beneficiary), I-864 (Affidavit of Support), I-485
								(Application to Register Permanent Residence or Adjust Status), I-693 (Report of Medical
								Examination and Vaccination Record (SEALED), I-765 (Application for Employment
								Authorization). Contents include: 1. Form G1145 E-Notification of Application/Petition
								Acceptance 2. Check in the amount of US $ 535.00 for form I-130 3. Check in the amount
								of US $ 1225.00 for form I-485 4. I-130 Petition for Alien Relative • Copy of
								Petitioners( US Citizen) passport • Copy of Marriage Certificate • Copy of Termination
								of Previous Marriage • Two photos • Affidavits sworn or affirmed by third parties •
								G-1145 e-Notification of Application 5. I-130A Supplemental Information for Spouse
								Beneficiary • Copy of Beneficiary&#39;s (Alien Spouse) passport • Two photos • Copy of
								I-94 • Copy of I-797C (Notice of Action) • G-1145 e-Notification of Application 6. I-864
								Affidavit of Support • Copy of the passport • Copy of W2 2016 • Copy of U.S. Individual
								Income Tax Return 2016 7. I-485 Application to Register Permanent Residence Or Adjust
								Status • Copy of the Passport • Copy of Marriage Certificate • Two photos • Copy of I-94
								• Copy of I-797C (Notice of Action) • Copy of the Visa • Copy of Birth Certificate with
								certified translation • Affidavits sworn or affirmed by third parties • Joint Bank
								Account Statement • G-1145 e-Notification of Application 8. I-693 Report of Medical
								Examination and Vaccination Record (Sealed) 9. I-765 Application For Employment
								Authorization • Copy of the Passport • Copy of the Visa • Copy of I-94 • Two photos •
								Copy of Birth Certificate with certified translation
							</p>

							<p className="text-center">
								<Link to="/i130apetition">
									<button className="btn btn-primary">Apply for a {"green card"}</button>
								</Link>
							</p>
						</div>
					</div>
				</div>
				<a href="#" className="btn btn-success float-right">
					Continue
				</a>
			</div>
		);
	}
}
