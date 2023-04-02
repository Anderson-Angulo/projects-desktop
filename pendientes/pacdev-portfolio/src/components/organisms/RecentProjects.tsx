import styles from "@/styles/organisms/Recents.module.scss"
import { classNames } from "@/utils/classNames"
import Button from "../atoms/Button"
import Icon from "../atoms/Icon"
import CardRow from "../molecules/CardRow"
const RecentProjects = () => {
  return (  
    <section className={classNames(styles['g-recent'])}>
      <div className={classNames(styles["g-recent__container"]," o-container")}>
        <div className={classNames(styles["g-recent__slider"])}>
          <Button className={classNames(styles["g-recent__slide-button"])} isSlide >
            <Icon size="medium" type="arrow" />
          </Button>

          <CardRow />

          <Button className={classNames(styles["g-recent__slide-button"])} isSlide >
            <Icon size="medium" type="arrow" />
          </Button>

          <div className={classNames(styles["g-recent__points"])}>
            <span className={classNames(styles["g-recent__point"],"active")}></span>
            <span className={classNames(styles["g-recent__point"])}></span>
            <span className={classNames(styles["g-recent__point"])}></span>
            <span className={classNames(styles["g-recent__point"])}></span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default RecentProjects