import { classNames } from "@/utils/classNames"
import styles from '@/styles/molecules/Feature.module.scss'
import Icon from "../atoms/Icon"

interface FeatureProps{
  title:string
  description:string
  color:string
  icon:string
  className?:string
}
const Feature = ({title,description,color,icon,className}:FeatureProps) => {
  return (
    <article className={classNames(styles["m-feature"],className)}>
      <div className={classNames(styles["m-feature__icon-container"],styles[color]) }>
        <Icon size="large" type={icon} className={classNames(styles["m-feature__icon"])} />
      </div>
      <h3 className={classNames(styles["m-feature__title"],"a-title-xs")}>{title}</h3>
      <p className={classNames(styles["m-feature__description"],"a-small")}>{description}</p>
    </article>
  )
}
export default Feature