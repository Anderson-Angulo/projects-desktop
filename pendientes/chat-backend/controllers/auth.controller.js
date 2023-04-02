const { genSaltSync, hashSync, compareSync } = require("bcryptjs")
const { generateJWT } = require("../helpers/jwt")
const { User } = require("../models/User")


const login=async (req,res,next)=>{
  try{
    const {email,password} = req.body
    const userExists = await User.findOne({email})
    if(!userExists){
      return res.status(400).json({
        ok:false,
        msg:"Credenciales incorrectas"
      })
    }
    const matchPassword=compareSync(password,userExists.password)

    if(!matchPassword){
      return res.status(400).json({
        ok:false,
        msg:"Credenciales incorrectas"
      })
    }

    const token = await generateJWT(userExists._id)

    return res.json({
      ok:true,
      user:userExists,
      token
    })
  }catch(error){
    console.log(error)
    res.status(500).json({
      ok:false,
      msg:error.message
    })
  }

}
const register=async (req,res,next)=>{
  try{  
    const {email,password} = req.body
    const emailExists=await User.findOne({email})
    if(emailExists){
      return res.status(400).json({
        ok:false,
        msg:"El correo ya se ha registrado antes"
      })
    }

    const newUser=new User(req.body)

    // Encrypt Password 
    const salt= genSaltSync()
    newUser.password=hashSync(password,salt)

    await newUser.save()

    // Generate JWT
    const token = await generateJWT(newUser.id)

    res.status(201).json({ok:true,user:newUser,token})

  }catch(error){
    console.log(error)
    res.status(500).json({
      ok:false,
      msg:error.message
    })
  }
}



const refresh=(req,res,next)=>{
  res.json({
    ok:true,
    msg:"Refresh"
  })
}

module.exports={login,register,refresh}