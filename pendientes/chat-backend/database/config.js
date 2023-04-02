const mongoose = require("mongoose");


const dbConnection=async ()=>{
  try{
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.DB_CNN_STRING)
    console.log("DB online")
  }catch(error){
    console.log(error)
    throw new Error('Error en la conexion con la base de datos - ver logs')
  }
}

module.exports={
  dbConnection
}