import AuthRouter from './auth.route.js'
import HotelRouter from './hotels.route.js'
import UserRouter from './users.route.js'

export function routerApi(app){
  app.use("/auth",AuthRouter)
  app.use("/hotels",HotelRouter)
  app.use("/users",UserRouter)
}