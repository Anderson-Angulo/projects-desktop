import { NavLink } from "react-router-dom"
import "./FormLogin.css"
const FormLogin = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h2>Sign In</h2>
        <form className="login__form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-primary btn-large">Sign In</button>
          <p>
            New to Netflix? 
            <NavLink className="login__link" to="/signup">Sign up now</NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}
export default FormLogin