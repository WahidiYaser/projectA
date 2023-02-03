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
function handleGetUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // @ts-ignore        
            const { data } = yield axios.get("/api/v1/users");
            const { success, users, error } = data;
            console.log(data);
            // console.log(success);
            // console.log(users);
            // console.log(error);
            renderUsers(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleGetUserById(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const id = event.target.elements.userId.value;
            // @ts-ignore 
            const { data } = yield axios.get(`/api/v1/users/${id}`);
            console.log(data);
            renderUser(data);
            // document.getElementById("root")!.innerHTML = data; 
        }
        catch (error) {
            console.error(error);
        }
    });
}
function handleUpdateUserById(event) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            event.preventDefault();
            const id = event.target.elements.userUpId.value;
            const newName = event.target.elements.newName.value;
            // @ts-ignore 
            const { data } = yield axios.patch(`/api/v1/users/${id}`, { newName });
            console.log(data);
            renderUsers(data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
function renderUsers(arr) {
    let html = '';
    arr.users.forEach((element) => {
        html += `<p>name: ${element.name}, ${element.age} years old, the id is ${element.id}</p><br/>`;
    });
    document.getElementById("root").innerHTML = html;
}
function renderUser(str) {
    let html = `<p>name: ${str.user.name}, ${str.user.age} years old, the id is ${str.user.id}</p><br/>`;
    document.getElementById("root").innerHTML = html;
}
