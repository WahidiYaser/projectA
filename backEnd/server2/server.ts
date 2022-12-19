import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
const PORT = 8000, app = express();
app.use(express.static("public"));
app.use(express.json()) //build in middleWare, no need to put body parser in post method

let textInput = fs.readFileSync("./txt/input.txt", "utf-8")
console.log(`input: ${textInput}`)
const year = new Date();
let textOutput = `${textInput} \n was created at ${year.getFullYear()}`
fs.writeFileSync("./txt/output.txt", textOutput)
console.log(`output: ${textOutput}`)

app.get("/text", (req,res)=>{
    res.send(textInput)
})
app.post("/find-text", (req, res)=>{
    const {textFromMe} = req.body
    res.send(`text is ready Mr.${textFromMe}: X AND~${textInput}`)
})

app.listen(PORT, ()=>{
    console.log(`active at port ${PORT}`)
})