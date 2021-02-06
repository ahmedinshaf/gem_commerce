const router = require("express").Router();
const {} = require('../controller/product')
const {} = require('../middleware/validators/product')

// @route   GET api/product
// @desc    get all product
// @access  Public
router.get("/",(req,res)=>res.send(`Get all products`));

// @route   GET api/product/:id
// @desc    get product by id
// @access  Public
router.get("/:id",(req,res)=>res.send(`Get single product by id`));

// @route   POST api/product
// @desc    add a product
// @access  admin
router.post("/",(req,res)=>res.send(`Add a product`));

// @route   POST api/product/:id
// @desc    Edit a product
// @access  admin
router.patch("/:id",(req,res)=>res.send(`Edit product `));

// @route   POST api/product/:id
// @desc    Delete a product
// @access  admin
router.delete("/:id",(req,res)=>res.send(`Delete a products`));

// @route   POST api/product/category/:id
// @desc    get product by id
// @access  admin
router.delete("/category/:id",(req,res)=>res.send(`Get product by category`));


module.exports = router