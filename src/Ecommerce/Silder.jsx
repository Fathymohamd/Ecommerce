import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay ,  Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import logen from '../img/8.jpg'
import logen1 from '../img/13.jpg'
import logen2 from '../img/9.webp'
import Patgtransition from './Patgtransition';
function Silder() {

  return (
 <Patgtransition>
       <div className="hero">
      <div className="container">
        <Swiper loop={true}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  pagination={true} modules={[Pagination , Autoplay]} className="swiper-slide1">

          <SwiperSlide>
   
           <div className="myawiperdata">
                <div className="contact">
              <h4>Due to current circumstances, there may be slight </h4>
              <h1>Lorem ipsum dolor sit amet.<br/> 3G0 Controller</h1>
              <Link id="btn" to="/">Shop Now</Link>
            </div>
            <img id='contact' src={logen}/> 
           </div>
            
          </SwiperSlide>

          <SwiperSlide>

                  <div className="myawiperdata">
                <div className="contact">
              <h4>Super discount for your first purchase.</h4>
              <h1>Lorem ipsum dolor sit amet.<br/> 3G0 Controller</h1>
              <Link id="btn" to="/">Shop Now</Link>
            </div>
            <img id='contact' src={logen1}/> 
           </div>
          </SwiperSlide>
          
   <SwiperSlide>
               <div className="myawiperdata">
                <div className="contact">
              <h4>100% Secure delivery without contacting the courier

              </h4>
              <h1>Lorem ipsum dolor sit amet.<br/> 3G0 Controller</h1>
              <Link id="btn" to="/">Shop Now</Link>
            </div>
            <img id='contact' src={logen2}/> 
           </div>
          </SwiperSlide>
        
        </Swiper>
      </div>
    </div>
 </Patgtransition>

  )
}

export default Silder