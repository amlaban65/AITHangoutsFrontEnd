import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import styles from './Team.css';

const Team = () => (
  <div style={{margin: '1%',
  display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src="Headshot.jpg" />
      <Card.Body>
        <Card.Title style={{fontWeight: '900'}}>Ahmed Laban</Card.Title> 
        <Card.Subtitle className="sub mb-2 text-muted">Founder, gym bro, and hangout expert</Card.Subtitle>
        <Card.Text>
          I am a junior at the University of Pennsylvania studying Computer Science.
          I am studying at AIT during Spring 2023. I built this website after realizing that
          AIT does not have a centralized place where we can share plans.
        </Card.Text>
        <Container>
        <Button href='https://www.instagram.com/ahmed.laban127/' variant="primary">Instagram</Button>
        <Button href='https://www.linkedin.com/in/ahmed-laban-bb27411ab/' variant="primary">Linkedin</Button>
        </Container>
      </Card.Body>
    </Card>
</div>
);

Team.propTypes = {};

Team.defaultProps = {};

export default Team;
