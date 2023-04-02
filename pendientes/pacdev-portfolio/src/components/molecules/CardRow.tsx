import styles from '@/styles/molecules/CardRow.module.scss'
import { classNames } from "@/utils/classNames"
import Button from "../atoms/Button"
import CardHeading from "./CardHeading"

const tecnologies=["react","node","sass","next"]
const CardRow = () => {
  return (
    <div className={classNames(styles["m-card-row"],"g-recent__card")}>
      <div className={classNames(styles["m-card-row__content"])}>
        <div className={classNames(styles["m-card-row__head"])}>
          <CardHeading title='Ecommerce' tecnologies={tecnologies} />
          <span className={classNames(styles['m-card-row__category'],"a-small","semibold")}>Web</span>
        </div>
        <p className={classNames(styles["m-card-row__description"],"g-recent__description","a-small")}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, tempora eos
          quae
          debitis delectus beatae modi. Quidem dicta iste eos id eveniet. Eius, soluta pariatur. Ducimus quae officiis
          consequuntur ipsa!</p>
        <div className={classNames(styles["m-card-row__buttons"])}>
          <Button mode="ghost">Ver Repo</Button>
          <Button mode="solid">Cómo lo hice</Button>
        </div>
      </div>
      <div className={classNames(styles["m-card-row__image"])}>
        <img
          src="https://images.pexels.com/photos/5356283/pexels-photo-5356283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imagen" />
      </div>
    </div>
  )
}
export default CardRow