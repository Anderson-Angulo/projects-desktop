import "./Card.css"
const Card = ({icon,title,description}) => {
  return (
    <div className="card">
      <img src={icon} alt="icono" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
export default Card