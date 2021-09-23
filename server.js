const express = require('express');
const app = express();

require('dotenv').config()


const userRouter=require('./router')

app.get("/", (req, res)=> {
 res.send("HOme");
} );


app.set("view engine", "ejs")


app.use("/users",userRouter)

app.listen (process.env.PORT, ()=> {
    console.log("server is running");
} );