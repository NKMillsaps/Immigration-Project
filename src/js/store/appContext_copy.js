import React from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const injectContext = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here
			 **/
			fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/person")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.person = data;
					this.setState({ store });
				});
                	fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/spouse")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.spouse = data;
					this.setState({ store });
				});
                	fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/application")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.application = data;
					this.setState({ store });
				});
                	fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/forms")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.forms = data;
					this.setState({ store });
				});
		}

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectContext;
