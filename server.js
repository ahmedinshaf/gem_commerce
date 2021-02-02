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
app.use("/api/profile",require("./routes/profile"));
app.use("/api/posts",require("./routes/posts"));
app.use("/api/auth",require("./routes/auth"));

const PORT = process.env.PORT ||  5000;

app.listen(PORT,()=>console.log(`👋 server running on ${PORT}`));
