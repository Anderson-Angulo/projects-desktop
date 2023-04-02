const mongoose=require('mongoose');
const { Schema } = mongoose;


const UserSchema=new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:String,
    unique:true
  },
  password:{
    type:String,
    required:String,
  },
  online:{
    type:Boolean,
    default:false
  }
})

UserSchema.method('toJSON',function(){
  const {__v,_id,password,...object}=this.toObject()
  object.uid=_id
  return object
})

const User = mongoose.model('User',UserSchema)

module.exports={User}
