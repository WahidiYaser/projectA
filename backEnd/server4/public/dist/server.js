"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
let users = [
    { name: "Moshe", age: 23, id: "1" },
    { name: "Miriam", age: 33, id: "2" },
    { name: "Aharon", age: 26, id: "3" },
];
app.get("/api/v1/users", (req, res) => {
    try {
        res.send({ success: true, users });
    }
    catch (error) {
        res.status(500).send({ success: false, error });
    }
});
app.get("/api/v1/users/:id", (req, res) => {
    try {
        // console.log(req.params);
        let { id } = req.params;
        const user = users.find((elem) => elem.id == id);
        // console.log(user);
        if (user)
            res.send({ success: true, user });
        else
            throw new Error;
    }
    catch (error) {
        res.status(500).send({ success: false, error });
    }
});
app.patch("/api/v1/users/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { newName } = req.body;
        users.forEach((user) => {
            if (user.id == id)
                user.name = newName;
        });
        res.send({ success: true, users });
    }
    catch (error) {
        res.status(500).send({ success: false, error });
    }
});
app.listen(PORT, () => {
    console.log(`active at port ${PORT}`);
});
