export interface Props{
  children:React.ReactElement | React.ReactElement[]
}

import "./MovieBackground.css"
import MovieBackgroundImage from "../../../../../assets/home.jpg"
const MovieBackground = ({children}:Props) => {
  return (
    <div className="movieBackground flex j-center a-center">
      <img src={MovieBackgroundImage} alt="background movie" />
      <div className="container">
        {children}
      </div>
    </div>
  )
}
export default MovieBackground