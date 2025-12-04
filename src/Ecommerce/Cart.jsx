import React, { useContext } from 'react'
import { Cartcontext } from './CreateConxte'
import { RiDeleteBin6Line } from "react-icons/ri";
import Lottie from 'lottie-react';
import animationData1 from '../img/Revenue.json'
import { Link } from 'react-router-dom';
import ChekOutFrom from './ChekOutFrom';


function Cart() {
  const { createconxte ,  cartquantity , cartin , delet} = useContext(Cartcontext);
 const total = createconxte.reduce((acc , item) => acc + item.price * item.quantity , 0);

  
  return (
  <div className='ChekOutFrom'>
  
  <div> <ChekOutFrom /></div>
  
  
  
  <div className="cartout">
  <div className='order-summary'>
          
  <div className='feroteslength'><h3>Order-Summary</h3> <p>{createconxte.length}</p></div>
  
  </div>
  {createconxte.length === 0 ? (
  <Lottie className='animationData'  animationData={animationData1}/>
  ) : (
  
  createconxte.map((item, index ) => (
  
  <div key={index.id}>
      <div className="cart-item">
      <div className="cart-products">
  
               <Link to={`/products/${item.id} `}>    <img className='cart-imgs' src={item.images?.[0]}/> </Link>
                  <div className="cart-title">
                    <h2>{item.title}</h2>
                    <p><span>${total.toFixed(2)}</span></p>
                    <div className="cart-in">
                      <div className='cart-cart' onClick={() => cartin(item.id)}>-</div>
                      <span>{item.quantity}</span>
                      <div className='cart-cart' onClick={()=> cartquantity(item.id)}>+</div>
                    </div>
                  </div>
                </div>
                <div className="cart-delelt" onClick={()=> delet(item.id)}><RiDeleteBin6Line /></div>
              </div>
            </div>
  
    
          ))
        )}
        <div className="totle">
          <p>Total : </p>
          <h3>${total.toFixed(2)}</h3>
        </div>
        <div className='place-order'>Place Order</div>
      </div>
  
  
    </div>
    
  )
  
}


export default Cart