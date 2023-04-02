import styles from '@/styles/organisms/Reviews.module.scss'
import TypoStyles from '@/styles/atoms/Typography.module.scss'
import { classNames } from '@/utils/classNames'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'

const Reviews = () => {
  return (
    <section className={classNames(styles["g-reviews"])}>
      <div className={classNames(styles["g-reviews__container"],"o-container")}>
        <div className={classNames(styles["g-reviews__image"])}>
          <img src="/hashicorp.png" alt="hashicorp"/>
        </div>
        <div className={classNames(styles["g-reviews__content"])}>
          <p className={classNames(styles["g-reviews__text"])}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley</p>
          <strong className={classNames(styles["g-reviews__emitter"],"a-bigger","semibold")}>HashiCorp</strong>
          <div className={classNames(styles["g-reviews__navigation"])}>
            <div className={classNames(styles["g-reviews__buttons"])}>
              <Button isSlide >
                <Icon size="medium" type="arrow" />
              </Button>
              <Button  isSlide >
                <Icon size="medium" type="arrow" />
              </Button>
            </div>
            <span className="a-bigger">01/03</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Reviews