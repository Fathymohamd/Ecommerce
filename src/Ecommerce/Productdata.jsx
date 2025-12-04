import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sliderproduct from './Slider-product';
import SwiperSlide1 from "../Ecommerce/SwiperSlide1"
import ProductsImda from './ProductsImda';
import DataProducts from './DataProducts';
import Patgtransition from './Patgtransition';

function Productdata() {
const { id } = useParams();
const [dataproduct, setdataproduct] = useState(null);
const [categort , detcategort] = useState([]);

const [loading, setloading] = useState(true);
const [categortloading , categortsetloading] = useState(true);


  useEffect(() => {
    const fatchproduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setdataproduct(data);
      
      } catch (error) {
        console.log('Error:', error);
      }finally{
  setloading(false);
      }
    };
    fatchproduct();
  }, [id]);


useEffect(() => {

if(dataproduct) {
     fetch(`https://dummyjson.com/products/category/${dataproduct.category}`)
    .then(res => res.json())
    .then(data => {
      detcategort(data.products);
    })
    .catch(error => {
      console.log("Error", error);
    })
    .finally(() => {
      categortsetloading(false);
    })  
}
}, [dataproduct?.category])



if (loading) {return  <SwiperSlide1/>;}

if(!dataproduct){
return <SwiperSlide1/>
}


  return (
<Patgtransition key={id}>
  
<div>
<div className="itemdiv">
<div className='container2'>


<ProductsImda dataproduct={dataproduct}/>
<DataProducts dataproduct={dataproduct}/>

</div>
</div>

{categortloading ? (<SwiperSlide1/>) : (
<Sliderproduct key={dataproduct.category} data={categort} title={dataproduct.category.replace("-", " ")}/>
)}
</div>
</Patgtransition>

);
}

export default Productdata;
