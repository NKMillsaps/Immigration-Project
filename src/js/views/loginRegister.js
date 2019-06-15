import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

// import "../../styles/demo.scss";

export class LoginRegister extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.demo.map((item, index) => {
								return (
									<form key={index}>
										<div className="form-group row">
											<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
												{item.title}
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
											<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
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
											<div className="col-sm-10">
												<button type="submit" className="btn btn-primary">
													Sign in
												</button>
											</div>
										</div>
									</form>
								);
							});
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
