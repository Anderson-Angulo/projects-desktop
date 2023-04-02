import Link from "next/link"
import Icon from "../atoms/Icon"
import styles from '@/styles/organisms/Nav.module.scss'
import { classNames } from "@/utils/classNames"
import { Links } from "@/constants/navigation"

const Nav = () => {
  return (
    <nav className={classNames(styles['g-nav'])}>
      <ul className="o-ui-list o-ui-list--horizontal">
        {
          Links.map(l=>(
            <li key={l.title} className="o-item">
              <Link href={l.href} className="o-link">
                <Icon type={l.icon} size="large" className={classNames(styles["g-nav__icon"])} />
                {l.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
export default Nav