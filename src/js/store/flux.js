import PropTypes from "prop-types";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				}
			],

			person: [],
			spouse: [],
			application: [],
			forms: [],
			tempLoggedUser: null,
			tempLoggedSpouse: null,
			tempLoggedSpous: null,
			token: null
		},

		actions: {
			submitForm: (
				email,
				lastname,
				firstname,
				middlename,
				dayPhone,
				mobile,
				address,
				apartment,
				zipCode,
				city,
				state,
				country,
				spouseEmail,
				spouseLastname,
				employerName
			) => {
				fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/forms", {
					method: "PUT",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						lastname: lastname,
						firstname: firstname,
						middlename: middlename,
						dayPhone: dayPhone,
						mobile: mobile,

						spouseEmail: spouseEmail,
						spouseLastname: spouseLastname,

						address: address,
						apartment: apartment,
						zipCode: zipCode,
						city: city,
						state: state,
						country: country,

						employerName: employerName
					})
				});
			},
			addApplication: () => {
				const store = getStore();
				console.log("added user");

				fetch(
					"https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person/" +
						store.tempLoggedUser.id,
					{
						method: "PUT",
						headers: { "Content-type": "application/json" },
						body: JSON.stringify({
							application: [5],
							spouse: []
						})
					}
				).then(getDataUpdated => {
					fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person")
						.then(response => response.json())
						.then(data => {
							store.person = data;
							setStore(store);
						});
				});
				props.history.push("/loginregister");
			},
			tryMethod: () => {
				console.log("ciao");
			},
			logoutUser: () => {
				const store = getStore();
				setStore({ token: null, tempLoggedUser: null, tempLoggedSpouse: null });
			},
			updatePersonAddress: (address, apartment, zipCode, city, state, country, props) => {
				const store = getStore();
				fetch(
					"https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person/" +
						store.tempLoggedUser.id,
					{
						method: "PUT",
						headers: { "Content-type": "application/json" },
						body: JSON.stringify({
							address: address,
							apartment: apartment,
							zipCode: zipCode,
							city: city,
							state: state,
							country: country,
							application: [],
							spouse: []
						})
					}
				).then(getDataUpdated => {
					fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person")
						.then(response => response.json())
						.then(data => {
							store.person = data;
							setStore(store);
						});
				});
				props.history.push("/green_card_list_selection");
			},
			registerPerson: (email, username, lastname, firstname, middlename, dayPhone, mobile, props) => {
				const store = getStore();
				console.log("added user");

				fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						username: username,
						lastname: lastname,
						firstname: firstname,
						middlename: middlename,
						dayPhone: dayPhone,
						mobile: mobile,
						spouse: [],
						application: []
					})
				}).then(getDataUpdated => {
					fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person")
						.then(response => response.json())
						.then(data => {
							store.person = data;
							setStore(store);
						});
				});
				props.history.push("/loginregister");
			},

			loginUser: (username, email, props) => {
				const store = getStore();
				const userLogIndex = store.person.findIndex(x => {
					return x.email === email;
				});
				let loggedUser = store.person.find(item => {
					return item.email === email;
				});
				fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/login", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email
					})
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({
							token: data.jwt,
							tempLoggedUser: loggedUser,
							tempLoggedSpouse: loggedUser.spouse[0]
						});
					})
					.catch(error => console.error("Error:", error));

				props.history.push("/");
			},

			addSpouse: (spouseEmail, spouseLastname, props) => {
				const store = getStore();

				fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/spouse", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						spouseEmail: spouseEmail,
						spouseLastname: spouseLastname
					})
				})
					.then(res => res.json())
					.then(res => {
						console.log(res);
						setStore({
							tempLoggedSpous: res.id
						});
					})
					.then(getDataUpdated => {
						fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/spouse")
							.then(response => response.json())
							.then(data => {
								// store.spouse = data;
								setStore({ spouse: data });
							});
					})

					.then(updatePersonSpouse => {
						fetch(
							"https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person/" +
								store.tempLoggedUser.id,
							{
								method: "PUT",
								headers: { "Content-type": "application/json" },
								body: JSON.stringify({
									application: [],
									spouse: [store.tempLoggedSpous]
								})
							}
						);
					})
					.then(getDataUpdated => {
						fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person")
							.then(response => response.json())
							.then(updatePerson => {
								// store.person = data;
								setStore({ person: updatePerson });
							});
					});
				props.history.push("/green_card_list_selection");
			},

			addApplication: application_name => {
				const store = getStore();

				fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/application", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						application_name: application_name
					})
				}).then(getDataUpdated => {
					fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/application")
						.then(response => response.json())
						.then(data => {
							store.application = data;
							getStore({ store });
						});
				});
			},

			addForms: forms_name => {
				const store = getStore();

				fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/forms", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						forms_name: forms_name
					})
				}).then(getDataUpdated => {
					fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/forms")
						.then(response => response.json())
						.then(data => {
							store.forms = data;
							getStore({ store });
						});
				});
			}
		}
	};
};
getState.propTypes = {
	history: PropTypes.object
};

export default getState;
