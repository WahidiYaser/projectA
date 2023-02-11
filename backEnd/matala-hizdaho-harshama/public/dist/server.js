"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const mongo_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;
mongoose_1.default.set("strictQuery", true);
mongoose_1.default.connect(mongo_uri).then(res => {
    console.log(`connected to DB`);
}).catch(err => {
    console.log("at mongoose connection:");
    console.log(err.message);
});
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
const usersRouter_1 = __importDefault(require("./API/users/usersRouter"));
app.use("/api/v1/users", usersRouter_1.default);
const chatsRouter_1 = __importDefault(require("./API/chats/chatsRouter"));
app.use("/api/v1/chats", chatsRouter_1.default);
app.listen(PORT, () => {
    console.log(`connected at port: ${PORT}`);
});
