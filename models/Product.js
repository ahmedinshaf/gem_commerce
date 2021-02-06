const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String
    },
    size:{
        type:String
    },
    color:{
        type:String
    },
    description:{
        type:String
    },
    information:{
        type:String
    },
    insStock:{
        type:String
    },
    stars:{
        type:String
    },
    reviews:{
        type:String
    }, 
    image:{
        type:String
    },

});

module.exports = Product = mongoose.model('Product',productSchema);