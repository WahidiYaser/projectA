"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
// const PORT = 5000;
dotenv_1.default.config();
const mongodb_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;
mongoose_1.default.set("strictQuery", true);
mongoose_1.default.connect(mongodb_uri).then(res => {
    console.log("connected to DB");
}).catch(err => {
    console.log("At mongoose connection:");
    console.error(err.message);
});
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const usersRoutes_1 = __importDefault(require("./API/users/usersRoutes"));
app.use("/api/v1/users", usersRoutes_1.default);
app.listen(PORT, () => {
    console.log(`active at port: ${PORT}`);
});
