const router = require("express").Router();
const {
    adminRegister,
    adminLogin,
    customerRegister,
    customerLogin,
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



module.exports = router