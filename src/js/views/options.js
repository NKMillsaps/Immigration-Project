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
