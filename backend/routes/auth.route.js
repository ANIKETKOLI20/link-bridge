import express from 'express';
import { signup , login , authCheck } from '../controllers/auth.controller.js'
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router()

router.post('/signup', signup);
router.post('/login', login);
router.get("/authCheck" ,  protectRoute ,  authCheck)

export default router;
