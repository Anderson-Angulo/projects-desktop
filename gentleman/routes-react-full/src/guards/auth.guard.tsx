import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"
import { PublicRoutes } from "../models"
import { AppStore } from "../redux/store"

export const AuthGuard=()=>{
  const userState=useSelector((store:AppStore)=>store.user)
  return userState.name ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />
}

export default AuthGuard