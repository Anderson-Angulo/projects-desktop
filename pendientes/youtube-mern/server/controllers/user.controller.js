import { createError } from "../utils/createError.js"
import User from '../models/User.js'
import mongoose from 'mongoose'

const ObjectId=mongoose.Types.ObjectId

export const update =async (req,res,next)=>{
  const {id}=req.params
  if(id !== req.user.id) return next(createError(403,"You can update only your account"))
  try{
    const updatedUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
    res.status(200).json(updatedUser)
  }catch(err){
    next(err)
  }
 
}
export const deleteUser=async (req,res,next)=>{
  const {id}=req.params
  if(id !== req.user.id) return next(createError(403,"You can delete only your account"))
  try{
    await User.findOneAndDelete({id})
    res.status(200).json("User has been deleted")
  }catch(err){
    next(err)
  }
}
export const getUser =async (req,res,next)=>{
  const {id}=req.params
  if(!id) return next(createError(400,"Bad Request"))
  try{
    const user=await User.findById(id)
    res.status(200).json(user)
  }catch(error){
    next(error)
  }
}
export const subscribe = async (req,res,next)=>{
  try{
    await User.findByIdAndUpdate(req.user.id,{
      $push:{subscriptions:new ObjectId(req.params.id) },
      new:true
    })
    await User.findByIdAndUpdate(req.params.id,{
      $push:{subscribers:new ObjectId(req.user.id) },
      new:true,
      $inc:{numberOfSubscribers:1}
    })

    res.status(200).json("Suscription successfull.")
  }catch(error){
    next(error)
  }

}
export const unsubscribe =async (req,res,next)=>{
  try{
    const subscriber=await User.findById(req.user.id)

    if(!subscriber) return next(createError(404,"Subscriber not found"))

    if(!subscriber.subscriptions.includes(req.params.id)) return next(createError(400,"You already unsubscribed"))
    
    const subscribedUser = await User.findById(req.params.id);
  
    if (!subscribedUser) return next(createError(404,"Subscribed user not found"))
    
    subscriber.subscriptions.pull(new ObjectId(req.params.id));
    subscribedUser.numberOfSubscribers = subscribedUser.numberOfSubscribers -1;
    subscriber.subscribers.pull(new ObjectId(req.params.id));
    await subscriber.save();
    await subscribedUser.save();
    res.status(200).json("Unsubcription successfull.")
  }catch(error){
    next(error)
  }
}
export const like =(req,res,next)=>{

}
export const dislike =(req,res,next)=>{

}
