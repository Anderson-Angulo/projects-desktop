import Card from "./components/Card/Card"
import "./Features.css"
import Clock from '../../assets/icons/clock.svg'
import Eye from '../../assets/icons/eye.svg'
import Dollar from '../../assets/icons/dollar-sign.svg'
import Check from '../../assets/icons/check-circle.svg'
const data=[
  {
    title:"Tiempo real",
    description:"Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.",
    icon:Clock
  },
  {
    title:"No hay tasas escondidas",
    description:"Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.",
    icon:Eye
  },
  {
    title:"Compara monedas",
    description:"Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.",
    icon:Dollar
  },
  {
    title:"Información confiable",
    description:"Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.",
    icon:Check
  }
]
const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="features-titles">
          <h2>Creamos un producto sin comparación.</h2>
          <p>Confiable y diseñado para su uso diario.</p>
        </div>
        <div className="features-cards">
          {
            data.map(i=><Card key={i.title} title={i.title} description={i.description} icon={i.icon} />)
          }
        </div>
      </div>
    </div>
  )
}
export default Features