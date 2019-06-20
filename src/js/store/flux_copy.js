const getState = ({ getStore, setStore }) => {
    return
    {
        store:
        {
            demo: [
            {
                title: "FIRST",
                background: "white",
                initial: "white"
            }],

            person: [],
            spouse: [],
            application: [],
            forms: []
        },
                actions: {
                addPerson: personInput => {
                const store = getStore();

                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/person",
                    {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                    person: personInput
                    })
                    })
                    .then(getDataUpdated =>
                    {
                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/person")
                    .then(response => response.json())
                    .then(data => {
                    store.person = data;
                    getStore({ store });
                    }
                    );

                    });

                    actions: {
                    addSpouse: spouseInput => {
                    const store = getStore();

                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/spouse", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                    spouse: spouseInput
                    })
                    }).then(getDataUpdated => {
                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/spouse")
                    .then(response => response.json())
                    .then(data => {
                    store.spouse = data;
                    getStore({ store });
                    });
                    });

                    actions: {
                    addApplication: applicationInput => {
                    const store = getStore();

                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/application", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                    application: applicationInput
                    })
                    }).then(getDataUpdated => {
                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/application")
                    .then(response => response.json())
                    .then(data => {
                    store.application = data;
                    getStore({ store });
                    });
                    });

                    actions: {
                    addForms: formsInput => {
                    const store = getStore();

                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/forms", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({
                    forms: formsInput
                    })
                    }).then(getDataUpdated => {
                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/forms")
                    .then(response => response.json())
                    .then(data => {
                    store.forms = data;
                    getStore({ store });
                    });
                    });
},

actions: {
changeColor: (index, color) => {
//get the store
const store = getStore();

//we have to loop the entire demo array to look for the respective index
//and change its color
const demo = store.demo.map((elm, i) => {
if (i === index) elm.background = color;
return elm;
});

//reset the global store
setStore({ demo: demo });
}


}
};
};

export default getState;




const getState = ({ getStore, setStore }) => {
	return {
		store: {
			todo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			todolist: []
		},
		actions: {
			addTodo: todoInput => {
				const store = getStore();

				fetch("https://3000-b56f907a-188b-42a9-83e2-c576c11ea365.ws-us0.gitpod.io/todolist", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						todo: todoInput
					})
				}).then(getDataUpdated => {
					fetch("https://3000-b56f907a-188b-42a9-83e2-c576c11ea365.ws-us0.gitpod.io/todolist")
						.then(response => response.json())
						.then(data => {
							store.todo = data;
							getStore({ store });
						});
				});
			},

			changeColor: (index, color) => {
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.todo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ store });
			}
		}
	};
};

export default getState;
