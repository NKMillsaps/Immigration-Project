import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Options } from "../views/options.js";
import { I130apetition } from "../views/i130petition.js";
import { CreditCard } from "../views/creditCard.js";
import { Register } from "../views/register.js";
import { Register_2 } from "../views/register_2.js";
import { Green_card_list } from "../views/green_card_list.js";
import { Green_card_list_selection } from "../views/green_card_list_selection.js";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-justify">
				<div className="container ">
					<div className="jumbotron jumbotron-fluid border border-light">
						<div className="container shadow-lg p-3 mb-5 rounded">
							<div className="container">
								<h1 className="font-weight-bold text-center">Immigration ZOOM</h1>
								<p className="lead">
									<small>
										<em>
											U.S. immigration laws provide a variety of ways for people to apply for a
											Studen Visa. The eligibility requirements may vary depending on the
											immigrant category you are applying under. Go to our Green Card Eligibility
											Categories page to see all the possible categories you can apply under and
											what the eligibility requirements are. Here you can find all information you
											need to file with USCIS in order to start your process of getting your GREEN
											CARD.
										</em>
									</small>
								</p>
							</div>
						</div>
					</div>
					<div>
						<Options />
					</div>
				</div>
			</div>
		);
	}
}
