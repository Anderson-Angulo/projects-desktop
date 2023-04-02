interface review{
  rating:number,
  text:string
}
export interface Product{
  id:string,
  productName:string,
  imgUrl:string,
  category:string,
  price:number,
  shortDesc:string,
  description:string,
  reviews:review[],
  avgRating:number
}