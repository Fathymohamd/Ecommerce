
import { MdOutlineStarOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaCartArrowDown, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaShare  , FaRegHeart} from "react-icons/fa";
import { Link} from 'react-router-dom';
import { useContext, useState } from "react";
import { Cartcontext } from "./CreateConxte";
import  {toast}  from 'react-hot-toast';
import { TiDeleteOutline } from "react-icons/ti";

function Product({item}) {
const { createconxte, addProduct , ferotes  , addfreotes , removeFavourites} = useContext(Cartcontext);
const isdata = createconxte.some(i => i.id === item.id);
const isdataferotes = ferotes.some(i => i.id === item.id)

const handAddTocart = () => {
  addProduct(item),
toast.success(
  <div className="toast">
    <img className='cart-toast' src={item.images[0]} />

    <div className="cartto">
      <strong>{item.title}</strong>
      added To Cart
      <Link to="/cart">
        <div className="addtocart">View Cart</div>
      </Link>
    </div>
  </div>,
  { duration: 2000 }
);
}

const handleAddToFavourites = () => {
  if (isdataferotes) {
    removeFavourites(item.id);
    toast.error(`${item.title} Removed From Favourites`);
  } else {
    addfreotes(item);
    toast.success(`Added ${item.title} Added To Favourites`);
  }
};




return (
<div className={`product ${isdata ? "in-cart" : ""}`}>
<span id="cartmyproduct"><FaCheck/> in cart</span>
 <Link to={`/products/${item.id}`}>
  <div className="product-img">
    <img src={item.images[0]}/>
  </div>
  <div className="product-title">
    <p>{item.title}</p>
  </div>
  <div className="start">
    <MdOutlineStarOutline/>
    <MdOutlineStarOutline/>
    <MdOutlineStarOutline/>
    <MdOutlineStarOutline/>
    <FaRegStarHalfStroke/>
  </div>
  <div className="price">
    <span>{item.price}</span>
  </div>
</Link>  

    <div className="ciheart">
      <span className= {isdata ? "btn-cart" : ""} onClick={ handAddTocart}><FaCartArrowDown/></span>
     <span className={`${isdataferotes ? "ismalk" : ""}`} onClick={handleAddToFavourites}>
     {isdataferotes ?  <FaRegHeart /> : <TiDeleteOutline />}</span>
      <span><FaShare/></span>
    </div>
    </div>
  )
}

export default Product