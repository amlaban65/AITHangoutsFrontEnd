import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.css';
import { format } from 'date-fns'
import moment from 'moment'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Homepage = () => {
const navigate = useNavigate();
const [data, setData] = useState([]);
useEffect(() => {
  const fetchData = async() => {
  const result = await axios.get("https://aithangouts.onrender.com/hangouts").then((res) => {
    console.log(res)
    return res.data.data
  });
  result.sort((a, b) => b.date.localeCompare(a.date));
  setData(result);
  console.log(data)
}
fetchData();
}, []);
return(
  
  <div className="homepage gallery" style={{margin: '1%'}}>
    {
    data?.map((hangout) => {
      return (
    <Card className="galleryItem" style={{ width: '24rem'}}>
      <Card.Body>
        <Card.Title style={{fontSize: '200%', fontWeight: '900', marginBottom: '5%'}}>{hangout.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted font-weight-lighter" >Organized by: {hangout.organizer}</Card.Subtitle>
        <br></br>
        <Card.Subtitle className="mb-2 text">Description: {hangout.description}
        </Card.Subtitle>
        <br></br>
        <Card.Subtitle className="mb-2 text-muted">Contact: {hangout.contact}</Card.Subtitle>
        <br></br>
        <Card.Subtitle className="mb-2 text font-weight-lighter">Date pitched: {moment(hangout.date).format("dddd")}, {moment(hangout.date).format("DD/MM/YYYY")}</Card.Subtitle>
      </Card.Body>
    </Card>
      )})}
    </div>
);
}

Homepage.propTypes = {};

Homepage.defaultProps = {};

export default Homepage;
