const Admin = require('../models/Admin')
const Customer = require('../models/Customer')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//admin register
const adminRegister = async (req,res) => {
    const{
        username,
        email,
        password,
        avatar
    } = req.body;
    try{ 
      let usernameNotTaken = await (validateUsername(username,'admin'));
      let emailNotRegistered = await (validateEmail(email,'admin'));
      if (!usernameNotTaken) {
          return res.status(400).json({
              message: `Username already taken`,
              success: false
          });
      }
      if (!emailNotRegistered) {
          return res.status(400).json({
              message: `Email already Registered`,
              success: false
          });
      }
        const hashedPassword = await bcrypt.hash(password, 12);
        const admin = new Admin({
            username,
            email,
            password:hashedPassword,
            avatar
        })
        await admin.save()
        res.send(admin)
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
}

//admin login
const adminLogin = async (req,res) => {
    const { username, password } = req.body;
    try{
    const admin = await Admin.findOne({ username });
    console.log(admin)
    if (!admin) {
        return res.status(404).json({
            message: "User is not found,Invalid login Credentials",
            success: false
        })
    }
        //check password
    let isMatch = await bcrypt.compare(password, admin.password);
        if (isMatch) {
            //sign in the token and issue it to user
            const token = await (createWebToken(admin, '7 days'));
            admin.tokens = admin.tokens.concat({ token });
            await admin.save();
            let result = {
                username: admin.username,
                email: admin.email,
                tokens:admin.tokens,
                token:`Bearer ${token}`,
            };
            return res.status(200).json({
                ...result,
                message: "Welcome! Your logged in",
                success: true
            });
        }
        //password don't match
        else {
            return res.status(403).json({
                message: "incorrect Password",
                success: false
            })       
        }
    }catch(err){
            console.log(err.message);
            res.status(500).send('Server Error')
        }
}

//customer register
//@desc req -> customer email , customer password
//@desc res -> Customer Object ({ email,password })
const customerRegister = async (req,res) => {
    const{
        email,
        password,
    } = req.body;
    try{ 
      let emailNotRegistered = await (validateEmail(email,'customer'));
      if (!emailNotRegistered) {
          return res.status(400).json({
              message: `Email already Registered`,
              success: false
          });
      }
        const hashedPassword = await bcrypt.hash(password, 12);
        const customer = new Customer({
            email,
            password:hashedPassword,
        })
        const token = await (createWebToken(customer, '7 days'));
        customer.tokens = [{token}]
        await customer.save()
        res.send({
            ...customer._doc,
            token})
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server Error')
    }
}
//customer login
//@desc req -> 
//@desc res -> 
const customerLogin = async (req,res) => {
    const { email, password } = req.body;
    try{
    const customer = await Customer.findOne({ email });
    if (!customer) {
        return res.status(404).json({
            message: "User is not found,Invalid login Credentials",
            success: false
        })
    }
        //check password
    let isMatch = await bcrypt.compare(password, customer.password);
        if (isMatch) {
            //sign in the token and issue it to user
            const token = await (createWebToken(customer, '7 days'));
            customer.tokens = customer.tokens.concat({ token });
            await customer.save();
            let result = {
                email: customer.email,
                tokens:customer.tokens,
                token:`Bearer ${token}`,
            };
            return res.status(200).json({
                ...result,
                message: "Welcome! Your logged in",
                success: true
            });
        }
        //password don't match
        else {
            return res.status(403).json({
                message: "incorrect Password",
                success: false
            })       
        }
    }catch(err){
            console.log(err.message);
            res.status(500).send('Server Error')
        }
}

const checkRole = roles => (req, res, next) => !roles.includes(req.user.role) ? res.status(401).json("Unauthorized") : next();

const validateUsername = async (name,role) => {
    if(role==='admin'){
        let admin = await Admin.findOne({ name });
        return admin ? false : true;
    }
    else if(role==='customer'){
        let customer = await Customer.findOne({ name });
        return customer ? false : true;
    }
    else{
        console.log(err.message);
        res.status(500).send('Server Error')
    }
};
const validateEmail = async (email,role) => {
    if(role==='admin'){
        let admin = await Admin.findOne({ email });
        return admin ? false : true;
    }
    else if(role==='customer'){
        let customer = await Customer.findOne({ email });
        return customer ? false : true;
    }
    else{
        console.log(err.message);
        res.status(500).send('Server Error')
    }
};
const createWebToken = async (userObject, validPeriod) => {
    return await jwt.sign({
        _id:userObject._id
    }, 'App Secret ', { expiresIn: validPeriod });
}


module.exports={
    adminRegister,
    adminLogin,
    customerRegister,
    customerLogin,
}