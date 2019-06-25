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
						email: "email",
						password: "password",
						username: "username",
						lastname: "lastname",
						firstname: "firstname",
						middlename: "middlename",
						dayPhone: "dayPhone",
						mobile: "mobile"
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

			addSpouse: (email, password, lastName, firstName, middleName, dayPhone, mobile) => {
				const store = getStore();

				fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/spouse", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						email: email,
						password: password,
						lastname: lastName,
						firstname: firstName,
						middlename: middleName,

						dayphone: dayPhone,
						mobile: mobile
					})
				}).then(getDataUpdated => {
					fetch("https://3000-bbdde477-c4f0-438a-b439-92cb530db604.ws-us0.gitpod.io/spouse")
						.then(response => response.json())
						.then(data => {
							store.spouse = data;
							getStore({ store });
						});
				});
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

export default getState;
