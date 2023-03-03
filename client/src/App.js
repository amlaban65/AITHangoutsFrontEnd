import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from  'react-bootstrap/Container';
import Homepage from './components/Homepage/Homepage';
import Team from './components/Team/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitHangout from './components/SubmitHangout/SubmitHangout';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <Navbar bg="primary" variant="dark">
          <Navbar.Brand onClick={() => navigate('/')} style={{marginLeft: '2%'}}>AIT Hangouts</Navbar.Brand>
          <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/pitch')}>Pitch a hangout!</Nav.Link>
            <Nav.Link onClick={() => navigate('/pitch')}>Team</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
        <Route path="/pitch" element={<SubmitHangout/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
      </Routes>
    </div>

  );
}

export default App;
