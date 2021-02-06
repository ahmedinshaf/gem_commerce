const express = require("express");

const connectDB = require("./config/db");

const app = express();

//Connect database
connectDB();

//Init Middleware
app.use(express.json({extended:false}))

//Define Routes
app.get('/',(req,res)=>res.send('api running'));
app.use("/api/users",require("./routes/users"));
app.use("/api/auth",require("./routes/auth"));
// app.use("/api/profile",require("./routes/profile"));
app.use("/api/product",require("./routes/product"));
// app.use("/api/auth",require("./routes/auth"));
app.use("/api/category",require("./routes/category"));

const PORT = process.env.PORT ||  5000;

app.listen(PORT,()=>console.log(`👋 server running on ${PORT}`));
