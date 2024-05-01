// packages imports
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
import "express-async-errors";

// security packages 
import xss from'xss-clean'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'

// files imports 
import connectDb from './config /db.js';

// import routes
import authRoutes from './Routes/authRoutes.js'
import testRoutes from './Routes/testRoutes.js'
import errroMiddelware from './Middleware/errorMiddleware.js';
import userRoutes from './Routes/userRoutes.js'
import jobsRoutes from './Routes/jobsRoutes.js'

// database connection 
connectDb()

// config the env file 
dotenv.config()

// create an object
const app = express();

// middlewares
app.use(helmet(``))
app.use(xss())
app.use(mongoSanitize())
app.use(express.json());
app.use(cors());
app.use(morgan());

// routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/job',jobsRoutes);

app.get('/',(req,res) => {
    res.send('<h1>Wlecome to Job Portal</h1>')
})
// validation middleware error(global catch)
app.use(errroMiddelware)

const PORT  = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Port is runing in ${process.env.DEV_MODE} mode at ${PORT} `.bgWhite.black)
});

