const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    brands :[String],
    category :[String],
    name:{
        type:String,
        required:true
    },
    pictures:[String],
    price:{
        type:Number
    },
    salePrice:Number, 
    rating:{
        type:Number
    },
    reviews:{
        type:Number
    },
    shortDesc:{
        type:String
    },
    smPictures:[String],
    stock:{
        type:Number
    },
    variants:[{
        type:String
    }],
    isThisNew:Boolean,
    isTop:Boolean,
    until:Date
});

module.exports = Product = mongoose.model('Product',productSchema);