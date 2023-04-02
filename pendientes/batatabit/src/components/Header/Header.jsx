import "./Header.css"
import Logo from '../../assets/img/logo.svg'
const Header = () => {
  return (
    <header className="header">
      <div className="container">
         <img className="header-logo" src={Logo} alt="logo" />
          <div className="header-content">        
            <h1 className="header-title">La próxima revolución en el intercambio de criptomonedas.</h1>
            <p className="header-description">Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
            <a className="header-button" href="#">Conoce Nuestros Planes <span></span> </a>
          </div>
         
      </div>  
    </header>
  )
}
export default Header