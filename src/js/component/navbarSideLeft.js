import React from "react";
import { Link } from "react-router-dom";

export class NavbarSideLeft extends React.Component {
	render() {
		return (
			<nav className="navbar sticky-left">
				<div className="d-none d-xl-block col-xl-4 bd-toc">
					<div className="col m-4">
						<div className="bd-toc-item">
							<ul className="nav bd-sidenav">
								<li>
									<a href="#how-it-works">Contacts</a>
								</li>
							</ul>
						</div>
						<div className="bd-toc-item">
							<ul className="nav bd-sidenav">
								<Link to="/doctors">
									<li>
										<a href="/docs/4.0/layout/overview/">Doctors</a>
									</li>
								</Link>
							</ul>
						</div>
						<div className="bd-toc-item">
							<a className="bd-toc-link" href="#all-breakpoints">
								Translation Agencies
							</a>

							<ul name="spanishList" className="nav bd-sidenav">
								<li>
									<a href="#all-breakpoints">Spanish</a>
								</li>
								<li>
									<a href="#all-breakpoints">Russian</a>
								</li>
							</ul>
						</div>
						<div className="bd-toc-item active">
							<a href="#grid-options" />
							<p>
								<a href="https://www.uscis.gov">
									<b>USCIS</b>
								</a>
							</p>
						</div>

						<div className="bd-toc-item">
							<a className="bd-toc-link" href="/docs/4.0/about/overview/">
								About
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
