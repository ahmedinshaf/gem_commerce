const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config =  require('config');
const create = async(req,res)=>{
    const {name,email,password} = req.body;
    try{
        let user  = await User.findOne({email});
        //user already registered EH
        if(user) return res.status(400).json({error:[{msg:'User already exists'}]});
        const avatar = gravatar.url(email,{
            s:'200',
            r:'pg',
            d:'mm   '
        });
        user  = new User({
            name,
            email,
            password,
            avatar
        });
        const salt = await bcrypt.genSalt(10);
        user.password =  await bcrypt.hash(password,salt);
        await user.save();
        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),{expiresIn:3600},
        (err,token)=>{
            if(err) throw err;
            res.json({token})
        });
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error');
    }
}
const login = async(req,res)=>{
    const {email,password} = req.body;
    try{
        let user  = await User.findOne({email});
        if(!user) return res.status(400).json({error:[{msg:'Invalid credential'}]});
        const isMatch = bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({errors:[{msg:'Invalid Credential'}]})
        }
        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),{expiresIn:3600},
        (err,token)=>{
            if(err) throw err;
            res.json({token})
        });
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error');
    }
}

const getAuthUser = async(req,res)=>{
    try{
        const user  = await User.findById(req.user.id).select('-password')
        res.json(user)
    }catch(err){
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}


module.exports={
    create,
    login,
    getAuthUser
}