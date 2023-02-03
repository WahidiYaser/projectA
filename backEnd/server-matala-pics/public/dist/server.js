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
const Pics = [
    { name: "cat", src: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403", id: "1" },
    { name: "dog", src: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", id: "2" },
    { name: "lion", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg", id: "3" }
];
let i = 0;
app.get("/api/v1/pics", (req, res) => {
    try {
        const picSrc = Pics[i].src;
        res.send({ success: true, picSrc });
        if (i >= 2)
            i = 0;
        else
            i++;
    }
    catch (error) {
        res.status(500).send({ success: false, error });
    }
});
app.listen(PORT, () => {
    console.log(`connected at port: ${PORT}`);
});
