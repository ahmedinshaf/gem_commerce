const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
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
    date:{
        type:Date,
        default:Date.now
    },
    tokens: [{
        token: {type: String,required:true}
    }],
});

module.exports = Customer = mongoose.model('Customer',customerSchema);