
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button, Alert  } from 'react-bootstrap';
import { Link , useNavigate , useLocation } from 'react-router-dom';
import {  useContext, useRef, useState } from 'react';
import { CreatconxteApi } from './AuthConxte';


function Login() {
const {SignUp} = useContext(CreatconxteApi)
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const emailRef = useRef();
const passwordRef = useRef();
const confirmPasswordRef = useRef();
const navigate = useNavigate()


const handleSubmit = async (e) => {
  e.preventDefault();
  if (passwordRef.current.value !== confirmPasswordRef.current.value) {
    return setError("Passwords do not match");
  }

  try {
    setError("");
    setLoading(true);

    await SignUp(
      emailRef.current.value, 
      passwordRef.current.value
    );

navigate("/dashboard")
    return;

  } catch (error) {
  if (error.code === "auth/email-already-in-use") {
    setError("This email is already registered. Try logging in.");
  } else {
    setError("Failed to create an accont. please try againg.");
  }
  } finally {
    setLoading(false);
  }
};


return (
<>

     <Link to="/"><div className="user">CreateAcconut</div></Link>

        <Col md={{span: 6 , offset: 3}}>
          <div className="form-wrapper">
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
    
              <Form.Group className="mb-4">
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control type="email" id='email' name="email" ref={emailRef}/>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label  htmlFor="password">Password</Form.Label>
                <Form.Control type="password" id='password' name="password" ref={passwordRef} />
              </Form.Group>

             <Form.Group className="mb-4">
                <Form.Label  htmlFor="password">confirm  Password</Form.Label>
                <Form.Control type="password" id='passwordfirmpassword' name="passwordfirmpassword"
                 ref={confirmPasswordRef} />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading} className="submitdata">
             Create Account
              </Button>
    
            </Form>
        <div className='Foretpassword'><Link to="/forget-password">Foregt-password</Link></div>
  
          </div>
        </Col>
    
    <div className='w-100  mt-2 d-flex justify-content-center align-items-lg-center'>Already have an accoint? <Link to="/login"><div className='logindata'>Create Account</div ></Link></div>
  </>
  );
}

export default Login;
