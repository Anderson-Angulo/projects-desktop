import mongoose from "mongoose";


const VideoSchema=new mongoose.Schema({
  userId:{
    type:String,
    required:true,
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  imgUrl:{
    type:String,
    required:true
  },
  VideoUrl:{
    type:String,
    required:true
  },
  Views:{
    type:Number,
    default:0
  },
  tags:{
    type:[String],
    default:[]
  },
  likes:{
    type:[String],
    default:[]
  },
  dislikes:{
    type:[String],
    default:[]
  }
},{timestamps:true})
 

export default mongoose.models.Video || mongoose.model('Video',VideoSchema)