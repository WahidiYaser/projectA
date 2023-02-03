console.log("connected");

async function handleGetUsers() {
    try {
        // @ts-ignore        
        const { data } = await axios.get("/api/v1/users");
        const { success, users, error } = data;
        console.log(data);
        // console.log(success);
        // console.log(users);
        // console.log(error);
        renderUsers(data);
    } catch (error) {
        console.error(error);
    }
}

async function handleGetUserById(event: any) {
    try {
        event.preventDefault();
        const id = event.target!.elements.userId.value;
        // @ts-ignore 
        const { data } = await axios.get(`/api/v1/users/${id}`);
        console.log(data);
        renderUser(data);
        // document.getElementById("root")!.innerHTML = data; 
    } catch (error) {
        console.error(error);
    }
}

async function handleUpdateUserById(event: any) {
    try {
        event.preventDefault();
        const id = event.target.elements.userUpId.value;
        const firstName = event.target.elements.firstName.value;
        const lastName = event.target.elements.lastName.value;
        const address = event.target.elements.address.value;
        const age = event.target.elements.age.valueAsNumber;
        // @ts-ignore 
        const { data } = await axios.patch(`/api/v1/users/${id}`, { firstName, lastName, address, age });
        console.log(data);
        renderUsers(data);
    } catch (error) {
        console.error(error);
    }
}

async function handleAddNewUser(event: any) {
    try {
        event.preventDefault();
        const firstName = event.target.elements.firstName.value;
        const lastName = event.target.elements.lastName.value;
        const address = event.target.elements.address.value;
        const age = event.target.elements.age.valueAsNumber;
        // @ts-ignore 
        const { data } = await axios.post("/api/v1/users", { firstName, lastName, address, age });
        console.log(data);
        renderUsers(data);
    } catch (error) {
        console.error(error);
    }
}
async function handleDeleteUserById(event: any) {
    try {
        event.preventDefault();
        const id = event.target!.elements.userId.value;
        // @ts-ignore 
        const { data } = await axios.delete(`/api/v1/users/${id}`);
        console.log(data);
        renderUsers(data);
    } catch (error) {
        console.error(error);
    }
}

function renderUsers(arr: any) {
    let html = '';
    arr.users.forEach((element: any) => {
        html += `<p>name: ${element.firstName} ${element.lastName}, ${element.age} years old, lives in ${element.address} id:${element.id}</p><br/>`
    });
    document.getElementById("root")!.innerHTML = html;
}

function renderUser(str: any) {
    let html = `<p>name: ${str.user.firstName} ${str.user.lastName}, ${str.user.age} years old, lives in ${str.user.address} id:${str.user.id}</p><br/>`;
    document.getElementById("root")!.innerHTML = html;
}