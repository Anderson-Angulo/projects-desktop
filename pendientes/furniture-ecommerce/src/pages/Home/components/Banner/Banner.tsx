import "./Banner.css"
import {NavLink} from 'react-router-dom'
import imgBanner from '../../../../assets/images/hero-img.png'
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__info">
          <strong>Trending product in 2022</strong>
          <h1 className="banner__title">Make Your Interior More Minimalistic & Modern</h1>
          <p className="banner__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <NavLink to="/shop" className="banner__button">SHOP NOW</NavLink>
        </div>
        <div className="banner__image">
          <img src={imgBanner} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Banner