import styles from '@/styles/organisms/Hero.module.scss'
import { classNames } from '@/utils/classNames'
import Button from '../atoms/Button'
const Hero = () => {
  return (
    <section className={classNames(styles["g-hero"],'a-cover-background')}>
      <div className={classNames(styles['g-hero__container'],"o-container")}>
        <div className={classNames(styles['g-hero__content'])}>
          <h1 className={classNames(styles["g-hero__title"],"a-banner-title","a-title-md")}>Piero Angulo Cubas</h1>
          <h4 className={classNames(styles["g-hero__subtitle"],"a-banne-subtitle")}>FullStack Developer</h4>
          <p className={classNames(styles['g-hero__description'],'a-small')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
          <div className={classNames(styles["g-hero__buttons"])}>
            <Button mode="solid" >Ver proyectos</Button>
            <Button mode="ghost" >Contáctame</Button>
          </div>
        </div>
        <div className={classNames(styles["g-hero__image"])}>
          <img src="/profile.png" alt="profile"/>
        </div>
      </div> 
    </section>
  )
}
export default Hero