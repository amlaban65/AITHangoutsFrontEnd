import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from  'react-bootstrap/Container';
import Homepage from './components/Homepage/Homepage';
import Team from './components/Team/Team';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitHangout from './components/SubmitHangout/SubmitHangout';
import MyHangouts from './components/MyHangouts/MyHangouts';
import Landing from './components/Landing/Landing';
import jwt_decode from 'jwt-decode';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function App() {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem('token');
  let name;
  if (jwtToken) {
    const decodedToken = jwt_decode(jwtToken);
    name = decodedToken.name;

  }
  const logout = () => {
    localStorage.removeItem('token');
    navigate("/");
  }
  if (jwtToken === 'undefined') {
    localStorage.removeItem('token');
    navigate('/login')
}
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <Navbar  collapseOnSelect sticky="top" bg="primary" expand="lg" variant="dark">
          <Navbar.Brand onClick={() => navigate('/')} style={{marginLeft: '2%', fontWeight: '800'}}>AIT Hangouts</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
            <Nav className="me-auto">
              {!jwtToken ? null :
              <>
            <Nav.Link onClick={() => navigate('/hangouts')}>Hangouts</Nav.Link>
              <Nav.Link onClick={() => navigate('/pitch')}>Pitch a hangout</Nav.Link>
              <Nav.Link onClick={() => navigate('/myhangouts')}>My Hangouts</Nav.Link>           
              </>}
              <Nav.Link onClick={() => navigate('/team')}>Team</Nav.Link>
            </Nav>
          </Container>
          {!jwtToken ?
          // <Container style={{justifyContent:'flex-end'}}>
          <Nav className='me-auto' style={{paddingRight:'2%'}}>
            <Nav.Link className='light navigationSpace'
              onClick={() => navigate('/login')}>Login</Nav.Link>
            <Nav.Link className='light navigationSpace'
            onClick={() => navigate('/register')}>Sign up</Nav.Link>
            </Nav>
          :
            <Nav style={{paddingRight:'2%'}}>
            <Nav.Link className='navigationSpace light'
              onClick={() => logout()}>Logout</Nav.Link>
             </Nav> }
          </Navbar.Collapse>
      </Navbar>
    <Routes>
    <Route path="/" element={<Landing />}></Route>
      <Route path="/hangouts" element={<Homepage />}></Route>
      <Route path="/pitch" element={<SubmitHangout/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/myhangouts" element={<MyHangouts/>}></Route>
    </Routes>
    </div>

  );
}

export default App;
