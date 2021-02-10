const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    tokens: [{
        token: {type: String,required:true}
    }],
});

module.exports = Admin = mongoose.model('Admin',adminSchema);