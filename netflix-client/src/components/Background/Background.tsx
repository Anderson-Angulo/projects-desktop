
import BackgroundImage from '../../assets/login.jpg'
import "./Background.css"

export interface Props{
  children:React.ReactElement | React.ReactElement[]
}
const Background = ({children}:Props) => {
  return (
       
    <section className="signup flex a-center j-center">
      <img className="signup__background" src={BackgroundImage} alt="background" />
      {children}
    </section>
  )
}
export default Background