import React from 'react'
import animation from '../img/Trail loading.json';
import Lottie from 'lottie-react';
function SwiperSlide1() {
  return (
<div className='load'>
<Lottie  style={{height:'40'}} animationData={animation} loo={true} autoplay/>
</div>
  )
}

export default SwiperSlide1