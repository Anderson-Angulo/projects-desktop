const express=require('express')
const passport = require('passport')
const app=express()
const port=3050
const mongoose=require('mongoose')
const User=require('./models/User')

require('./auth')(passport)

const session = require('express-session');
app.use(session({ secret: 'your secret', resave: false, saveUninitialized: false }));

mongoose.connect('mongodb://127.0.0.1:27017/prueba-google');

app.post("/login",(req,res)=>{
  console.log("REGRESANDO AL LOGIN")
  res.send("Autenticacion Fallida")
  // res.status(200).json({
  //   token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.zX5MPQtbjoNAS7rpsx_hI7gqGIlXOQq758dIqyBVxxY'
  // })
})

app.get("/team",passport.authenticate('jwt',{session:false}),(req,res)=>{
  res.status(200)
})

app.get("/",async (req,res)=>{
  const results=await User.find()
  return res.status(200).json({message:"Successfully",data:results})
})



app.post("/teams/pokemons",(req,res)=>{
  res.send('Hello World')
})

app.delete("/team/pokemons/:pokeid",(req,res)=>{
  res.send('Hello World')
})
app.put("/team",(req,res)=>{
  res.send('Hello World')
})

app.listen(port,()=>{
  console.log("Server on port ",port)
})

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] ,session:false}));
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
    res.redirect('/');
});

module.exports=app