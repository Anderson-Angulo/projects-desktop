import mongoose from 'mongoose';
const { Schema } = mongoose;


const MessageSchema=new Schema({
  from:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  to:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  message:{
    type:String,
    required:true
  }
},{
  timestamps:true
})

MessageSchema.method('toJSON',function(){
  const {__v,...object}=this.toObject()
  return object
})

const User = mongoose.model('Message',MessageSchema)

module.exports=User