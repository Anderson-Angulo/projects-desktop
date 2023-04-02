import express from 'express'
import { checkAuthorization, login, register } from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';
const router=express.Router()

router.post('/register',register)
router.post("/login",login)
router.get("/check",verifyToken,checkAuthorization)



export default router;