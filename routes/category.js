const router = require("express").Router();
const {} = require('../controller/category')
const {} = require('../middleware/validators/category')

// @route   GET api/category
// @desc    get all categories
// @access  Public
router.get("/",(req,res)=>res.send(`Get all categories`));

// @route   GET api/category/:id
// @desc    get category by id
// @access  Public
router.get("/:id",(req,res)=>res.send(`Get all categories`));

// @route   POST api/category
// @desc    add a category
// @access  admin
router.post("/",(req,res)=>res.send(`Add a category`));

// @route   POST api/category/:id
// @desc    Edit a category
// @access  admin
router.patch("/:id",(req,res)=>res.send(`Edit category category`));

// @route   POST api/category/:id
// @desc    Delete a category (delete all products in the category)
// @access  admin
router.delete("/:id",(req,res)=>res.send(`Delete a category category`));


module.exports = router