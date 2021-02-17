const Product = require('../models/Product');

//Get all categories
const getAllProducts = async (req,res)=>{
    const products = await Product.find({})
    res.send(products)
}

//Get category by id
const getProductById = async (req,res)=>{
    res.send(`getProductById`)
}

//Add a category
const addProduct = async (req,res)=>{
    const {
        brands,
        category,
        name,
        pictures,
        price,
        salePrice,
        rating,
        reviews,
        shortDesc,
        smPictures,
        stock,
        variants,
        isNew,
        isTop,
        until
    } = req.body;
    const product  = new Product({
        brands,
        category,
        name,
        pictures,
        price,
        salePrice,
        rating,
        reviews,
        shortDesc,
        smPictures,
        stock,
        variants,
        isNew,
        isTop,
        until
    })
    await product.save()
    res.send(product)
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