
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connect = ()=>{

    return mongoose.connect("mongodb://localhost:27017/masai")
}

const userSchema = new mongoose.Schema({
    name: String,
    code: String,
    active: Boolean
})

const User = mongoose.model("users",userSchema);

app.get('/users',async (req,res)=>{
    const user = await User.find({code: "pw1_125"}).lean().exec();
    console.log(user);
    res.status(200).json({data: user});
})

const start = async () =>{
    await connect();
    app.listen(5000,()=>{
        console.log("Listening on port 5000")
    });
}

start();