import Button from "../atoms/Button"
import Icon from "../atoms/Icon"
import Nav from "./Nav"
import styles from '@/styles/organisms/Header.module.scss'
import { classNames } from "@/utils/classNames"


const Header = () => {
  return (
    <header className={classNames(styles['g-header'])}>
      <div className={classNames(styles["g-header__container"],"o-container")}>
        <h4  className={classNames(styles['logo'])}>
          <a href="#">PACDEV</a>
        </h4>
        <Nav />
        <Button>
          Contáctame
          <Icon size="large" type="cursos" />
        </Button>
      </div>
    </header>
  )
}
export default Header