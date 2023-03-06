import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Landing.css';
import Container from  'react-bootstrap/Container';
import Button from  'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const Landing = () => 
{
  const jwt = localStorage.getItem('token');
  if (jwt === 'undefined') {
      localStorage.removeItem('token');
      navigate('/login')
  }
  const navigate = useNavigate();
  return(
  <div className={styles.Landing}>
   <section id="hero" className='text-center text-sm-start py-3'>
     <Container>
       <div className='d-flex align-items-center justif-content-center'>
         <div style={{marginRight: '6%'}}>
           <h1>Looking for stuff to do? 
             <span className='text-primary'> We can help!</span>
             </h1>
             <p style={{fontWeight:'500', fontSize:'larger'}}>With AIT Hangouts, you can connect with other students looking
               to organize fun outings! <br></br><br></br>From a crazy night out in Center City to a walk by the Schuylkill River,
               you will find all kinds of exciting hangouts here.
             </p>
             {jwt ? 
             <Button onClick={() => navigate('/hangouts')} variant='primary'>Get started!</Button>
             :
             <Button onClick={() => navigate('/register')} variant='primary'>Get started!</Button>
             }
         </div>
         <img 
         className='d-none d-sm-block img-fluid h-20 w-30 py-2' 
         style={{width:'30%'}}
         src="hangoutHero.svg"></img>
       </div>
       </Container>
      </section>
      <section id="hero" className='text-center text-sm-start py-3'>
      <Container>
       <div className='d-flex align-items-center justif-content-center'>
         <div style={{marginRight: '6%'}}>
           <h1>Easier than texting
             </h1>
             <p style={{fontWeight:'500', fontSize:'larger'}}>All you need to do is login, pitch a hangout, and wait for people to reach out!
             <br></br>
             <span className='text-primary'>It's that simple. We promise.</span>
             </p>
         </div>
         <img 
         className='d-none d-sm-block img-fluid h-20 w-30 py-2' 
         style={{width:'25%', marginLeft:'14%'}}
         src="demo.png"
         ></img>
       </div>
       </Container>
        </section>
        <section id="hero" className='text-center text-sm-start py-3'>
      <Container>
       <div className='d-flex align-items-center justif-content-center'>
         <div style={{marginRight: '6%'}}>
           <h1>And the best part? <span className='text-primary'>You get to make new friends!</span>
             </h1>
             <p style={{fontWeight:'500', fontSize:'larger'}}>Forget about awkward club meetings. This is the new way to meet people on campus.             <br></br>
             </p>
         </div>
         <img 
         className='d-none d-sm-block img-fluid h-20 w-30 py-2' 
         style={{width:'25%'}}
         src="conversation.svg"></img>
       </div>
       </Container>
        </section>
        <section id="hero" className='text-center text-sm-start py-3'>
      <Container>
       <div className='d-flex align-items-center justif-content-center'>
         <div style={{marginRight: '6%'}}>
           <h1>Don't believe us? Try it out for yourself.  <span className='text-primary'>It's free :)!</span>
             </h1>
             {jwt ? 
             <Button onClick={() => navigate('/hangouts')} variant='primary'>Browse hangouts!</Button>
             :
             <Button onClick={() => navigate('/register')} variant='primary'>Sign up!</Button>
             }         </div>
         <img 
         className='d-none d-sm-block img-fluid h-20 w-30 py-2' 
         style={{width:'25%'}}
         src="demo2.png"></img>
       </div>
       </Container>
        </section>
  </div>
  );
  }

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
