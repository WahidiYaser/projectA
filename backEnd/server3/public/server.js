"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const myUsers = [{ name: "yaser", age: 29 }, { name: "yousef", age: 25 }];
app.get("/api/users", (req, res) => {
    try {
        res.send({ users: myUsers });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(PORT, () => { console.log(`active at port ${PORT}`); });
