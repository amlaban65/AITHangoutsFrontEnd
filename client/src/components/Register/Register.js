import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
      return;
    }
    if (email !== confirmEmail) {
      setMessage("Emails don't match");
      return;
    }
    if (name === "") {
      setMessage("Please enter your name");
      return;
    }
    if (email === "") {
      setMessage("Please enter your email");
      return;
    }
    if (password === "" || confirmPassword === "") {
      setMessage("Please enter your password");
      return;
    }
    const result = await axios.post("https://aithangouts.onrender.com/register", 
    {name: name, email: email, password: password}).then((res) => {
      localStorage.setItem('token', res.data.token);
      navigate('/hangouts');
      return;
    }).catch(err => {
      if (err.response.status == 409) {
        setMessage('A user with this email already exists. Please login.');
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
      <h3 className="Auth-form-title">Sign Up</h3>
      <div className="text-center">
        Already registered?{" "}
        <span className="link-primary" onClick={() => navigate('/login')}>
          Sign In
        </span>
      </div>
      <div className="form-group mt-3">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mt-1"
          placeholder="e.g Jane Doe"
        />
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
        <label>Confirm email address</label>
        <input
          type="email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          className="form-control mt-1"
          placeholder="Confirm Email Address"
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
      <div className="form-group mt-3">
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-control mt-1"
          placeholder="Confirm Password"
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
);
  }

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
