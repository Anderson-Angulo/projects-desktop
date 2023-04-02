import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import boom from '@hapi/boom'
import jwt from 'jsonwebtoken'
export const register=async(req,res,next)=>{
  const {username,email,password}=req.body
  try{
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser=new User({
      username:username,
      email:email,
      password:hashPassword
    })
    await newUser.save()
    res.status(200).send("User has been created")
  }catch(err){
    next(err)
  }
}

export const login=async(req,res,next)=>{
  const {username,password:passwordToCompare}=req.body
  try{
    const user=await User.findOne({username})
    if(!user) throw boom.notFound("Username does not exist")
    const isPasswordCorrect=await bcrypt.compare(passwordToCompare,user.password)
    if(!isPasswordCorrect) throw boom.badRequest("Wrong password or username")
    const payload={
      id:user._id,
      isAdmin:user.isAdmin,
    }
    const token=jwt.sign(payload,process.env.JWT_SECRET)
    const {password,isAdmin,...otherDetails}=user._doc
    res.cookie("access_token",token,{httpOnly:true}).status(200).json({...otherDetails})
  }catch(err){
    next(err)
  }
}

export const checkAuthorization=(req,res,next)=>{
  try{
    res.send("Login success")
  }catch(err){
    next(err)
  }
}