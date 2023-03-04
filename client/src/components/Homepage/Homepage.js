import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.css';
import { format } from 'date-fns'
import moment from 'moment'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
const Homepage = () => {
const navigate = useNavigate();
const [data, setData] = useState([]);
const [loading, setLoading] = useState();
useEffect(() => {
  const fetchData = async() => {
    setLoading(true);
  const result = await axios.get("https://aithangouts.onrender.com/hangouts").then((res) => {
    console.log(res)
    setLoading(false);
    return res.data.data
  });
  result?.sort((a, b) => b.date.localeCompare(a.date));
  setData(result);
  console.log(data)
}
fetchData();
}, []);
useEffect(() => {
  if (data?.length == 0) {
    setLoading(true);
  } else {
    setLoading(false);
  }
}, data);
if (loading) {
  return <LoadingComponent/>
}
return(
  
  <div className="homepage gallery" style={{margin: '1%'}}>
    {
    data?.map((hangout) => {
      return (
    <Card className="galleryItem" style={{ width: '24rem'}}>
      <Card.Body>
        <Card.Title style={{fontSize: '200%', fontWeight: '900', marginBottom: '5%'}}>{hangout.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted font-weight-lighter" style={{fontWeight:'650'}}>Organized by: <span style={{fontWeight:'450'}}>{hangout.organizer}</span></Card.Subtitle>
        <br></br>
        <Card.Subtitle className="mb-2 text" style={{fontWeight:'650'}}>Description: <span style={{fontWeight:'350'}}>{hangout.description}</span>
        </Card.Subtitle>
        <br></br>
        <Card.Subtitle className="mb-2 text-muted" style={{fontWeight:'650'}}>Contact: <span style={{fontWeight:'450'}}>{hangout.contact}</span></Card.Subtitle>
        <br></br>
        <Card.Subtitle className="mb-2 text font-weight-lighter" style={{fontWeight:'650'}}>Date pitched: <span style={{fontWeight:'350'}}>{moment(hangout.date).format("dddd")}, {moment(hangout.date).format("DD/MM/YYYY")}</span></Card.Subtitle>
      </Card.Body>
    </Card>
      )})}
    </div>
);
}

Homepage.propTypes = {};

Homepage.defaultProps = {};

export default Homepage;
