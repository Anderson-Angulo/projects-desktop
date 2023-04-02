import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import { Home } from "."
import Favorites from "./Favorites/Favotires"


export interface NetflixInterface{}
const Netflix:React.FC<NetflixInterface> = () => {
  return (
    <>
         <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to={"home"} />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
    </>
    
  )
}
export default Netflix