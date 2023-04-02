import mongoose from 'mongoose'
import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import { createError } from '../utils/createError.js'
import jwt from 'jsonwebtoken'
export const signup=async (req,res,next)=>{
  try{
    const salt=bcrypt.genSaltSync(10)
    const hashPassword=bcrypt.hashSync(req.body.password,salt)
    const newUser= new User({...req.body,password:hashPassword})

    await newUser.save()
    res.status(201).send("User has been created")
  }catch(err){
    next(err)
  }
}
export const signin=async (req,res,next)=>{
  try{
    
    const user=await User.findOne({name:req.body.name})
    if(!user) return next(createError(404,"User not found"))
    const isCorrectPassword=await bcrypt.compare(req.body.password,user.password)
    if(!isCorrectPassword) next(createError(400,"Wrong Credentials"))
    const token=jwt.sign({id:user._id},process.env.SECRET_JWT)
    const {password,...otherDetails}=user._doc
    res.cookie("access_token",token,{httpOnly:true})
        .status(200)
        .json(otherDetails)

  }catch(err){
    next(err)
  }
}