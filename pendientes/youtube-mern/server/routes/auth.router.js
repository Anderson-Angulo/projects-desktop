import {Router} from 'express'
const router=Router()

import {signin,signup} from '../controllers/auth.controller.js'

//Create User
router.post("/signup",signup)

//Sign In
router.post('/signin',signin)

//Google Auth
router.post('/google',(req,res)=>{
  res.send("google auth")
})


export default router