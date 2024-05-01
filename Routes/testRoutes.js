import express from 'express';
import {testPostController} from '../Controller/testController.js';
import userAuth from '../Middleware/authMiddleware.js';

// router object 
const router = express.Router()

// rotues
router.post('/test-post',userAuth,testPostController)

// export 
export default router;