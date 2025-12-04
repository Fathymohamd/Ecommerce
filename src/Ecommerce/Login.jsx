import 'bootstrap/dist/css/bootstrap.min.css';
import {  useContext, useState  , useRef} from 'react';
import { Form,  Col, Button  , Alert } from 'react-bootstrap';
import { Link , useNavigate , useLocation } from 'react-router-dom';
import { CreatconxteApi } from './AuthConxte';

function Regist() {
const {Login } = useContext(CreatconxteApi)
const [error , setError] = useState("")

const [loading, setLoading] = useState(false);
const location = useLocation();

const from = location.state?.path || "/dashboard"

const emailRef = useRef();
const passwordRef = useRef();


const navigate = useNavigate()

const handleSumbit = async (e) => {
  e.preventDefault();

  try {
    setError("");
    setLoading(true);

    await Login(
      emailRef.current.value,
      passwordRef.current.value
    );

    navigate(from, { replace: true });

  } catch (error) {
     if (error.code === "auth/email-already-in-use") {
    setError("This email is already registered. Try logging in.");
  } else {
    setError("Failed to log In");
  }
  } finally {
    setLoading(false);
  }
}; 

return (
<>
<Link to="/"> <div className="user">User Login</div></Link>
    
        <Col md={{span: 6 , offset: 3}}>
          <div className="form-wrapper">
                {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSumbit}>
       
              <Form.Group className="mb-4">
                <Form.Label htmlFor='Emailaddress'>Email</Form.Label>
                <Form.Control type="email" id="Emailadress" name="email" ref={emailRef} />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor='passwprd'>Password</Form.Label>
                <Form.Control type="password" id='password' name="password" ref={passwordRef}/>
              </Form.Group>
           
              <Button variant="primary" type="submit" disabled={loading} className="submitdata">
                Submit
              </Button>
            </Form>
          </div>
        </Col>

<div className='w-100  mt-2 d-flex justify-content-center align-items-lg-center'>Already have an accoint? 
  <Link to="/createAccount">
  <h2 className='logindata'>Log In</h2></Link></div>
  </>
  );
}

export default Regist;
