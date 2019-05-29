import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-justify mt-5">
				<div className="container ">
					<h1 className="font-weight-bold text-center">DIY Application</h1>
					<p>
						U.S. immigration laws provide a variety of ways for people to apply for a Green Card. The
						eligibility requirements may vary depending on the immigrant category you are applying under. Go
						to our Green Card Eligibility Categories page to see all the possible categories you can apply
						under and what the eligibility requirements are.
					</p>
					<p className="text-center">
						<Link to="/form">
							<button className="btn btn-primary">Apply for Student Visa with Family (F1)</button>
						</Link>
					</p>
					<p className="text-center">
						<Link to="/form">
							<button className="btn btn-primary">Apply for Student Visa without Family (F2)</button>
						</Link>
					</p>{" "}
					<p className="text-center">
						<Link to="/studentnotsure">
							<button className="btn btn-primary">
								Apply for Student Visa (Not sure where to start)
							</button>
						</Link>
					</p>
				</div>
			</div>
		);
	}
}
