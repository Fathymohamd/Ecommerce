
import { useEffect, useState } from "react"
import Sliderproduct from "../Ecommerce/Slider-product"
import SwiperSlide1 from "./SwiperSlide1"
import Patgtransition from "./Patgtransition"

const Productlists =[
 "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
]



function Home() {
const [product , setproduct] = useState({})
const [loading , setloading] = useState(true)

useEffect(() => {
const  fectproduct = async () => {
  try {
const resulls = await Promise.all(
Productlists.map(async (item) => {
const res = await fetch(`https://dummyjson.com/products/category/${item}`);
const data = await res.json();
return {[item] : data.products}
})
)


const productdata = Object.assign({}, ...resulls)
setproduct(productdata)
  }catch(error) {
    console.log("Error Fount" , error);
    
  }finally {
    setloading(false)
  }
}
fectproduct()
} , [])


return (
<Patgtransition>
<div className="Productlists">
{loading ? (<SwiperSlide1/>) : (Productlists.map((item)=>(
<Sliderproduct key={item} data={product[item]} title={item.replace("-" , " ")}/>
)))}
</div>
</Patgtransition>
);
}

export default Home;
