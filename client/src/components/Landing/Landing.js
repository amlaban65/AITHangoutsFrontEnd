import React from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.css';
import Container from  'react-bootstrap/Container';
import Button from  'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Landing = () => 
{
  const navigate = useNavigate();
  return(
  <div className={styles.Landing}>
   <section id="hero" className="text">
        <Container>
          <div className='d-flex'>
          <div>
          <h1 className='text headerText'><span style={{textShadow: '1.5px 1.5px black'}} className='text-danger'>Looking for stuff to do? </span>We can help!</h1>
          <br></br>
          <p className='text-primary section' style={{fontSize: '130%'}}>With AIT Hangouts, you can now share your hangout plans with the AIT Community</p>
            <p className='text section' style={{textShadow: '0.5px 0.5px gray', fontSize: '130%'}}>Whether it be a night out in the city, a walk on the Danube, or a silly costume party,
            if you have a hangout idea and wanna meet new people, drop it here!</p>
              
              <Button style={{marginTop:'2%'}} onClick={() => navigate('/hangouts')}>Get Started!</Button>
              </div>
              <div>
              <img className='img-fluid heroImg' style={{scale:'1.12'}}src='hero.png'></img>
              </div>
              </div>
        </Container>
      </section>
  </div>
  );
  }

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
