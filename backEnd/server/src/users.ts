import express from "express"
const router = express.Router()

router.get("/", (req, res)=>{
  res.send("users list")  
})

router.get("/new", (req, res)=>{
    res.send("user new form")
})

export {router}