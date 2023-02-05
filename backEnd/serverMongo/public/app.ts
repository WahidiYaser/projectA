console.log("connected");

async function handleGetAllUsers() {
    try {
        // @ts-ignore
        const { data } = await axios.get("/api/v1/users");
        console.log(data);
        // document.querySelector("#root")!.innerHTML = data.users[0].name;
    } catch (error) {
        console.error(error);
    }
}

async function handleRigestir(event: any) {
    try {
        event.preventDefault();
        const email = event.target.elements.RegEmailId.value;
        const password = event.target.elements.RegPassId.value;
        //@ts-ignore
        const { data } = await axios.post("/api/v1/users/register", {email, password});
        // console.log(`welcome to our website ${email}`);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

async function handleLogin(event: any) {
    try {
        event.preventDefault();
        const email = event.target.elements.LogEmailId.value;
        const password = event.target.elements.LogPassId.value;
        //@ts-ignore
        const {data} = await axios.post("/api/v1/users/login", {email, password});
        const {ok} = data;
        if(ok) console.log(data);
        else console.log("failed to Log In !!");
    } catch (error) {
        console.error(error);
    }
}

async function handleUpdatePasswordById(event: any) {
    try {
        event.preventDefault();
        const userId = event.target.elements.UpdId.value;
        const newPassword = event.target.elements.UpdNewPassId.value;
        //@ts-ignore
        const {data} = await axios.patch(`/api/v1/users/${userId}`, {password: newPassword});
        const {ok} = data;
        if(ok) {console.log(`succesfully changed passowrd`); console.log(data);}
        else throw new Error("failed to change Password !!");
    } catch (error) {
        console.error(error);
    }
}
