import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

//views
import { Home } from "./views/home";
import { Form } from "./views/form";
import { FormCopy } from "./views/form_copy";
import { Doctors } from "./views/doctors";
import { Register } from "./views/register";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Options } from "./views/options";
import { Modalf1 } from "./views/modalf1";
import { I130apetition } from "./views/i130apetition";
import { CreditCard } from "./views/creditCard";

// components
import { Navbar } from "./component/navbar";
import { NavbarSideLeft } from "./component/navbarSideLeft";
import { Footer } from "./component/footer";

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
							<div className="col-2 p-0">
								<NavbarSideLeft />
							</div>
							<div className="col p-0">
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/form" component={Form} />
									<Route exact path="/i130apetition" component={I130apetition} />
									<Route exact path="/formcopy" component={FormCopy} />
									<Route exact path="/doctors" component={Doctors} />
									<Route path="/register" component={Register} />
									<Route path="/options" component={Options} />
									<Route path="/creditcard" component={CreditCard} />
									<Route path="/single/:theid" component={Single} />
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
