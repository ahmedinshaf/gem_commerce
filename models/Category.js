const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    image:{
        type:String
    },
    isSizeOption:{
        type:Boolean,
        // required:true
    },
    isColorOption:{
        // required:true,
        type:Boolean
    }
});

module.exports = Category = mongoose.model('Category',categorySchema);