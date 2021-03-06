import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

//views
import { Home } from "./views/home";
import { Form } from "./views/form";
import { Form_i539 } from "./views/form_i539";
import { FormCopy } from "./views/form_copy";
import { RegisterMain } from "./views/registerMain";
import { SpouseForm } from "./views/spouseForm";
import { AddressForm } from "./views/addressForm";
import { LoginRegister } from "./views/loginRegister";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Options } from "./views/options";
import { I130apetition } from "./views/i130apetition";
import { CreditCard } from "./views/creditCard";
import { Green_card_list } from "./views/green_card_list";
import { Green_card_list_selection } from "./views/green_card_list_selection";

// components
import { Navbar } from "./component/navbar";
import { NavbarSideLeft } from "./component/navbarSideLeft";
import { Footer } from "./component/footer";
import { Doctors } from "./component/doctors";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<div className="row">
							{/*<div className="col-2 p-0">
								<NavbarSideLeft />
							</div>*/}
							<div className="col p-0">
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/form/:formname" component={Form} />
									<Route exact path="/i130apetition" component={I130apetition} />
									<Route exact path="/address-form" component={AddressForm} />
									<Route exact path="/doctors" component={Doctors} />
									<Route exact path="/spouse" component={SpouseForm} />
									<Route exact path="/form_i539" component={Form_i539} />
									<Route exact path="/register" component={RegisterMain} />
									<Route path="/loginregister" component={LoginRegister} />
									<Route path="/options" component={Options} />

									<Route path="/creditcard" component={CreditCard} />
									<Route path="/single/:theid" component={Single} />
									<Route path="/green_card_list" component={Green_card_list} />
									<Route path="/green_card_list_selection" component={Green_card_list_selection} />

									<Route render={() => <h1>Not found!</h1>} />
								</Switch>
							</div>
						</div>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
