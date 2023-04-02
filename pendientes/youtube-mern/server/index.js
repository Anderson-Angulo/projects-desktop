import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { routerApi } from './routes/index.js'

const app=express()
dotenv.config()


app.use(cookieParser())
app.use(express.json())

routerApi(app)

app.use((err,req,res,next)=>{
  const status=err.status || 500
  const message=err.message || "Something Went Wrong"
  return res.status(status).json({
    success:false,
    status,
    message
  })
})

const connect=()=>{
  mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("Database is connected"))
  .catch(err=>{
    throw err
  } )
}


app.listen(3050,()=>{
  connect()
  console.log("Server on port ",3050)
})