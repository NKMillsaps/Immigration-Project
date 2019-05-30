import React from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Modalf1 } from "../views/modalf1.js";

export class Options extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="card-deck">
					<div className="card">
						<div className="card-body">
							<h2 className="card-title">
								<u>
									Academic Student Visa F1 <br />
									Vocational Students Visa M1
								</u>
							</h2>
							<p className="card-text">
								If you wish to pursue full-time academic or vocational studies in the United States, you
								may be eligible for one of two nonimmigrant student categories. The “F” category is for
								academic students and the “M” is for vocational students. To learn more about “F”
								category please click here. If you are intetersted in Vocational Student Visa, please
								click here to find more information.
							</p>
							<p className="text-center">
								<Link to="/form">
									<button className="btn btn-primary">Apply for Student Visa with Family (F1)</button>
								</Link>
							</p>
							<p className="text-center">
								<Link to="/form">
									<button className="btn btn-primary">
										Apply for Student Visa without Family (F2)
									</button>
								</Link>
							</p>{" "}
						</div>
					</div>

					<div className="card">
						<div className="card-body">
							<h2 className="card-title">
								<u>
									Application To Extend or Change <brake />
									Nonimmigrant Status
								</u>
							</h2>
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
