import styles from '@/styles/molecules/CardHeading.module.scss'
import { classNames } from "@/utils/classNames"
import Icon from '../atoms/Icon'

interface CardHeadingProps{
  title:string,
  tecnologies:string[]
}

const CardHeading = ({title,tecnologies}:CardHeadingProps) => {
  return (
    <h3 className={classNames(styles["m-heading"],"g-recent__heading")}>
      {title}
      <div className={classNames(styles["m-heading__tecnologies"])}>
        {
          tecnologies.map(tec=>(
            <Icon key={tec} type={tec}/>
          ))
        }
      </div>
    </h3>
  )
}
export default CardHeading