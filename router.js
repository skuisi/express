const express = require('express');


const router = express.Router();
const listuser = require("./person")  


router.get('/', (req, res)=>{
    res.send(listuser)
})


module.exports =router;