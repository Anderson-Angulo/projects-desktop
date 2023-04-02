import {useState,useEffect} from 'react'
import products from '../assets/data/products'
import { Product } from '../models/Product'
export const useFilteredProducts=()=>{
  const [trendingProducts,setTrendingProducts] = useState<Product[]>([])
  const [bestSalesProducts,setBestSalesProducts] = useState<Product[]>([])
  const [mobileProducts,setMobileProducts] = useState<Product[]>([])
  const [wirelessProducts,setWirelessProducts] = useState<Product[]>([])
  const [popularProducts,setPopularProducts] = useState<Product[]>([])
  useEffect(() => {
    const trendingProductsData=products.filter(p=>p.category === 'chair')
    setTrendingProducts(trendingProductsData)
    
    const bestSalesProductsData=products.filter(p=>p.category === 'sofa')
    setBestSalesProducts(bestSalesProductsData)

    const mobileProductsData=products.filter(p=>p.category === 'mobile')
    setMobileProducts(mobileProductsData)

    const wirelessProductsData=products.filter(p=>p.category === 'wireless')
    setWirelessProducts(wirelessProductsData)

    const popularProductsData=products.filter(p=>p.category === 'watch')
    setPopularProducts(popularProductsData)
    
  }, [])

  return {trendingProducts,bestSalesProducts,mobileProducts,wirelessProducts,popularProducts}
}