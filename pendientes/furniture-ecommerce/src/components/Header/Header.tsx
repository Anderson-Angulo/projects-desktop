import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import UserIcon from '../../assets/images/user-icon.png';
import {motion} from 'framer-motion'
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className='container'>
        <img className='header__logo' src="" alt="logo" />
        <nav className='nav'>
          <ul>
            <li>
              <NavLink className={(navClass)=>navClass.isActive ? 'active' : ""} to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
        <div className='header__actions'>
          <button>
            <span className="circle">0</span>
             <BiHeart className='header__icon' />
          </button>
          <button>
            <span className="circle">2</span>
            <BiShoppingBag className='header__icon' />
          </button>
          <div className='header__user'>
            <motion.img whileTap={{scale:1.2}} src={UserIcon} alt="userIcon" />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header