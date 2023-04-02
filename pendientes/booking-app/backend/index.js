import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { routerApi } from './routes/index.js'
import { boomErrorHandler, errorHandler } from './middlewares/errorHandler.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app= express()
const PORT=3008

const connect=async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB")
  }catch(err){
    throw err
  }
}

app.use(express.json())
app.use(cookieParser())

routerApi(app)

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT,()=>{
  connect()
  console.log("Server on port ",PORT)
})