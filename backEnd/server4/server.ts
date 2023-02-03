import express from "express";

const app = express();
const PORT = 5000;

app.use(express.static("public"));
app.use(express.json());

interface User {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    id: string;
}
let users: Array<User> = [
    { firstName: "Moshe", lastName: "dayan", age: 23, address:"telaviv", id: "1" },
    { firstName: "yossi", lastName: "cohen", age: 20, address:"natanya", id: "2" },
    { firstName: "yaser", lastName: "wahidi", age: 29, address:"ramla", id: "3" },
    { firstName: "albert", lastName: "ytzhak", age: 35, address:"Lod", id: "4" },
    { firstName: "osnat", lastName: "kimhi", age: 42, address:"ashdod", id: "5" }
];

app.get("/api/v1/users", (req, res) => {
    try {
        res.send({ success: true, users })
    } catch (error) {
        res.status(500).send({ success: false, error });
    }
});

app.get("/api/v1/users/:id", (req, res) => {
    try {
        // console.log(req.params);
        let { id } = req.params;
        const user = users.find((elem) => elem.id == id)
        // console.log(user);
        if (user) res.send({ success: true, user });
        else throw new Error;
    } catch (error) {
        res.status(500).send({ success: false, error });
    }
});

//update user information
app.patch("/api/v1/users/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, age, address } = req.body;
        users.forEach((user) => {
            if (user.id == id){
                user.firstName = firstName;
                user.lastName = lastName;
                user.age = age;
                user.address = address;
            }
        })
        res.send({ success: true, users });
    } catch (error) {
        res.status(500).send({ success: false, error });
    }
});

app.post("/api/v1/users/", (req, res) => {
    try {
        const id = (parseInt(users[users.length-1].id) + 1) + "";
        const { firstName, lastName, age, address } = req.body;
        const user: User = {firstName: firstName, lastName: lastName, age: age, address: address, id: id}
        users.push(user);
        res.send({ success: true, users});
    } catch (error) {
        res.status(500).send({ success: false, error });
    }
});

app.delete("/api/v1/users/:id", (req, res) => {
    try {
        let { id } = req.params;
        users = users.filter((elem) => elem.id != id);
        res.send({success: true, users});
        } catch (error) {
        res.status(500).send({ success: false, error });
    }
});

app.listen(PORT, () => {
    console.log(`active at port ${PORT}`)
});
