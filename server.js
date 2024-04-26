// const express = require('express');
import express from 'express'
import dotenv from 'dotenv'

// config the env file 
dotenv.config()
// create an object
const app = express();

app.get('/',(req,res) => {
    res.send('<h1>Wlecome to JOb Portal</h1>')
    
})
const PORT  = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Port is runing in ${process.env.DEV_MODE} mode at ${PORT} `)
})