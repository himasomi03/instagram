

const mongoose= require("mongoose");

const accountSchema= new mongoose.Schema({
    username:{
        type:String
        
    },
    password:{
        type:String
    }
    
});

const account=mongoose.model("account",accountSchema);

module.exports=account;