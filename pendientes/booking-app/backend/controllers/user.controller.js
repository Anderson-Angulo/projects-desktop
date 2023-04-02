import User from '../models/User.js'


export const deleteUser=async(req,res,next)=>{
  const {id}=req.params
  try{
    await User.findByIdAndDelete(id)
    res.status(200).json({message:"User been deleted"})
  }catch(err){
    next(err)
  }
}

export const updateUser=async(req,res,next)=>{
  const {id}=req.params
  try{
    const updatedUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
    res.status(200).json(updatedUser)
  }catch(err){
    next(err)
  }
}

export const getUser=async(req,res,next)=>{
  const {id}=req.params
  try{
    const user=await User.findById(id)
    res.status(200).json(user)
  }catch(err){
    next(err)
  }
}

export const getAllUsers=async(req,res,next)=>{
  try{
    const users=await User.find()
    res.status(200).json(users)
  }catch(err){
    next(err)
  }
}