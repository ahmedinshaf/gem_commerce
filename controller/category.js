const Category = require('../models/Category');

//Get all categories
const getAllCategories = async (req,res) => {
    res.send(`getAllCategories`)
}

//Get category by id
const getCategoryById = async (req,res) => {
    res.send(`getCategoryById`)
}

//Add a category
const addCategory = async (req,res) => {
    res.send(`addCategory`)
}

//Edit category
const editCategory = async (req,res) => {
    res.send(`editCategory`)
}

//Delete category
const deleteCategory = async (req,res) => {
    res.send(`deleteCategory`)
}





module.exports={
    getAllCategories,
    getCategoryById,
    addCategory,
    editCategory,
    deleteCategory

}