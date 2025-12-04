import Header from "./Ecommerce/Header"
import Homer from "./Ecommerce/Homer"
import Silder from "./Ecommerce/Silder"
import Home from "./Ecommerce/Home"
import Cart from "./Ecommerce/Cart"
import ScrillTo from "./Ecommerce/ScrillTo"
import CategoriedProduct from "./Ecommerce/CategoriedProduct"
import Seracgquery from "./Ecommerce/Seracgquery"
import Faverot from "./Ecommerce/Faverot"
import Footer from "./Ecommerce/Footer"
import Login from "./Ecommerce/Login"
import CreateAccount from "./Ecommerce/CreateAccount"
import ForgetPassword from './Ecommerce/ForgetPassword';
import AuthConxte from "./Ecommerce/AuthConxte"
import Reuert  from "./Ecommerce/Reuert"

import "./Style/Header.css"
import "./Style/Homer.css"
import "./Style/Slider.css"
import "./Style/Slider-product.css"
import "./Style/Product.css"
import "./Style/DataProducts.css"
import "./Style/SwiperSlider.css"
import "./Style/Cart.css"
import "./Style/Home.css"
import "./Style/CategoriedProduct.css"
import "./Style/Serachquery.css"
import "./Style/FromeFliter.css"
import './Style/Favorites.css'
import './Style/Footer.css'
import "./Style/Login.css"
import "./Style/ForgetPassword.css"
import "./Style/ChekOutFrom.css"

import { Route, Routes } from "react-router-dom"
import Productdata from "./Ecommerce/Productdata"
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from "framer-motion"
import Dashboard from "./Ecommerce/Dashboard"

function App() {
return (
<>
<AuthConxte>
<header>
<Header/>
<Homer/>
</header>

<Toaster  position="bottom-right" toastOptions={{ style: { background: "#eee" , padding:'14px' ,
borderRadius:'5px'} }} />
<ScrillTo/>
<Silder/>
<AnimatePresence mode="wait">

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="cart" element={<Cart/>}/>
<Route path="dashboard" element={<Reuert><Dashboard/></Reuert>}/>
<Route path="login" element={<Login/>}/> 
<Route path="createAccount" element={<CreateAccount/>}/> 
<Route path="forget-password" element={<ForgetPassword/>}/> 
<Route path="/Faverot" element={<Faverot/>}/>  
<Route path="serach" element={<Seracgquery/>}/>
<Route path="/products/:id" element={<Productdata/>}/>
<Route path="/card/:id" element={<Productdata/>}/>
<Route path="/category/:category" element={<CategoriedProduct/>}/>
</Routes>
<Footer/>
</AnimatePresence>
</AuthConxte>
</>
)
}

export default App;