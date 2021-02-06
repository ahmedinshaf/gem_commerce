const router = require("express").Router();
const {
    getAllProducts,
    getProductById,
    addProduct,
    editProduct,
    deleteProduct,
    getProductByCategoryId
}= require('../controller/product')
// const {} = require('../middleware/validators/product')

// @route   GET api/product
// @desc    get all product
// @access  Public
router.get("/",getAllProducts);

// @route   GET api/product/:id
// @desc    get product by id
// @access  Public
router.get("/:id",getProductById);

// @route   POST api/product
// @desc    add a product
// @access  admin
router.post("/",addProduct);

// @route   POST api/product/:id
// @desc    Edit a product
// @access  admin
router.patch("/:id",editProduct);

// @route   POST api/product/:id
// @desc    Delete a product
// @access  admin
router.delete("/:id",deleteProduct);

// @route   POST api/product/category/:id
// @desc    get products by category id
// @access  public
router.get("/category/:id",getProductByCategoryId);


module.exports = router