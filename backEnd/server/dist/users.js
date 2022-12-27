"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
router.get("/", (req, res) => {
    res.send("users list");
});
// router.get("/new", (req, res) => {
//   res.send("user new form")
// })
// we can wrote several method on one/same routes if we need
router.route("/new/:id").get((req, res) => {
    res.send(`get user with ID ${req.params.id} + ${req.user.name}`);
    console.log(req.user);
}).put((req, res) => {
    res.send(`update user with ID ${req.params.id}`);
}).delete((req, res) => {
    res.send(`delete user with ID ${req.params.id}`);
});
const users = [{ name: "yaser" }, { name: "ahmad" }];
router.param("id", (req, res, next, id) => {
    console.log(id);
    req.user = users[id];
    next();
});
