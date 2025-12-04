import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const navLinks= [
  {title: "Home" , Link:'/'},
  {title: "About" , Link:'/about'},
  {title: "Accessories" , Link:'/accessories'},
  {title: "Blog" , Link:'/blog'},
  {title: "Contact" , Link:'/contact'},
]


function Homer() {
  const [categorise , setcategoris] = useState([])
  const [navlink , setnavlink] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Browse Category');
  const [login , setlogin] = useState(false)


  const location = useLocation()
useEffect(()=>{
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((data) => setcategoris(data))
},[categorise])

  useEffect(() => {
    setnavlink(false)
  } , [location])

  return (
   
     <div className='Homer'>
      <div className='container'>
       

        <div id='container'>
  <div onClick={()=>{setnavlink(!navlink)}} className='MdArrowDropDown'>
  <Link><span><IoMdMenu/></span></Link>
  <div onClick={() => navlink(!setnavlink)}>{selectedCategory}</div>
  <MdArrowDropDown/>
  {navlink && (
      <div id="navlink">
        {categorise.map((category, index) => (
          <Link to={`/category/${category.slug}`} onClick={() => setSelectedCategory(category.name)}>
            <div className='option' key={index} value={category}>{category.name}</div>
          </Link>
        ))}
      </div>
    )}
     </div>
      <div>
      
  <div className='uldata'>
    <nav>
      {navLinks.map((item, index) => (
        <li key={index}>
          <Link
            className={location.pathname === item.Link ? "active" : ""}
            to={item.Link}
            style={{ color: '#fff' }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </nav>
  </div>
</div>
</div>

  <div className='sign-in'>
  <div><FaSignInAlt/></div>
     
    <div onClick={() => setlogin(!login)}>
    <FaUserPlus/>

   {login && (
  <div className='FaUserPlus'>
<Link to="/login"><p>Login</p></Link>
<Link to="/createAccount"><p>Create Account</p></Link>
</div>
 )}

</div>
</div>

</div>
</div>
  )
}

export default Homer