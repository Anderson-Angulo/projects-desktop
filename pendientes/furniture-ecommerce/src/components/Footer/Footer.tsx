import "./Footer.css"
import {NavLink} from 'react-router-dom'
import { BiMap,BiPhone,BiMailSend } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <h3>Multimart</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="footer__categories">
          <h3>Top Categories</h3>
          <ul className="footer__list">
            <li>
              <NavLink to="/">Mobile Phones</NavLink>
            </li>
            <li>
              <NavLink to="/">Modern Sofa</NavLink>
            </li>
            <li>
              <NavLink to="/">Arm Chair</NavLink>
            </li>
            <li>
              <NavLink to="/">Smart Watches</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__nav">
          <h3>Useful Links</h3>
          <ul className="footer__list">
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
            <li>
              <NavLink to="/">Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3>Contact</h3>
          <ul className="footer__list">
            <li>
              <BiMap className="footer__icon" />
              <span>123 Vallecas,Madrid,Spain</span>
            </li>
            <li>
              <BiPhone className="footer__icon" />
              <span>+34556688999</span>
            </li>
            <li>
              <BiMailSend className="footer__icon" />
              <span>example123@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  )
}
export default Footer