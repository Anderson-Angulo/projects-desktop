const AuthRouter=require('./auth.router')
function routerApi(app){
  app.use('/api/auth',AuthRouter)
}

module.exports={routerApi}