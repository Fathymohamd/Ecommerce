
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Cartcontext } from "./CreateConxte";
import logen from '../img/4.jpg'
import { useContext } from "react";
import { Link } from "react-router-dom";
import Patgtransition from "./Patgtransition";
import FromeFliter from "./FromeFliter";
import Dashboard from "./Dashboard";
function Header() {
 const { createconxte  , ferotes} = useContext(Cartcontext);

  return (
<Patgtransition>
      <div className='top_header'>
   <div className='container'>
     <img src={logen}/> 

 <FromeFliter/>

<div className="header-icons">

<Link to="/Faverot"> <div className="icon"> <CiHeart /> <span className="count">{ferotes.length}</span> </div></Link>

<div className="icon">
  
<Link to='/cart'><FaCartShopping /><span className="count">{createconxte.length}</span></Link>
</div>
 </div>
   </div>
    </div>
</Patgtransition>
  )
}

export default Header