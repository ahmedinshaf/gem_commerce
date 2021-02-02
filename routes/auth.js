const router = require("express").Router();
const auth = require('../middleware/auth')
const {login} = require('../controller/user')
const {validateUserLogin} = require('../middleware/validators/users')


// @route   GET api/auth
// @desc    Login (Authenticate user & get token)
// @access  Public
router.post("/login",validateUserLogin,login);

module.exports = router