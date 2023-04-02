import { Links, SocialNetFooter } from "@/constants/navigation"
import styles from '@/styles/organisms/Footer.module.scss'
import { classNames } from "@/utils/classNames"
import Link from "next/link"
import Button from "../atoms/Button"
import Icon from "../atoms/Icon"

const Footer = () => {
  return (
    <footer className={classNames(styles["g-footer"])}>
        <div className={classNames(styles["g-footer__container"],"o-container")}>
          <div className={classNames(styles["g-footer__banner"],"a-cover-background" ,"cover-footer")}>
            <h3 className={classNames(styles["g-footer__cta"], "a-banner-strong")}>Trabajemos juntos y creemos un nuevo caso de éxito</h3>
            <div className={classNames(styles["g-footer__buttons"])}>
              <Button mode="white">Contáctame</Button>
              <button className="a-btn a-banner-strong">Mira mis proyectos</button>
            </div>
          </div>
          <div className={classNames(styles["g-footer__content"])}>
            <div className={classNames(styles["g-footer__logo-nav"])}>
              <Link href="index.html" className="logo">PACDEV</Link>    
              <ul className={classNames(styles["g-footer__nav"],"o-ui-list")}>
                {
                  Links.map(l=>(
                    <li key={l.title}>
                      <Link href={l.href}>{l.title}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={classNames(styles["g-footer__social-news"])}>
              <div className={classNames(styles["g-footer__social"])}>
                <p>Mis redes sociales</p>
                <div className={classNames(styles["g-footer__icons"])}>
                  {
                    SocialNetFooter.map(s=>(
                      <Link key={s.type} href={s.href} target="_blank">
                          <Icon size="bigger" type={s.type} />
                      </Link>
                    ))
                  }
                </div>         
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}
export default Footer