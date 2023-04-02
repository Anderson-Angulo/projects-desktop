import Background from "../../components/Background/Background"
import Header from "../../components/Header/Header"
import { FormLogin } from "./components"

export interface LoginInterface{}
const Login:React.FC<LoginInterface> = () => {
  return (
    <Background>
      <Header login/>
      <FormLogin />
    </Background>
  )
}
export default Login