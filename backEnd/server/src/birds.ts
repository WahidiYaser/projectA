import express from "express";
const birdRouter = express.Router();

birdRouter.use((req, res, next)=>{
    console.log('Time: ', Date.now());
    next();
})

birdRouter.get("/", (req, res)=>{
    res.send('birds Home Page')
})
birdRouter.get("/about", (req, res)=>{
    res.send('about Home Page')
})

export {birdRouter}