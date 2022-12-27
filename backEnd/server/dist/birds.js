"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.birdRouter = void 0;
const express_1 = __importDefault(require("express"));
const birdRouter = express_1.default.Router();
exports.birdRouter = birdRouter;
birdRouter.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
birdRouter.get("/", (req, res) => {
    res.send('birds Home Page');
});
birdRouter.get("/about", (req, res) => {
    res.send('about Home Page');
});
