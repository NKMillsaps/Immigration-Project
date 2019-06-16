import React from "react";
import { Link } from "react-router-dom";

export class NavbarSideLeft extends React.Component {
	render() {
		return (
			<nav className="navbar sticky-left navbar-light bg-light mb-3">
				<div className="d-none d-xl-block col-xl-2 bd-toc text-left">
					<ul className="section-nav">
						<li className="toc-entry toc-h2 ">
							<a href="#how-it-works">
								<b>Contacts</b>
							</a>
						</li>
						<li className="toc-entry toc-h2">
							<Link to="/doctors">
								<a href="#grid-options">
									<b>Medical Professionals</b>
								</a>
							</Link>
						</li>

						<li className="toc-entry toc-h2">
							<a href="#responsive-classes">
								<b>Translators</b>
							</a>
							<ul>
								<li className="toc-entry toc-h3 mb-5">
									<a href="#all-breakpoints">Spanish</a>
								</li>
								<li className="toc-entry toc-h3">
									<a href="#all-breakpoints">Russian</a>
								</li>
							</ul>
						</li>
						<li className="toc-entry toc-h2">
							<a href="#grid-options" />
							<p>
								<a href="https://www.uscis.gov">
									<b>USCIS</b>
								</a>
							</p>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
