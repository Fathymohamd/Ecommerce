import Product from "./Product"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation  , Autoplay} from 'swiper/modules';

import { Pagination } from 'swiper/modules';
import Patgtransition from "./Patgtransition";

function Sliderproduct({data , title , description}) {
  return (
<Patgtransition>
     <div>
 <div className="slider-product">
<div className="container1">
<div className="top-slider">
<h1>{title}</h1>
<p>{description}</p>
</div>

<Swiper loop={true}  autoplay={{
delay: 2500,
disableOnInteraction: false,
}}  slidesPerView={4} navigation={true} modules={[Pagination , Autoplay]} className="swiper-slide2">
{data.map((item)=>{
return (
<SwiperSlide className="swiper-slide3"><Product item={item}/></SwiperSlide>
)
})}
            
</Swiper>
</div>
</div>
</div>
</Patgtransition>
  )
}

export default Sliderproduct
