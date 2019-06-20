const { getState } = ({ getStore, setStore }) => {
    return
    {
        store:
        {
            demo: [
            {
                title: "FIRST",
                background: "white",
                initial: "white"
            }
        ]

            person: []
            spouse: []
            application: []
            forms: []        }

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
                    .then(getDataUpdated => {
                    fetch("https://3000-b5387517-91d1-4d21-b7bc-e35fc1a98079.ws-us0.gitpod.io/person")
                    .then(response => response.json())
                    .then(data => {
                    store.person = data;
                    getStore({ store });
                    });

                });


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

}};
                    }

// export default getState;