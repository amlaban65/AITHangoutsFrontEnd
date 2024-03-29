import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './SubmitHangout.css';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const SubmitHangout = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !organizer || !contact) {
      setMessage("Please fill out all the fields!");
      return;
    }
    try {
      let res = await axios.post("https://aithangouts-qir7.onrender.com/hangout/", {
        title: title,
        description: description,
        organizer: organizer,
        contact: contact,
        user_id: user_id
      }, {
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        }})
      if (res.status === 201) {
        setTitle("");
        setDescription("");
        setOrganizer("");
        setContact("");
        setMessage("Hangout pitched successfully! This one's gonna be fun!");
        navigate('/hangouts');
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status == 401) {
        localStorage.removeItem('token');
        navigate('/login')
        return;
    }
    }
  };
  const jwtToken = localStorage.getItem('token');
  let user_id;
  if (jwtToken) {
    const decodedToken = jwt_decode(jwtToken);
    user_id = decodedToken.user_id;
  }
  return (
    <>
    {!jwtToken ? <div className='loggedOut'>
      You must be logged in to pitch a hangout</div> :
  <div className={styles.SubmitHangout} style={{margin: '1%'}}>
       <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Event name</label>
    <input type="text" value={title}
    maxLength={45}
     onChange={(e) => setTitle(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="What's cookin', good lookin'?"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
    value={description}
    maxLength={150}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="What's going down? Make sure to include time, location, etc.."></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Organizer</label>
    <input value={organizer}
    maxLength={25}
     onChange={(e) => setOrganizer(e.target.value)}
    type="text" class="form-control" id="exampleFormControlInput1" placeholder="Who came up with this?"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Contact</label>
    <input type="text"
    maxLength={25}
    value={contact} 
    onChange={(e) => setContact(e.target.value)}
    class="form-control" id="exampleFormControlInput1" placeholder="Email, phone number, or IG handle is fine"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit!</button>
  <div className="message">{message ? <p>{message}</p> : null}</div>
</form>
  </div>
    }
    </>
  );
}

SubmitHangout.propTypes = {};

SubmitHangout.defaultProps = {};

export default SubmitHangout;
