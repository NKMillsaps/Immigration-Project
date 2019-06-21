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
			forms: []
		},

		actions: {
			addPerson: () => {
				const store = getStore();

				fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: "United",

						lastname: "United",
						firstname: "United",
						middlename: "United",
						US_Address: "United",
						apartment: "221",
						city: "United",
						state: "United",
						zip: "United",
						sex: "m",
						dateofbirth: "1977-12-06",
						countryofbirth: "United",
						citizenship: "United",
						mobile: "United",
						username: "paolo"
					})
				}).then(getDataUpdated => {
					fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/person")
						.then(response => response.json())
						.then(data => {
							store.person = data;
							setStore({ store });
						});
				});
			},

			addSpouse: (
				email,
				password,
				lastName,
				firstName,
				middleName,
				US_Address,
				apartment,
				city,
				state,
				zip,
				sex,
				dateOfBirth,
				countryOfBirth,
				citizenship,
				dayPhone,
				mobile
			) => {
				const store = getStore();

				fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/spouse", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password,
						lastname: lastName,
						firstname: firstName,
						middlename: middleName,
						US_Address: US_Address,
						apartment: apartment,
						city: city,
						state: state,
						zip: zip,
						sex: sex,
						dateofbirth: dateOfBirth,
						countryofbirth: countryOfBirth,
						citizenship: citizenship,
						dayphone: dayPhone,
						mobile: mobile
					})
				}).then(getDataUpdated => {
					fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/spouse")
						.then(response => response.json())
						.then(data => {
							store.spouse = data;
							getStore({ store });
						});
				});
			},

			addApplication: application_name => {
				const store = getStore();

				fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/application", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						application_name: application_name
					})
				}).then(getDataUpdated => {
					fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/application")
						.then(response => response.json())
						.then(data => {
							store.application = data;
							getStore({ store });
						});
				});
			},

			addForms: forms_name => {
				const store = getStore();

				fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/forms", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						forms_name: forms_name
					})
				}).then(getDataUpdated => {
					fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/forms")
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

export default getState;
// email,
// 				lastName,
// 				firstName,
// 				middleName,
// 				US_Address,
// 				city,
// 				zip,
// 				countryOfBirth,
// 				citizenship,
// 				mobile
