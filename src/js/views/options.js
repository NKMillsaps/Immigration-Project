import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Options extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>OPTIONS</h1>
				<div className="card-deck">
					<div className="d-none d-xl-block col-xl-2 bd-toc text-left">
						<ul className="section-nav">
							<li className="toc-entry toc-h2">
								<a href="#how-it-works">Contacts</a>
							</li>
							<li className="toc-entry toc-h2">
								<a href="#grid-options">Medical Professionals</a>
							</li>

							<li className="toc-entry toc-h2">
								<a href="#responsive-classes">Translators</a>
								<ul>
									<li className="toc-entry toc-h3">
										<a href="#all-breakpoints">Spanish</a>
									</li>
									<li className="toc-entry toc-h3">
										<a href="#all-breakpoints">Russian</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>

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
								<button className="btn btn-second">Continue</button>
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Student</h5>
							<p className="card-text">
								This card has supporting text below as a natural lead-in to additional content.
							</p>
							<p className="card-text">
								<button className="btn btn-second">Continue</button>
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Work authorization</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</p>
							<p className="card-text">
								<button className="btn btn-second">Continue</button>
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
								<button className="btn btn-second">Continue</button>
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
