const router = require("express").Router();
const auth = require('../middleware/auth')
const {getUserProfile,createUserProfile,getAllUserProfiles} = require('../controller/profile')
const {validateProfilePost} = require('../middleware/validators/profile')

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  auth
router.get("/me",auth,getUserProfile);

// @route   GET api/profile
// @desc    Get current users profile
// @access  auth
router.post("/",auth,validateProfilePost,createUserProfile);

// @route   GET api/profile
// @desc    Get all user profiles
// @access  public
router.get("/",getAllUserProfiles);
module.exports = router