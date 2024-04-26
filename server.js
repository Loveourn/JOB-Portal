// const express = require('express');
// packages imports
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
// files imports 
import connectDb from './config /db.js';
import testroutes from './Routes/testRoutes.js'


// database connection 
connectDb()

// config the env file 
dotenv.config()

// create an object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan());

app.use('/api/v1/test',testroutes);

app.get('/',(req,res) => {
    res.send('<h1>Wlecome to JOb Portal</h1>')
    
})




const PORT  = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Port is runing in ${process.env.DEV_MODE} mode at ${PORT} `.bgWhite.black)
});

