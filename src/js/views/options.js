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
								Student Visa F1 (academic) <br />
								F2 (students with families)
							</h5>
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
							<h5 className="card-title">I-539, Application To Extend/Change Nonimmigrant Status</h5>
							<p className="card-text">
								You should use this application if you are one of the nonimmigrants listed below and
								wish to apply to U.S. Citizenship and Immigration Services (USCIS) for an extension of
								stay or a change to another nonimmigrant status. In certain situations, you may use this
								application to apply for an initial nonimmigrant status. You may also use this
								application if you are a nonimmigrant F-1 or M-1 student applying for reinstatement.
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
