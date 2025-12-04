import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Col ,Alert } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';
import { CreatconxteApi } from "./AuthConxte";
import { useContext , useState  } from "react";

const Dashboard = () => {

  const { logout , creatconxtAli } = useContext(CreatconxteApi);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handlelogout = async () => {
        setError("")
    try {
      await logout()
      navigate("/createAccount")
    } catch {
      setError("Failed to log out")
    }
  }


  return (
    <>
      <Col md={{ span: 6 , offset: 3 }}>
        <div className="form-wrapper">
          {error && <Alert variant='danger'>{error}</Alert>}

          <strong>Email :  <span>{ creatconxtAli && creatconxtAli.email }</span></strong> 

          <div className='Foretpassword'><Link to="/login">Update profile</Link></div>
        </div>

        <div className='text-center mt-3'>
          <Button className="btn btn-primary" onClick={handlelogout}>Log out</Button>
        </div>
      </Col>
    </>
  )
}

export default Dashboard;