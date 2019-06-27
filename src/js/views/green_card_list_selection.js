import React from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Green_card_list_selection extends React.Component {
	render() {
		return (
			<div className="container mx-auto p-2">
				<div className="row card-header text-center mb-1">
					<h3 className="w-100 float-left">General Infromation</h3>
					<h6>Need to be filled before starting the application</h6>
				</div>
				<div className="row mb-3">
					<div className="col-8">Spouse Form</div>

					<div className="col">
						<Link to="/spouse">
							<i className="far fa-clipboard fa-2x text-info" />
						</Link>
					</div>
					<div className="col text-center ">
						<input className="form-check-input" type="checkbox" value="" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-8">Address Form</div>

					<div className="col">
						<Link to="/address-form">
							<i className="far fa-clipboard fa-2x text-info" />
						</Link>
					</div>
					<div className="col text-center ">
						<input className="form-check-input" type="checkbox" value="" />
					</div>
				</div>

				<div className="row card-header text-center mb-1">
					<h3>The List of Application Forms to Register Permanent Residence </h3>
				</div>
				<div className="row mb-3">
					<div className="col-8">
						<h5>Form Name</h5>
					</div>
					<div className="col">
						<h5>Edit</h5>
					</div>
					<div className="col">
						<h5>Status</h5>
					</div>
				</div>

				<Context.Consumer>
					{({ store, actions }) => {
						return store.forms.map((item, index) => {
							return (
								<div key={index} className="row mb-2">
									<div className="col-8">{item.forms_name}</div>

									<div className="col">
										<Link to={"/form/" + item.forms_name}>
											<i className="far fa-clipboard fa-2x text-info" />
										</Link>
									</div>
									<div className="col text-center ">
										<input className="form-check-input" type="checkbox" value="" />
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>

				<div className="card-footer text-right">
					<Link to="/green_card_list">
						<button className="btn btn-primary">Continue</button>
					</Link>
				</div>
			</div>
		);
	}
}
