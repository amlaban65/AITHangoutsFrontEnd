import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MyHangouts.css';
import { format } from 'date-fns'
import moment from 'moment'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import jwt_decode from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart }  from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import AuthWall from '../AuthWall/AuthWall';

const MyHangouts = () => { 
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [returned, setReturned] = useState()
  const [loading, setLoading] = useState();
  const jwtToken = localStorage.getItem('token');
  let user_id;
  if (jwtToken) {
    const decodedToken = jwt_decode(jwtToken);
    user_id = decodedToken.user_id;
  }
  useEffect(() => {
    const fetchData = setInterval(async() => {
      // setLoading(true);
    const result =await axios.get(`https://aithangouts.onrender.com/myhangouts/${user_id}`, {
    headers: {
      'Authorization': `Bearer ${jwtToken}`
    }}).then((res) => {
      // setLoading(false);
      return res.data.data
    }).catch((err) => {
      console.log(err)
      if (err.response.status == 401) {
        localStorage.removeItem('token');
        navigate('/login')
        return;
    }
    });
    result?.sort((a, b) => b.date.localeCompare(a.date));
    setData(result);
    setReturned(true);
  }, 1000)
  return () => clearInterval(fetchData);
  }, []);
  useEffect(() => {
    if (!returned) {
      console.log('here')
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);
  if (loading && !returned) {
    return <LoadingComponent/>
  }
  

  const deleteHangout= async (id) => {
    if (window.confirm("Are you sure you want to delete this hangout?")) {
      await axios.delete(`https://aithangouts.onrender.com/hangout/${id}/${user_id}`, {
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        }}).then((res) => {
          setLoading(false);
          return res.data.data
        }).catch((err) => {
          console.log(err)
        });
    } else {
      return;
    }
  };
  
  const likeHangout = async (id) => {
    await axios.patch(`https://aithangouts.onrender.com/likeHangout/${id}/${user_id}`).then((res) => {
        setLoading(false);
        return res.data.data
      }).catch((err) => {
        console.log(err)
      });
  };
  const unlikeHangout = async (id) => {
    await axios.patch(`https://aithangouts.onrender.com/unlikeHangout/${id}/${user_id}`).then((res) => {
        setLoading(false);
        return res.data.data
      }).catch((err) => {
        console.log(err)
      });
  };
  return(
    
    <div className="homepage gallery" style={{margin: '1%'}}>
       {!jwtToken ? <div className='loggedOut'>
        You must be logged in to view this page</div> :
        data?.length == 0 ?  <div style={{textAlign: 'center',
        fontWeight:'500', fontSize:'large', marginTop:'5%'}}>Hmmmm this seems to be empty. Try pitching a hangout!</div>
        :
      data?.map((hangout) => {
        return (
      <Card className="galleryItem" style={{ width: '24rem'}}>
        <Card.Body>
          {user_id === hangout.user_id ? <div style={{display:'flex', justifyContent:'space-between'}}>
            <Card.Title className='text-truncate text-wrap'
            style={{fontSize: '200%', fontWeight: '900', marginBottom: '5%'}}>{hangout.title}</Card.Title>
            <FontAwesomeIcon onClick={() => deleteHangout(hangout._id)}
            className="utilIcon" icon={faTrash} size='lg' />
            </div>: 
          <Card.Title className='text-truncate text-wrap' style={{fontSize: '200%', fontWeight: '900', marginBottom: '5%'}}>{hangout.title}</Card.Title> }
          <Card.Subtitle className="mb-2 text-muted font-weight-lighter" style={{fontWeight:'650'}}>Organized by: <span style={{fontWeight:'450'}}>{hangout.organizer}</span></Card.Subtitle>
          <br></br>
          <Card.Subtitle className="mb-2 text" style={{fontWeight:'650'}}>Description: <span style={{fontWeight:'350'}}>{hangout.description}</span>
          </Card.Subtitle>
          <br></br>
          <Card.Subtitle className="mb-2 text-muted" style={{fontWeight:'650'}}>Contact: <span style={{fontWeight:'450'}}>{hangout.contact}</span></Card.Subtitle>
          <br></br>
          <Card.Subtitle className="mb-2 text font-weight-lighter" style={{fontWeight:'650'}}>Date pitched: <span style={{fontWeight:'350'}}>{moment(hangout.date).format("dddd")}, {moment(hangout.date).format("MM/DD/YYYY")}</span></Card.Subtitle>
        </Card.Body>
        {hangout.favorites?.includes((user_id)) ? <FontAwesomeIcon className="utilIcon" icon={farHeart} size='lg' 
        onClick={() => unlikeHangout(hangout._id)}/>
        : <FontAwesomeIcon className="utilIcon" icon={faHeart} size='lg' onClick={() => likeHangout(hangout._id)}/>
      }
        <div style={{textAlign:'center', fontWeight: '700'}}>{hangout.favorites?.length}</div>
              </Card>
        )})}
      </div>
  );
  }

MyHangouts.propTypes = {};

MyHangouts.defaultProps = {};

export default MyHangouts;
