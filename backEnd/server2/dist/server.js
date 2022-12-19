"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const body_parser_1 = __importDefault(require("body-parser"));
const jsonParser = body_parser_1.default.json();
const PORT = 8000, app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use(express_1.default.json()); //build in middleWare, no need to put body parser in post method
let textInput = fs_1.default.readFileSync("./txt/input.txt", "utf-8");
console.log(`input: ${textInput}`);
const year = new Date();
let textOutput = `${textInput} \n was created at ${year.getFullYear()}`;
fs_1.default.writeFileSync("./txt/output.txt", textOutput);
console.log(`output: ${textOutput}`);
app.get("/text", (req, res) => {
    res.send(textInput);
});
app.post("/find-text", (req, res) => {
    const { textFromMe } = req.body;
    res.send(`text is ready Mr.${textFromMe}: X AND~${textInput}`);
});
app.listen(PORT, () => {
    console.log(`active at port ${PORT}`);
});
