import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Register } from "../views/register.js";

// import "../../styles/demo.scss";

export class LoginRegister extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="text-center mt-5">
					<div className="card-deck">
						<div className="card">
							<div className="card-body">
								<h6 className="card-title">
									<u>If you are existing customer please LOG IN</u>
								</h6>
								<p className="card-text">
									<ul className="list-group">
										<div className="form-group row">
											<label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
												Email
											</label>
											<div className="col-sm-10">
												<input
													type="email"
													className="form-control"
													id="inputEmail3"
													placeholder="Email"
												/>
											</div>
										</div>
										<div className="form-group row">
											<label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
												Password
											</label>
											<div className="col-sm-10">
												<input
													type="password"
													className="form-control"
													id="inputPassword3"
													placeholder="Password"
												/>
											</div>
										</div>
										<div className="form-group row">
											<div className="col-sm-10 ">
												<button type="submit" className="btn btn-primary">
													Log in
												</button>
											</div>
										</div>
									</ul>
								</p>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<h6 className="card-title">
									<u>If you are new customer please REGISTER</u>
								</h6>
								<p className="card-text">
									<Register />
								</p>
							</div>
						</div>
					</div>
					<a href="#" className="btn btn-success float-right">
						Continue
					</a>
				</div>

				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
