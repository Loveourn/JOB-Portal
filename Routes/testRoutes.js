import express from 'express';
import {testPostController} from '../Controller/testController.js';

// router object 
const router = express.Router()

// rotues
router.post('/test-post',testPostController)

// export 
export default router;