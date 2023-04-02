import "./Item.css"
const Item = ({name,number,icon}) => {
  return (
    <li className="item" >
      <span className="item-name">{name}</span>
      <span className="item-number">
        $ {number}
        {
          icon &&  <img className="item-icon" src={icon} alt="icon" />
        }
      </span>
    </li>
  )
}
export default Item