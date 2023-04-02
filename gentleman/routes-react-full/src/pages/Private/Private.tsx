import { Navigate, Route } from "react-router"
import { Dashboard, Home } from "."
import { RoutesWithNotFound } from "../../helpers"
import { PrivateRoutes } from "../../models"

export interface PrivateInterface{

}

const Private:React.FC<PrivateInterface>=()=>{
  return (
    <RoutesWithNotFound>
       <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />}/>
       <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}/>
       <Route path={PrivateRoutes.HOME} element={<Home />}/>
    </RoutesWithNotFound>
   
  )
}

export default Private