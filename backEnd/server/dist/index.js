"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./users");
const birds_1 = require("./birds");
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 8000;
const app = (0, express_1.default)();
const jsonParser = body_parser_1.default.json();
app.use(express_1.default.json());
app.set("view engine", "ejs");
var data = {
    "email": "yaser@gmail.com"
};
var products = [
    { id: 1, name: "iphone-4", category: "phones", price: 6100 },
    { id: 2, name: "red-xt", category: "phones", price: 4150 },
    { id: 3, name: "xiomi-t7", category: "phones", price: 1700 },
    { id: 4, name: "redmi-7", category: "phones", price: 500 },
    { id: 5, name: "macbook-air", category: "laptop", price: 4900 },
    { id: 6, name: "macbook-pro", category: "laptop", price: 13600 },
    { id: 7, name: "dell-topA", category: "laptop", price: 4200 },
    { id: 8, name: "samsung 34inc 1080p", category: "tv", price: 31900 },
    { id: 9, name: "lg smart led", category: "tv", price: 21500 },
    { id: 10, name: "panasonic A9", category: "tv", price: 14200 },
];
let arr = [];
let globalId = 1;
// app.route("/:id").get((req, res)=>{
//     res.render("users", {output: products[5].category})
// }).post((req, res)=>{
//     console.log(req.body)
//     res.send(`tis is my ID: ${req.params.id} and this is your INPUT: ${req.body}`)
// })
app.post("/yes/:id", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
app.get("/try", (req, res) => {
    console.log("Working, Don't worry");
    res.render("index", { text: "the sum is" });
});
app.get("/home", (req, res) => {
    // res.send("hello from home :)")
    res.send(data);
});
app.get("/products", (req, res) => {
    res.send(products);
});
app.get("/products/:id", (req, res) => {
    let id = Number(req.params.id);
    if (Number.isNaN(id)) {
        res.status(400).send("you must inter only a number!!");
        return;
    }
    let p = products.find(a => a.id == id);
    if (!p) {
        res.status(404).send("this product is not found");
        return;
    }
    res.send(p);
});
app.post("/products", jsonParser, (req, res) => {
    req.body.id = globalId++;
    arr.push(req.body);
    res.send(arr);
});
app.use('/users', users_1.router);
app.use('/birds', birds_1.birdRouter);
app.listen(PORT, () => {
    console.log("app is active at port " + PORT);
});
