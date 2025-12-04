import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Product from './Product'
import { SwiperSlide } from 'swiper/react'
import Patgtransition from './Patgtransition'


function Seracgquery() {
const [queryproducts , setqueryproducts] = useState([])
const [queryloading , setqueryloading] = useState(true)

const query = new URLSearchParams(useLocation().search).get("query")


useEffect(() => {
const fectproduct = async () => {
    try{
 const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
 const data = await res.json()
  setqueryproducts(data.products || [])
    }catch(error) {
        console.log(error);
        
    }finally{
        setqueryloading(false)
    }
 
}
if(query) fectproduct()
    
} , [query])




return (
<Patgtransition key={query}>
<div>
<div className="categoried">
<div className="containerdata">

<div className="product-title1">
<h2>Result For : {query}</h2>
</div>

<div className="Productdata">
{queryloading  ? <SwiperSlide/> : queryproducts.length > 0 ? 

queryproducts.map((item, index) => (<Product item={item} key={index} />)) : <div className="containerdata1">
    No Result Fount.
</div>

}
</div>
</div>
</div>
</div>

</Patgtransition>
)
}

export default Seracgquery