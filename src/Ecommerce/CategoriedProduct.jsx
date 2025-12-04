import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import { SwiperSlide } from 'swiper/react'
import Patgtransition from './Patgtransition'


function CategoriedProduct() {
const [Products , setProducts] = useState([])
const [longint , setlongint] = useState(true)

const {category} = useParams()

useEffect(() => {
const tt = async () => {
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    }).catch((error) => console.log(error))
    .finally(() => setlongint(false))
}

tt()
}, [category]);


  return (
<Patgtransition key={category}>
        <div>
<div className="categoried">
<div className="containerdata">

<div className="product-title1">
<h2>{category} : {Products.limit}</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cumque?</p>
  </div>
<div className="Productdata">
      {longint ? <SwiperSlide/> :
    
    Products.products.map((item, index) => (
      <Product item={item} key={index} />
    ))
  }
</div>
</div>
        </div>
    </div>
</Patgtransition>
  )
}

export default CategoriedProduct