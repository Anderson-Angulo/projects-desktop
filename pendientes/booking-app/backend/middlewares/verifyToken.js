import boom from "@hapi/boom"
import jwt from 'jsonwebtoken'
export const verifyToken=(req,res,next)=>{
  //Verificar token
  const token=req.cookies.access_token
  if(!token) throw boom.unauthorized("You are not authenticated")
  jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err) throw boom.forbidden("Token is not valid")
    req.user=user
    next()
  })
}