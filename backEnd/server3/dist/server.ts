import express from "express";
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

interface User{
    name: string,
    age: number
}

const myUsers: User[] = [{name: "yaser", age: 29}, {name: "yousef", age: 25}];
app.get("/api/users", (req, res)=>{
    try{
        res.send({users: myUsers});
    }
    catch(error){
        console.error(error);
    }
})


app.listen(PORT, ()=>{    console.log(`active at port ${PORT}`)   });