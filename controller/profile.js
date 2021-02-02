const { compare } = require('bcryptjs');
const Profile = require('../models/Profile');
//create & update profile for logged in user
const createUserProfile = async (req,res) => {
    const{
        company,
        website,
        location,
        bio,
        status,
        githubUsername,
        skills,
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram
    } = req.body;
    const profileFields = {};
    profileFields.user = req.user.id;
    if(company) profileFields.company = company;
    if(website) profileFields.website = website;
    if(location) profileFields.location = location;
    if(bio) profileFields.bio = bio;
    if(status) profileFields.status = status;
    if(githubUsername) profileFields.githubUsername = githubUsername;
    if(skills) {
        profileFields.skills = skills.split(',').map(skill=>skill.trim());
    };
    //build social object
    profileFields.social={}
    if(youtube) profileFields.social.youtube = youtube;
    if(twitter) profileFields.social.twitter = twitter;
    if(facebook) profileFields.social.facebook = facebook;
    if(linkedin) profileFields.social.linkedin = linkedin;
    if(instagram) profileFields.social.instagram = instagram;

    try{
        let profile = await Profile.findOne({user:req.user.id});
        if(profile){
            // update
            profile = await Profile.findOneAndUpdate(
                {user:req.user.id},
                {$set:profileFields},
                {new:true}
            );
            return res.send(profile);
        }
        profile = new Profile(profileFields);
        await profile.save();
        res.send(profile);

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
}

//get all user profiles
const getAllUserProfiles = async (req,res) => {
    try{
        const profiles = await Profile.find().populate(
            'User',
            ['name', 'avatar']
        );
        res.json(profiles);
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
}


//get logged in user profile
const getUserProfile = async (req,res) => {
    try{
        const profile  =  (await Profile.findOne({ user: req.user.id })).populate(
            'User',
            ['name', 'avatar']
        );
        if(!profile)return res.status(400).json({msg:'There is no profile for this user'})
        res.json(profile)
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
}




module.exports={
    getUserProfile,
    createUserProfile,
    getAllUserProfiles
}