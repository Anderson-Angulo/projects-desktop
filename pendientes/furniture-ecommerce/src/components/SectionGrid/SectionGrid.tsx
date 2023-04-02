import React from "react"
import "./SectionGrid.css"
interface Props{
  children:React.ReactElement  | React.ReactElement[],
  title:string
}
const SectionGrid = ({children,title}:Props) => {
  return (
    <section className="sectionGrid">
      <h2 className="sectionGrid__title">{title}</h2>
      <div className="container">
        {children}
      </div>
      
    </section>
  )
}
export default SectionGrid