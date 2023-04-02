export const errorHandler=(err,req,res,next)=>{
  const statusCode=err.status || 500
  res.status(statusCode).json({
    message:err.message,
    stack:err.stack
  })
}

export const boomErrorHandler=(err,req,res,next)=>{
  if(err.isBoom){
    const {statusCode,payload}=err.output
    res.status(statusCode).json(payload)
  }
  next(err)
}