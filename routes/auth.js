const router = require("express").Router();
const auth = require('../middleware/auth')
const {
    adminRegister,
    adminLogin,
    customerRegister,
    customerLogin,
    test
} = require('../controller/auth')


// @route   GET api/auth/register
// @desc    Register (Authenticate user & get token)
// @access  Public
router.post("/register",customerRegister);


// @route   GET api/auth/login
// @desc    Login (Register user & get token)
// @access  Public
router.post("/login",customerLogin);


// @route   GET api/auth/admin/register
// @desc    Admin Login (Authenticate Admin & get token)
// @access  Public
router.post("/admin/register",adminRegister);


// @route   GET api/auth/admin/login
// @desc    Login Admin (Authenticate Admin & get token)
// @access  Public
router.post("/admin/login",adminLogin);

// @route   GET api/auth/
// @desc    Test route
// @access  Public
router.get("/",auth,test);

module.exports = router