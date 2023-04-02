
import "./SliderCards.css"
import React, {useRef,useState} from 'react'
import SlliderGroup from "../SliderGroup/SliderGroup"

export interface Props{
  title:string
}

const SliderCards = ({title}:Props) => {
  const sliderRef=useRef<HTMLDivElement>(null)
  const handlePrev=()=>{
    sliderRef?.current?.style.setProperty('--index', "0");
    console.log("Prev")
  }
  const handleNext=()=>{
   sliderRef?.current?.style.setProperty('--index', "1");
   console.log("Next")
  }
  return (
    <div className="slider">
      <div className="slider__header"> 
        <h3>{title}</h3>
      </div>
      <div className="slider__container">
        <button className="slider__button slider__button-prev" onClick={handlePrev}>&#8249;</button>
          <div className="slider__content" ref={sliderRef}>
            <SlliderGroup />
          </div>
        <button className="slider__button slider__button-next" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
   
  )
}
export default SliderCards;