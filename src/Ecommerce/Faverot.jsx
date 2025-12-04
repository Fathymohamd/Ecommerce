import React from 'react'
import { useContext } from "react";
import { Cartcontext } from "./CreateConxte";
import Lottie from 'lottie-react';
import animationData1 from '../img/login screen.json'
import Product from './Product';
function Faverot() {
  const {ferotes} = useContext(Cartcontext);
  return (
    <div>
      <div className="ferotet">
        <div className="productferotet">
          <div className='feroteslength'><h3>Youe Favorites</h3> <p>{ferotes.length}</p></div>
        </div>
        {ferotes.length === 0 ? (<Lottie className='animationData'  animationData={animationData1}/> ) : 
        <div className="dataFavorites">
          {ferotes.map((item) => (
            <Product  item={item} key={item.id}/>
          ))}
        </div>
        }
      </div>
    </div>
  )
}

export default Faverot