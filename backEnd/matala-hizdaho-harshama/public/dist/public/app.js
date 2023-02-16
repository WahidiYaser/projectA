"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("connected");
function handleErrorFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
        }
        catch (error) {
        }
    });
}
function handleRegister(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const email = event.target.elements.RegEmailId.value;
            const password = event.target.elements.RegPassId.value;
            const repPassword = event.target.elements.RegRePassId.value;
            const imageSrc = event.target.elements.imageSrc.value;
            //@ts-ignore
            const { data } = yield axios.post("/api/v1/users/register", { email, password, repPassword, imageSrc });
            // console.log(`welcome to our website ${email}`);
            const { registered } = data;
            if (registered)
                window.location.href = "./update.html";
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleLogin(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const email = event.target.elements.LogEmailId.value;
            const password = event.target.elements.LogPassId.value;
            //@ts-ignore
            const { data } = yield axios.post("/api/v1/users/login", { email, password });
            const { logging } = data;
            if (logging)
                window.location.href = "./update.html";
            else
                console.log("failed to Log In !!");
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleCheckIfUserConnected() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/users/get-user-by-cookie");
            const { userDB } = data;
            if (userDB)
                window.location.href = "./home.html";
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGetUserFromCookie() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/users/get-user-by-cookie");
            const { userDB } = data;
            if (userDB)
                document.querySelector("#userNameByCookie").innerHTML = `${userDB.email}`;
            else
                window.location.href = "./index.html";
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleUpdatePassword(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const password = event.target.elements.UpPassId.value;
            //@ts-ignore
            const { data } = yield axios.put("/api/v1/users/update-password", { password });
            const { ok } = data;
            if (ok) {
                console.log("succesfully password updated");
            }
            else {
                console.log("failed to Update password!!");
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleUpdateImageSrc(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const imageSrc = event.target.elements.imageSrc.value;
            //@ts-ignore
            const { data } = yield axios.put("/api/v1/users/update-photo", { password });
            const { ok } = data;
            if (ok) {
                console.log("succesfully photo updated");
            }
            else {
                console.log("failed to Update photo!!");
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleDeleteUser(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            //@ts-ignore
            const { data } = yield axios.delete("/api/v1/users/delete");
            const { ok, userDB } = data;
            if (ok)
                console.log(`your account ${userDB.email} was succesfully deleted`);
            else
                throw new Error(`error at FUNCTION handleDeleteUser at FILE app.ts`);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleLogOut(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/users/logout");
            const { loggedout } = data;
            if (loggedout)
                window.location.href = "./index.html";
            else
                throw new Error(`error at FUNCTION handleLogOut at FILE app.ts`);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGetUserByEmail(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const target = (event.target).parentElement;
            const friendEmail = target.childNodes[0].innerText;
            //@ts-ignore
            const { data } = yield axios.get(`/api/v1/users/get-user-by-email/${friendEmail}`);
            const { friendDB } = data;
            if (!friendDB)
                throw new Error("failed to find friendDB at handleGetUserByEmail AT app.ts");
            else
                window.location.href = "./profile.html";
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleDeleteFriendFromCookie() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get(`/api/v1/users/delete-user-from-cookies`);
            const { deleted } = data;
            if (!deleted)
                throw new Error("failed to delete friendCookie in handleDeleteFriendFromCookie AT app.ts");
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGetUsersList() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/users/get-all-users");
            const { usersDB, myUser } = data;
            if (!usersDB)
                throw new Error("getuserlist userdb is back empty");
            const ulList = document.querySelector("#friendsList");
            usersDB.forEach((user) => {
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
                    ulList.appendChild(li);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleUpdateChat(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const myMessage = event.target.elements.myMessage.value;
            //@ts-ignore
            const { data } = yield axios.put("/api/v1/chats/update-chat", { myMessage });
            document.location.reload();
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGetChatsHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/chats/get-all-chats");
            const { chatDB, friendChatDB } = data;
            // console.log(typeof(data));
            checkMessagesOrder(chatDB, friendChatDB);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function checkMessagesOrder(arrUser, arrFriend) {
    if (arrFriend) {
        let { chatMsg } = arrFriend;
        arrFriend = chatMsg;
    }
    if (arrUser) {
        let { chatMsg } = arrUser;
        arrUser = chatMsg;
    }
    let newArray = [];
    if (arrFriend) {
        // typeof (arrFriend) != `undefined` || null
        arrFriend.forEach((elem) => {
            elem._id = (new Date(parseInt((elem._id).substring(0, 8), 16) * 1000)).toISOString();
            let span = document.createElement("span");
            span.innerHTML = "Friend: " + elem.msg;
            span.setAttribute("class", "friendChat");
            span.setAttribute("id", elem._id);
            newArray.push(span);
        });
    }
    if (arrUser) {
        arrUser.forEach((elem) => {
            elem._id = (new Date(parseInt((elem._id).substring(0, 8), 16) * 1000)).toISOString();
            let span = document.createElement("span");
            span.innerHTML = "Me: " + elem.msg;
            span.setAttribute("class", "meChat");
            span.setAttribute("id", elem._id);
            newArray.push(span);
        });
    }
    if (newArray) {
        newArray.sort(function (a, b) {
            return ((a.id < b.id) ? -1 : ((a.id == b.id) ? 0 : 1));
        });
        newArray.forEach((element) => {
            // console.log(element);
            document.querySelector(".showChat").appendChild(element);
        });
    }
}
function handleAddFriend() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/users/add-friend");
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleRemoveFriend() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/users/remove-friend");
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleCheckIfAreFriends() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/users/check-if-friends");
            const { areFriends } = data;
            if (areFriends)
                document.querySelector("#addFriend").style.display = "none";
            else
                document.querySelector("#removeFriend").style.display = "none";
            // console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGetFriendInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/users/get-friend-info");
            // const { imageSrc } = data;
            const { friendDB } = data;
            if (friendDB) {
                document.querySelector("#profilePhoto").src = `${friendDB.imageSrc}`;
            }
            document.querySelector(".friendName").innerHTML = `${friendDB.email}`;
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGoToUpdateHtml(event) {
    try {
        event.preventDefault();
        window.location.href = "./update.html";
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddPost(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const imgToPost = event.target.elements.imgToPost.value;
            const textToPost = event.target.elements.textToPost.value;
            //@ts-ignore
            const { data } = yield axios.post("/api/v1/posts/add-post", { imgToPost, textToPost });
            const { postDB } = data;
            renderPost(postDB);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGetAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/posts/get-all-posts");
            const { postsDB } = data;
            renderPosts(postsDB);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function renderPost(postDB) {
    try {
        if (postDB) {
            let div = document.createElement("div");
            div.setAttribute("class", "post");
            let h4 = document.createElement("h4");
            h4.innerHTML = `${postDB.userEmail} has posted: `;
            div.appendChild(h4);
            let p = document.createElement("p");
            let img = document.createElement("img");
            let hr = document.createElement("hr");
            div.appendChild(hr);
            if (postDB.postImg) {
                img.setAttribute("src", `${postDB.postImg}`);
                div.appendChild(img);
            }
            if (postDB.postText) {
                p.innerHTML = postDB.postText;
                div.appendChild(p);
            }
            if (postDB.postImg || postDB.postText) {
                document.querySelector(".posts").appendChild(div);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderPosts(postsDB) {
    try {
        if (postsDB) {
            postsDB.forEach((postDB) => {
                let div = document.createElement("div");
                div.setAttribute("class", "post");
                let h4 = document.createElement("h4");
                const date = new Date();
                h4.innerHTML = `${postDB.userEmail} has posted: `;
                div.appendChild(h4);
                let p = document.createElement("p");
                let img = document.createElement("img");
                let hr = document.createElement("hr");
                div.appendChild(hr);
                if (postDB.postImg) {
                    img.setAttribute("src", `${postDB.postImg}`);
                    div.appendChild(img);
                }
                if (postDB.postText) {
                    p.innerHTML = postDB.postText;
                    div.appendChild(p);
                }
                if (postDB.postImg || postDB.postText) {
                    document.querySelector(".posts").appendChild(div);
                }
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteAllPosts(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        try {
            //@ts-ignore
            const { data } = yield axios.get("/api/v1/posts/delete-all-posts");
            const { postsDeleted } = data;
            if (postsDeleted)
                document.location.reload();
            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleFindFriend(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const inputFromUser = event.target.value;
            //@ts-ignore
            const { data } = yield axios.post("/api/v1/users/search", { inputFromUser });
            const { friendsDB, userId } = data;
            const frList = document.querySelector("#searchList");
            let found = "";
            const pattern = new RegExp(`^${inputFromUser}`);
            if (frList === null || frList === void 0 ? void 0 : frList.hasChildNodes) {
                frList === null || frList === void 0 ? void 0 : frList.childNodes.forEach((elem) => {
                    found = elem.innerText.match(pattern);
                    elem.innerText;
                });
            }
            if (!found) {
                friendsDB.forEach((user) => {
                    if (user._id != userId) {
                        const li = document.createElement("li");
                        const a = document.createElement("a");
                        const btn = document.createElement("button");
                        btn.classList.add("navUsersBtn");
                        btn.innerHTML = "Visit Profile";
                        btn.addEventListener("click", handleGetUserByEmail);
                        a.innerHTML = user.email;
                        li.appendChild(a);
                        li.appendChild(btn);
                        frList.appendChild(li);
                    }
                });
            }
            if (!inputFromUser) {
                frList === null || frList === void 0 ? void 0 : frList.childNodes.forEach((elem) => {
                    frList.removeChild(elem);
                });
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
