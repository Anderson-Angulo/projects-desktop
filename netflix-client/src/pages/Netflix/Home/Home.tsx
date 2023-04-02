
import HomeTitle from '../../../assets/homeTitle.webp'
import SliderCards from '../components/SliderCards/SliderCards'
import MovieBackground from './components/MovieBackground/MovieBackground'
import "./Home.css"
export interface HomeInterface{}
const Home:React.FC<HomeInterface> = () => {
  return (
    <>
      <MovieBackground>
         <div className="home flex flex-col j-center">
           <div className="home__title">
            <img  src={HomeTitle} alt="" />
           </div> 
           <div className="home__buttons flex">
              <button className="btn btn__home flex a-center">
                <div className="btn__play-icon flex a-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                   </svg>
                </div>
                Play  
              </button>

              <button className="btn btn__home btn__home-info flex a-center j-center">
                <div className="btn__info-icon flex a-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                
                More Info
              </button>
           </div>
         </div>
      </MovieBackground>
      <main className='home__main'>
        <div className="container">
          <SliderCards title="Ultimas películas" />
          <SliderCards title="Ultimas películas" />
          <SliderCards title="Ultimas películas" />
          <SliderCards title="Ultimas películas" />
          <SliderCards title="Ultimas películas" />
        </div>
      </main>
     
      
    </>
  )
}
export default Home