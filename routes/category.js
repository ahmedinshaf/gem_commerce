const router = require("express").Router();
const {
    getAllCategories,
    getCategoryById,
    addCategory,
    editCategory,
    deleteCategory
} = require('../controller/category')
const {} = require('../middleware/validators/category')

// @route   GET api/category
// @desc    get all categories
// @access  Public
router.get("/",getAllCategories);

// @route   GET api/category/:id
// @desc    get category by id
// @access  Public
router.get("/:id",getCategoryById);

// @route   POST api/category
// @desc    add a category
// @access  admin
router.post("/",addCategory);

// @route   POST api/category/:id
// @desc    Edit a category
// @access  admin
router.patch("/:id",editCategory);

// @route   POST api/category/:id
// @desc    Delete a category (delete all products in the category)
// @access  admin
router.delete("/:id",deleteCategory);


module.exports = router