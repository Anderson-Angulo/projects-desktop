import "./CardProduct.css"
import { BiPlus } from "react-icons/bi";
import { Product } from "../../models/Product";
interface Props{
  product:Product
}
const CardProduct = ({product}:Props) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={product.imgUrl} alt={product.productName} />
      </div>
      <div className="card__content">
        <h3 className="card__title">{product.productName}</h3>
        <span className="card__category">{product.category}</span>
        <div className="card__actions">
          <strong className="card__price">{product.price}</strong>
          <button className="card__button">
            <BiPlus className="card__add"/>
          </button>
        </div>
      </div> 
    </div>
  )
}
export default CardProduct