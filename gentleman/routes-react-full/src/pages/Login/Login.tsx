import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { createUser } from "../../redux/states/user"
import { getMorty } from "../../services"

export interface LoginInterface{

}
const Login:React.FC<LoginInterface>=()=>{
   const dispatcher=useDispatch()
   const navigator=useNavigate()
  const login=async ()=>{
  try{
     const result= await getMorty()
   console.log(result)
   dispatcher(createUser(result))
   navigator("/private",{replace:true})
  }catch(error){
    console.log(error)
  }
  
  }
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login