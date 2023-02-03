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
        const newName = event.target.elements.newName.value;
        // @ts-ignore 
        const {data} = await axios.patch(`/api/v1/users/${id}`, {newName});
        console.log(data);
         renderUsers(data);
    } catch (error) {
        console.error(error);
    }
}

function renderUsers(arr: any){
    let html = '';
    arr.users.forEach((element: any) => {
        html += `<p>name: ${element.name}, ${element.age} years old, the id is ${element.id}</p><br/>`
    });
    document.getElementById("root")!.innerHTML = html;
}

function renderUser(str: any){
    let html = `<p>name: ${str.user.name}, ${str.user.age} years old, the id is ${str.user.id}</p><br/>`;
    document.getElementById("root")!.innerHTML = html;
}