import { pre } from 'framer-motion/client';
import  { createContext, useEffect, useState } from 'react'



export const Cartcontext = createContext();



function CreateConxte({ children }) {
const [ferotes  , setferotes] = useState(() => {
  const saveferotes = localStorage.getItem("ferotesproducts");
  if(saveferotes) {
    return JSON.parse(saveferotes)
  }else {
    return []
  }
})



const addfreotes = (item) => {
  setferotes((pre) => {
    if (pre.some((i) => i.id === item.id)) return pre;
    return [...pre, item];
  });
};


const removeFavourites = (id) => {
  setferotes((pre) => pre.filter((i) => i.id !== id));
};



useEffect(()=> {
localStorage.setItem('ferotesproducts' , JSON.stringify(ferotes))
} , [ferotes])







 const [createconxte, setcreateconxte] = useState(()=>{
  const save = localStorage.getItem("cartdata");
  if(save){
    return JSON.parse(save);
  }else {
    return [];
  }
 });


const addProduct = (product) => {setcreateconxte([...createconxte , {...product, quantity: 1}])}


const cartquantity = (id)=>{
setcreateconxte(createconxte.map(item => (item.id === id ) ? {...item , quantity: item.quantity + 1} : item))
}

const cartin = (id)=>{
setcreateconxte(createconxte.map(item => (item.id === id && item.quantity > 1) ? {...item , quantity : item.quantity - 1 } : item))
}

const delet = (id)=>{
setcreateconxte(createconxte.filter(item => item.id !== id))
}

  useEffect(()=>{
    localStorage.setItem("cartdata" , JSON.stringify(createconxte))
  } , [createconxte])


  return (
    <Cartcontext.Provider value={{ createconxte, addProduct 
    , cartquantity , cartin , delet , ferotes , addfreotes , removeFavourites}}>
      {children}
    </Cartcontext.Provider>
  )
}
export default CreateConxte