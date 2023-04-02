import mongoose, { Schema } from "mongoose";


const UserSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  img:{
    type:String
  },
  subscribers:[{type:Schema.Types.ObjectId,ref:"User"}],
  numberOfSubscribers:{
    type:Number,  
    default:0
  },
  subscriptions:[{type:Schema.Types.ObjectId,ref:"User"}]
},{timestamps:true})

UserSchema.post('findOneAndDelete', async function(user) {
    const subscriptions = await this.model.find({ subscribers: user._id });
    // const subscribers = await User.find({ subscriptions: user._id });
    console.log(subscriptions)

    subscriptions.forEach((sub) => {
        sub.subscribers.pull(user._id);
        sub.numberOfSubscribers = sub.numberOfSubscribers - 1;
        sub.save();
    });

    // subscribers.forEach(async (sub)=>{
    //   sub.subscriptions.pull(user._id)
    //   await sub.save()
    // })
});

export default mongoose.models.User || mongoose.model('User',UserSchema)