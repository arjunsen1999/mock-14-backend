const express = require('express');
const userRouter = express.Router();
const {userModel} = require("../models/User.model")
const randomWords = require('random-words');


userRouter.post("/post", async (req, res) =>{
    try {
        let {name, level} = req.body;
        if(!name){
            res.status(400).send({msg : "Fill the name input"});
        }

       let user =  await userModel.create(req.body);
        res.send({token : user._id});
    } catch (error) {
        res.status(400).send({msg : "Somthing Went Wrong!"});
    }
});

userRouter.get("/randomWord", async(req, res) =>{
    try {
        let word = randomWords();
        res.send({word});
    } catch (error) {
        res.status(400).send({msg : "Somthing Went Wrong!"});
    }
})


module.exports = {userRouter}