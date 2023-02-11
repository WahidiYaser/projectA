console.log("connected");


async function handleErrorFunction() {
    try {

    } catch (error) {

    }
}

async function handleRegister(event: any) {
    try {
        event.preventDefault();
        const email = event.target.elements.RegEmailId.value;
        const password = event.target.elements.RegPassId.value;
        const repPassword = event.target.elements.RegRePassId.value;
        //@ts-ignore
        const { data } = await axios.post("/api/v1/users/register", { email, password, repPassword });
        // console.log(`welcome to our website ${email}`);
        const { ok } = data;
        if (ok) window.location.href = "./update.html";
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
        const { data } = await axios.post("/api/v1/users/login", { email, password });
        const { logging } = data;
        if (logging) window.location.href = "./update.html";
        else console.log("failed to Log In !!");
    } catch (error) {
        console.error(error);
    }
}

async function handleCheckIfUserConnected() {
    try {
        //@ts-ignore
        const { data } = await axios.get("/api/v1/users/get-user-by-cookie");
        const { userDB } = data;
        if (userDB) window.location.href = "./home.html";
    } catch (error) {
        console.error(error);
    }
}
async function handleGetUserFromCookie() {
    try {
        //@ts-ignore
        const { data } = await axios.get("/api/v1/users/get-user-by-cookie");
        const { userDB } = data;
        if (userDB) document.querySelector("#userNameByCookie")!.innerHTML = `${userDB.email}`;
        else window.location.href = "./index.html";
    } catch (error) {
        console.error(error);
    }
}

async function handleUpdatePassword(event: any) {
    try {
        event.preventDefault();
        const password = event.target.elements.UpPassId.value;
        //@ts-ignore
        const { data } = await axios.put("/api/v1/users/update", { password });
        const { ok } = data;
        if (ok) {
            console.log(data);
            window.location.href = "./index.html";
        }
        else console.log("failed to Update !!");
    } catch (error) {
        console.error(error);
    }
}
async function handleDeleteUser(event: any) {
    try {
        event.preventDefault();
        //@ts-ignore
        const { data } = await axios.delete("/api/v1/users/delete");
        const { ok, userDB } = data;
        if (ok) console.log(`your account ${userDB.email} was succesfully deleted`);
        else throw new Error(`error at FUNCTION handleDeleteUser at FILE app.ts`);
    } catch (error) {
        console.error(error);
    }
}
async function handleLogOut(event: any) {
    try {
        event.preventDefault();
        //@ts-ignore
        const { data } = await axios.get("/api/v1/users/logout");
        const { loggedout } = data;
        if (loggedout) window.location.href = "./index.html";
        else throw new Error(`error at FUNCTION handleLogOut at FILE app.ts`);
    } catch (error) {
        console.error(error);
    }
}

async function handleGetUserByEmail(event: any) {
    try {
        event.preventDefault();
        const target = (event.target).parentElement;
        const friendEmail = target.childNodes[0].innerText;
        //@ts-ignore
        const { data } = await axios.get(`/api/v1/users/get-user-by-email/${friendEmail}`);
        const { friendDB } = data;
        if (!friendDB) throw new Error("failed to find friendDB at handleGetUserByEmail AT app.ts");
        else window.location.href = "./profile.html";
    } catch (error) {
        console.error(error);
    }
}

async function handleGetUsersList() {
    try {
        //@ts-ignore
        const { data } = await axios.get("/api/v1/users/get-all-users");
        const { usersDB, myUser } = data;
        if (!usersDB) throw new Error("getuserlist userdb is back empty");
        const ulList = document.querySelector("#friendsList");

        usersDB.forEach((user: any) => {
            if (user._id != myUser._id) {
                const li = document.createElement("li");
                const a = document.createElement("a");
                const btn = document.createElement("button");
                btn.classList.add("navUsersBtn");
                btn.innerHTML = "Visit Profile";
                btn.addEventListener("click", handleGetUserByEmail);
                a.innerHTML = user.email;
                li.appendChild(a);
                li.appendChild(btn);
                ulList!.appendChild(li);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

async function handleUpdateChat(event: any) {
    try {
        event.preventDefault();
        const myMessage = event.target.elements.myMessage.value;
        //@ts-ignore
        const { data } = await axios.put("/api/v1/chats/update-chat", {myMessage});
        console.log(data);
    } catch (error: any) {
        console.error(error)
    }
}