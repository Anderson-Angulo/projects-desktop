import { useSelector } from "react-redux"
import CardProduct from "../../components/CardProduct/CardProduct"
import SectionGrid from "../../components/SectionGrid/SectionGrid"
import { useFilteredProducts } from "../../hooks/useFilteredProducts"
import { RootState } from "../../redux/store"
import Banner from "./components/Banner/Banner"

import "./Home.css"
const Home = () => {
  const user = useSelector((store: RootState)=>store.user)
  console.log(user)
  const {
        trendingProducts,
        bestSalesProducts,
        mobileProducts,
        wirelessProducts,
        popularProducts
      } = useFilteredProducts() 
  
  return (
    <div className="home">
      <Banner />
      <SectionGrid title="Trending Products" >
        { trendingProducts?.map(product=><CardProduct key={product.id} product={product} />) }
      </SectionGrid>      
      <SectionGrid title="Best Sales" >
        { bestSalesProducts?.map(product=><CardProduct key={product.id} product={product} />) }
      </SectionGrid>      
      <SectionGrid title="New Arrivals" >
        <>
          { mobileProducts?.map(product=><CardProduct key={product.id} product={product} />) }
          { wirelessProducts?.map(product=><CardProduct key={product.id} product={product} />) }
        </>
      </SectionGrid>     
      <SectionGrid title="Popular in Category">
        {
          popularProducts?.map(product =><CardProduct key={product.id} product={product} />)
        }
      </SectionGrid> 
    </div>
  )
}
export default Home