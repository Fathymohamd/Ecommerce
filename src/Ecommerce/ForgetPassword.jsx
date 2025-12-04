import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useRef, useState } from 'react';
import { Form, Alert ,  Col, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreatconxteApi } from './AuthConxte';
function ForgetPassword() {
const {restEmail} = useContext(CreatconxteApi)
const [error , seterror] = useState("")
const [login , setlogin] = useState(false)
const [message , setmassage] = useState("")
const emailref = useRef()
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      seterror("")
      setlogin(true)
      restEmail(emailref.current.value)
      setmassage("Chack your inbox to get new password")
    }catch{
      seterror("Failes to regust password  ")
    }finally {
      setlogin(false)
    }
  }
  return (
<>

     <Link to="/"><div className="user">Regist-Password</div></Link>
  
        <Col md={{span: 6 , offset: 3}}>
          <div className="form-wrapper">
            <Form onSubmit={handleSumbit}>
       {error && <Alert variant='danger'>{error}</Alert>}
       {message && <Alert variant='success'>{message}</Alert>}
              <Form.Group className="mb-4">
                <Form.Label htmlFor='email'>Email address</Form.Label>
                <Form.Control type="email" id='email' name="email" ref={emailref} />
              </Form.Group>
           
              <Button variant="primary" type="submit" disabled={login} className="submitdata">
               Regust Password
              </Button>
            </Form>
        <div className='Foretpassword'><Link to="/login">Login</Link></div>
          </div>
        </Col>
      
    <div className='w-100  mt-2 d-flex justify-content-center align-items-lg-center'>Already have an accoint? <Link to="/login"><div className='logindata'>Log In</div ></Link></div>
  </>
  );
}

export default ForgetPassword;