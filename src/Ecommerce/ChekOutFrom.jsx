import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,  Col, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  { useContext, useState } from 'react'
import { Cartcontext } from './CreateConxte'
import Lottie from 'lottie-react';
import animationData1 from '../img/Programming Computer.json'



function ChekOutFrom() {

const {createconxte} = useContext(Cartcontext);
const total = createconxte.reduce((acc , item) => acc + item.price * item.quantity , 0);

return (
<>
<div className="Formchekout">
  {createconxte.length === 0 ?
 (<Lottie className='animationData'  animationData={animationData1}/>) : createconxte.map((item) => {
  return (
    <div className="user">
      You are purchasing <div>Title: <span>{item.title}</span></div>  :: 
      <div>$: <span>{total.toFixed(2)}</span> </div>
      <Link to={`/products/${item.id} `}> <div><img className='cart-imgs1' src={item.images[0]}/> </div></Link>
    </div>
  );
})}
</div>

 <Col md={{span: 6 , offset: 3}}>
<div className="form-wrapper">
            <Form >
    
     <Form.Group className="mb-4">
                
     <Form.Group className="mb-4">
                <Form.Label htmlFor='email'>Full Name</Form.Label>
                <Form.Control type="text" id='name' name="name" required/>
              </Form.Group>


                <Form.Label  htmlFor="password">Phone</Form.Label>
                <Form.Control type="text" id='phone' name="phone" required/>
              </Form.Group>


              <Form.Group className="mb-4">
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control type="email" id='email' name="email" required />
              </Form.Group>


             <Form.Group className="mb-4">
                <Form.Label  htmlFor="password">address</Form.Label>
                <Form.Control type="text" id='text' name="address" required />
              </Form.Group>

<Button variant="primary" type="submit"  className="submitdata">pay</Button>
            </Form>
          </div>
        </Col> 

  
  </>
  );
}

export default ChekOutFrom;




