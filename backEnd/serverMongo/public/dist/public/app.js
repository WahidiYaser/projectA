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
function handleGetAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore
            const { data } = yield axios.get("/api/v1/users");
            console.log(data);
            // document.querySelector("#root")!.innerHTML = data.users[0].name;
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleRigestir(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const email = event.target.elements.RegEmailId.value;
            const password = event.target.elements.RegPassId.value;
            //@ts-ignore
            const { data } = yield axios.post("/api/v1/users/register", { email, password });
            // console.log(`welcome to our website ${email}`);
            console.log(data);
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
            const { ok } = data;
            if (ok)
                console.log(data);
            else
                console.log("failed to Log In !!");
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleUpdatePasswordById(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const userId = event.target.elements.UpdId.value;
            const newPassword = event.target.elements.UpdNewPassId.value;
            //@ts-ignore
            const { data } = yield axios.patch(`/api/v1/users/${userId}`, { password: newPassword });
            const { ok } = data;
            if (ok) {
                console.log(`succesfully changed passowrd`);
                console.log(data);
            }
            else
                throw new Error("failed to change Password !!");
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleDeleteUserById(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const id = event.target.elements.delUserId.value;
            //@ts-ignore
            const { data } = yield axios.patch(`/api/v1/users/delete/${id}`);
            const { success } = data;
            if (success)
                console.log(data);
            else
                throw new Error("couldn't delete/find this user");
        }
        catch (error) {
            console.error(error);
        }
    });
}
