const router = require("express").Router();
const {validateUserRegister} = require("../middleware/validators/users");

const {create,getAuthUser} = require('../controller/user')
const auth = require('../middleware/auth')


// @route   POST api/users
// @desc    Register user
// @access  Public
router.post("/",validateUserRegister,create)

// @route   POST api/users
// @desc    Login user details
// @access  auth
router.get("/me",auth,getAuthUser)


module.exports = router