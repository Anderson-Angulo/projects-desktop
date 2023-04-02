import "./Exchanges.css"
import Bitcoin from '../../assets/img/Bitcoin.svg'
import Table from "./components/TableTemplate/Table"
import Item from "./components/Item/Item"
import Up from "../../assets/icons/trending-up.svg"
import Down from "../../assets/icons/trending-down.svg"
import RightArrow from "../../assets/icons/right-arrow.svg"
import { useState } from "react"

const tableTitles=["Corredores","Monedas"]
const tableItems=[
  [
    {name:"Bitrade",price:12.96, icon:false},
    {name:"Bitpreco",price:13.07,icon:false},
    {name:"Novadas",price:13.15,icon:false},
    {name:"Coinext",price:14.96,icon:false}
  ],
  [
    {name:"Bitcoin",price:1.96, icon:Down},
    {name:"Ethereum",price:0.07,icon:Up},
    {name:"Ripple",price:2.15,icon:Down},
    {name:"Stellar",price:4.96,icon:Down}
  ]
]

const Exchanges = () => {
  const [index, setIndex] = useState(0);
  const next=()=>{
    const maxIndex=tableTitles.length - 1
    if(index === maxIndex){
      return setIndex(0)
    }
    setIndex(oldIndex=>oldIndex+1)
  }
  const prev=()=>{
    if(index ===  0){
      return setIndex(tableItems.length - 1)
    }
    setIndex(oldIndex=>oldIndex-1)
  }
  return (
    <section className="exchanges">
      <div className="container">
          <img className="exchanges-image" src={Bitcoin} alt="bitcoin" />
          <div className="exchanges-content">
             <h2 className="exchanges-title">Visibilizamos todas las tasas de cambio.</h2>
          <p className="exchanges-description">Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
          </div>
          <div className="exchanges-tables">
              <button className="prev" onClick={prev}> 
                  <img src={RightArrow} alt="prev" />
               </button>
              <Table title={tableTitles[index]} >
                {
                  tableItems[index].map(item=><Item key={item.name} name={item.name} number={item.price} icon={item.icon}  />)
                }
              </Table>
                <button className="next" onClick={next}> 
                  <img src={RightArrow} alt="next" />
               </button>
          </div>    
      </div>
    </section>
  )
}
export default Exchanges