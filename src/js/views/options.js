import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Options extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">
								I-485, Application to Register Permanent Residence or Adjust Status
							</h5>
							<p className="card-text">
								Form I-485, Application to Register Permanent Residence or Adjust Status, is used by a
								person in the United States to apply for lawful permanent resident status. Throughout
								these Instructions, we will sometimes refer to Form I-485 as an application for
								adjustment of status or as an adjustment application.
							</p>
							<p className="card-text">
								<button className="btn btn-primary">Continue</button>
							</p>
						</div>
					</div>

					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Student Visa F1 (academic), F2 (students with families)</h5>
							<p className="card-text">
								If you wish to pursue full-time academic or vocational studies in the United States, you
								may be eligible for one of two nonimmigrant student categories. The “F” category is for
								academic students and the “M” is for vocational students. To learn more, please see the
								Students and Exchange Visitors Program Web page on the U.S. Immigration and Customs
								Enforcement&#39;s website.
							</p>
							<p className="card-text">
								<button className="btn btn-primary">Continue</button>
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Work authorization</h5>
							<p className="card-text">
								Certain foreign nationals who are in the United States may file Form I-765, Application
								for Employment Authorization, to request employment authorization and an Employment
								Authorization Document (EAD). Other foreign nationals whose immigration status
								authorizes them to work in the United States without restrictions may also use Form
								I-765 to apply to U.S. Citizenship and Immigration Services (USCIS) for an EAD that
								shows such authorization.
							</p>
							<p className="card-text">
								<button className="btn btn-primary">Continue</button>
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Extend stay</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</p>
							<p className="card-text">
								<button className="btn btn-primary">Continue</button>
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
