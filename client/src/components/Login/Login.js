import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setMessage("Please enter your email");
      return;
    }
    if (password === "") {
      setMessage("Please enter your password");
      return;
    }
    const result = await axios.post("https://aithangouts-qir7.onrender.com/login", 
    {email: email, password: password}).then((res) => {
      localStorage.setItem('token', res.data.token);
      navigate('/hangouts');
    }).catch(err => {
      if (err.response.status == 400) {
        setMessage('Invalid credentials');
        return;
    }
  });
  }
let auth = localStorage.getItem('token');
return (
<div className="Auth-form-container">
{auth ? <p> You are already logged in </p>:
  <form className="Auth-form" onSubmit={handleSubmit}>
    <div className="Auth-form-content">
      <h3 className="Auth-form-title">Sign in</h3>
      <div className="text-center">
        Need an account?{" "}
        <span className="link-primary" onClick={() => navigate('/register')}>
          Sign Up
        </span>
      </div>
      <div className="form-group mt-3">
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mt-1"
          placeholder="Email Address"
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mt-1"
          placeholder="Password"
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
    <div className='messageAuth'>{message ? <p>{message}</p> : null}</div>
  </form>
  }
</div>
)};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
