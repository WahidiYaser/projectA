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
            //@ts-ignore
            const { data } = yield axios.post("/api/v1/users/register", { email, password, repPassword });
            // console.log(`welcome to our website ${email}`);
            const { ok } = data;
            if (ok)
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
            const { data } = yield axios.put("/api/v1/users/update", { password });
            const { ok } = data;
            if (ok) {
                console.log(data);
                window.location.href = "./index.html";
            }
            else
                console.log("failed to Update !!");
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
