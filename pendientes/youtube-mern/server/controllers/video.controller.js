import Video from '../models/Video.js'
import User from '../models/User.js'
import { createError } from '../utils/createError.js'
export const addVideo=async (req,res,next)=>{
  const newVideo=new Video({userId:req.user.id,...req.body})
  try{
    const savedVideo=await newVideo.save()
    res.status(201).json(savedVideo)
  }catch(err){
    next(err)
  }
}

export const updateVideo=async(req,res,next)=>{
  const {id}=req.params
  try{
    const video=await Video.findById(id)
    if(!video) return next(createError(404,"Video not found"))
    if(req.user.id !== video.userId) return next(createError(403,"You can delete only your account"))
    const updatedVideo=await Video.findByIdAndUpdate(id,{
      $set:req.body
    },{ new:true})
    res.status(200).json(updatedVideo)
  }catch(err){
    next(err)
  }
}

export const deleteVideo=async(req,res,next)=>{
  const {id}=req.params
  try{
    const video=await Video.findById(id)
    if(!video) return next(createError(404,"Video not found"))
    if(req.user.id !== video.userId) return next(createError(403,"You can delete only your account"))
    await Video.findByIdAndUpdate(id)
    res.status(200).json("The video has been deleted")
  }catch(err){
    next(err)
  }
}

export const getVideo=async(req,res,next)=>{
  const {id}=req.params
  try{
    const video=await Video.findById(id)
    if(!video) return next(createError(404,"Video not found"))
    res.status(200).json(video)
  }catch(err){
    next(err)
  }
}

export const addView=async(req,res,next)=>{
  const {id}=req.params
  try{
    await Video.findByIdAndUpdate(id,{
      $inc:{views:1}
    })
    res.status(200).json("The view has been increased.")
  }catch(err){
    next(err)
  }
}

export const random=async(req,res,next)=>{
  try{
    const videos=await Video.aggregate([{$sample:{size:40}}])
    res.status(200).json(videos)
  }catch(err){
    next(err)
  }
}

export const trend=async(req,res,next)=>{
  try{
    const videos=await Video.find().sort({views:-1})
    res.status(200).json(videos)
  }catch(err){
    next(err)
  }
}

export const sub=async(req,res,next)=>{
  try{
    const user=User.findById(req.user.id)
    const subscriptions= user.subscriptions
    const list=await Promise.all(
      subscriptions.map(channelId=>{
        Video.find({userId:channelId})
      })
    )
    return res.status(200).json(list.flat().sort((a,b)=>b.createdAt - a.createdAt))
  }catch(err){
    next(err)
  }
}