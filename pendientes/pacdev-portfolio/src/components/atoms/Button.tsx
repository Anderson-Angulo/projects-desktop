import styles from '@/styles/atoms/Button.module.scss';
import { classNames } from '@/utils/classNames';


export interface ButtonProps{
  mode?:'solid' | 'ghost' | 'white' | 'link',
  className?:string
  children:React.ReactNode | React.ReactNode,
  isSlide?:Boolean
}
const Button = ({isSlide=false,mode="solid",children,className}:ButtonProps) => {
  return (
    <>
      {
        isSlide ? (
              <button className={classNames(className,styles['a-btn__slide'])}>
                {children}
              </button>
          )
          :
          (
            <button className={classNames(className,styles['a-btn'],styles[`btn-${mode}`])}>
              {children}
            </button>
          )
      }
    </>
  )
}
export default Button
