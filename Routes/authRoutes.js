import express from 'express';
import {testPostController} from '../Controller/testController.js';
import { loginController,registerController } from '../Controller/authController.js';
import rateLimit from'express-rate-limit'
// router object 
const router = express.Router()

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// rotues

// REGISTER || POST 
router.post('/register',limiter,registerController)

// LOGIN || POST 
router.post('/login',limiter,loginController);
// export 
export default router;