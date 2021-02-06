

//admin register
const adminRegister = async (req,res) => {
    res.send('Admin Register')
}

//admin login
const adminLogin = async (req,res) => {
    res.send('Admin login')
}

//customer register
const customerRegister = async (req,res) => {
    res.send('Customer Register')
}
//customer login
const customerLogin = async (req,res) => {
    res.send('Customer Login')
}





module.exports={
    adminRegister,
    adminLogin,
    customerRegister,
    customerLogin,
}