import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import "./Header.css"

export interface Props{
  login:boolean
}
const Header = ({login}:Props) => {
  const navigate=useNavigate()
  return (
      <header className="signup__header flex j-between a-center">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        
        <a onClick={()=>navigate(login ? "/signup" :"/login")} className="btn btn-primary btn-small">{login ? "Sign Up" : "Sign In" }</a>
      </header>
  )
}
export default Header