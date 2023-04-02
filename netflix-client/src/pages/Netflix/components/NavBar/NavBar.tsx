import logo from '../../../../assets/logo.png'
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container flex j-between a-center">
        <nav className="nav flex a-center">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav__menu flex">
            <a href="">Home</a>
            <a href="">TV Shows</a>
            <a href="">Movies</a>
            <a href="">My List</a>
          </div>
        </nav>
        <div className="navbar__buttons flex a-center">
          <div className="nav__search flex a-center">
            <input type="text" placeholder="Buscar" />
            <div className="nav__search-icon">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
               </svg>
            </div>
          </div>

          <div className="nav__logout">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
          </div>

          <div className="nav__open">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </div>
        </div>          
    
      </div>
    </div>
  )
}
export default NavBar