import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineStarOutline  } from "react-icons/md";
import { FaCartArrowDown , FaRegStarHalfStroke } from "react-icons/fa6";
import { FaShare , FaRegHeart} from "react-icons/fa";
import   toast from 'react-hot-toast';
import { Cartcontext } from './CreateConxte';
import { Link} from 'react-router-dom';
import { TiDeleteOutline } from "react-icons/ti";
function DataProducts({dataproduct}) {
const { addProduct,  createconxte , ferotes , addfreotes , removeFavourites } = useContext(Cartcontext);
const createconxtedata = createconxte.some(i => i.id === dataproduct.id) 
const setferotes = ferotes.some((i) => i.id === dataproduct.id)


const handAddferotes = () => {
  if(setferotes) {
    removeFavourites(dataproduct.id);
    toast.error(`${dataproduct.title} Removed From Favourites`);
  }else {
 addfreotes(dataproduct);
 toast.success(`Added ${dataproduct.title} Added To Favourites`);
  }
}
const handAddTocart = () => {
if(!createconxtedata) {
     addProduct(dataproduct);

    toast.success(
      <div className="toast">
        <img className='cart-toast' src={dataproduct.images[0]} />
        <div className="cartto">
          <strong>{dataproduct.title}</strong>
          added To Cart
          <Link to="/cart">
            <div className="addtocart">View Cart</div>
          </Link>
        </div>
      </div>,
      { duration: 4000 }
    )
}else {
 toast.error('Product already in cart!')
 
}
}


return (
<div className="delet-item">
  <h1>{dataproduct.title}</h1>
  <div className="start">
    <MdOutlineStarOutline/>
    <MdOutlineStarOutline/>
    <MdOutlineStarOutline/>
    <MdOutlineStarOutline/>
    <FaRegStarHalfStroke/>
  </div>

<span className="price"> $ {dataproduct.price}</span>
<h5>Availabilty: <span>{dataproduct.availabilityStatus}</span></h5>
<h5>Brank: <span>{dataproduct.brand}</span></h5>
<div className="dese">{dataproduct.description}</div>
<h5>Hurry Upl  <span>{dataproduct.stock}</span> Product left in stock.</h5>

<div onClick={handAddTocart} className={`button ${createconxtedata ? "in-cart" : ""}`}>
{createconxtedata ? "item in cart" : "Add in cart"} <FaCartArrowDown/>
</div>

<div className="Heart-svg">
<div className={`Heartdata ${setferotes ? "inferotes" : ""}`} onClick={handAddferotes }>
  <span>{setferotes ? <FaRegHeart/> : <TiDeleteOutline/>}</span></div>
<div className="Heartdata"><span><FaShare/></span></div>
</div>
</div>

  )
}

export default DataProducts