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
    const {name,image,isSizeOption,isColorOption} = req.body;
    const category = new Category({
        name,
        image,
        isSizeOption,
        isColorOption
    })
    try{
        await category.save()
        res.send(category)
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
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