import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Await, useNavigate } from 'react-router-dom';
import { Link , useLocation} from 'react-router-dom';
function FromeFliter() {
const [serach , setserach] = useState('')
const [serachfilter , serserachfliter] = useState([])

const navigator = useNavigate()
const location = useLocation()


const  handlSbmit = (e) => {
e.preventDefault()
if(serach.trim()) {
navigator(`/serach?query=${(encodeURIComponent(serach.trim()))}`)
}
}
 
useEffect(()=>{
  serserachfliter([])
 return;
} , [location])

useEffect(() => {
  const resltr = async () => {
  if(!serach.trim()) { 
    serserachfliter([])
    return;  
   } 
   try {
 const res = await fetch(`https://dummyjson.com/products/search?q=${serach}`)
    const data = await res.json()
   serserachfliter(data.products.slice(0 , 5) || [])
    }catch(error) {
      console.log(error)}
   }

  const reslter = setTimeout(() => {
   resltr()
  } , 500)
  return () => clearTimeout(reslter)
} , [serach])



return (
    
<div className='fathy'>
  
<form onClick={handlSbmit} className='search_box'>
  <input type='text' name='search' id='search' autoComplete='off'  onChange={(e)=> setserach(e.target.value)} 
  placeholder='Search For Porducts'/>
  <button className='buttondata'  ><FaSearch /></button>
  </form>
 {serachfilter.length > 0 && (
  <ul className='search_box_one'>
    {serachfilter.map((item) => (
      <div className='serarch' key={item.id}> 
    <Link className='serarch' to={`/products/${item.id}`}>
    <p>  <img src={item.images[0]}/></p>
     <p> {item.title}</p>
    </Link>
      </div >
    ))}
  </ul>
)} 
</div> 
 
  )
}

export default FromeFliter