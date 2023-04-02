import Background from "../../components/Background/Background"
import Header from "../../components/Header/Header"
import "./Signup.css"

const Signup = () => {

  return (
    <Background>
      <Header login={false} />
      <div className="signup__body">
        <div className="signup__content t-center">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className="signup__buttons">
          <form className="signup__form grid">
            <input type="email" placeholder="Email address" />
            <a className="btn btn-primary btn-large">Get Started </a>
          </form>
        </div>
      </div>
    </Background>
      
  )
}
export default Signup
