import { Router } from 'express'
import authRouter from './auth.router.js'
import commentRouter from './comments.router.js'
import userRouter from './users.router.js'
import videoRouter from './videos.router.js'

export function routerApi(app){
  const router=Router()
  app.use("/api/v1",router)
  router.use("/auth",authRouter)
  router.use("/users",userRouter)
  router.use("/videos",videoRouter)
  router.use("/comments",commentRouter)
}