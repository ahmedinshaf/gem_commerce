const jwt = require('jsonwebtoken');
const config =  require('config');
const auth = (req,res,next)=>{
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(401).json({msg:'No token,authorization denied'})
    }
    //verify token
    try{
        const decoded = jwt.verify(token,config.get('jwtSecret'))
        req.customer = decoded._id;
        next();
    }catch(err){
        return res.status(404).json({msg:'Token is not valid'})
    }
}


module.exports = auth