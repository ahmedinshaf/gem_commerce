const Product = require('../models/Category');

//Get all categories
const getAllProducts = async (req,res)=>{
    res.send(`getAllProducts`)
}

//Get category by id
const getProductById = async (req,res)=>{
    res.send(`getProductById`)
}

//Add a category
const addProduct = async (req,res)=>{
    res.send(`addProduct`)
}

//Edit category
const editProduct = async (req,res)=>{
    res.send(`editProduct`)
}

//Delete category
const deleteProduct = async (req,res)=>{
    res.send(`deleteProduct`)
}

//Get Product By Category id
const getProductByCategoryId = async (req,res)=>{
    res.send(`getProductByCategoryId`)
}



module.exports={
    getAllProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProduct,
    getProductByCategoryId
}