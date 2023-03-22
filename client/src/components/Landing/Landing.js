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
  // <div className={styles.Landing} style={{overflow:'auto', maxHeight:'100%'}}>
  //  <section id="hero" className='text-center text-sm-start py-3'>
  //    <Container>
  //      <div className='d-flex align-items-center justify-content-center'
  //      style={{display:'flex', flexWrap:'wrap'}}>
  //        <div style={{marginRight: '6%'}}>
  //          <h1>Looking for stuff to do? 
  //            <span className='text-primary'> We can help!</span>
  //            </h1>
  //            <p style={{fontWeight:'500', fontSize:'larger'}}>With AIT Hangouts, you can connect with other students looking
  //              to organize fun outings! <br></br><br></br>From a crazy night out in downtown Budapest to a walk by the Danube River,
  //              you will find all kinds of exciting hangouts here.
  //            </p>
  //            {jwt ? 
  //            <Button onClick={() => navigate('/hangouts')} variant='primary'>Get started!</Button>
  //            :
  //            <Button onClick={() => navigate('/register')} variant='primary'>Get started!</Button>
  //            }
  //        </div>
  //        <img 
  //        className='d-sm-block img-fluid  h-20 w-30 py-2' 
  //        style={{width:'30%'}}
  //        src="hangoutHero.svg"></img>
  //      </div>
  //      </Container>
  //     </section>
  //     <section id="hero" className='text-center text-sm-start py-3'>
  //     <Container>
  //      <div className='d-flex align-items-center justify-content-center'
  //      style={{display:'flex', flexWrap:'wrap'}}>
  //        <div style={{marginRight: '6%'}}>
  //          <h1>Easier than texting
  //            </h1>
  //            <p style={{fontWeight:'500', fontSize:'larger'}}>All you need to do is login, pitch a hangout, and wait for people to reach out!
  //            <br></br>
  //            <span className='text-primary'>It's that simple. We promise.</span>
  //            </p>
  //        </div>
  //        <img 
  //        className='d-sm-block img-fluid h-20 w-30 py-2' 
  //        style={{width:'25%', marginLeft:'14%'}}
  //        src="demo.png"
  //        ></img>
  //      </div>
  //      </Container>
  //       </section>
  //       <section id="hero" className='text-center text-sm-start py-3'>
  //     <Container>
  //      <div className='d-flex align-items-center justify-content-center'
  //      style={{display:'flex', flexWrap:'wrap'}}>
  //        <div style={{marginRight: '6%'}}>
  //          <h1>And the best part? <span className='text-primary'>You get to make new friends!</span>
  //            </h1>
  //            <p style={{fontWeight:'500', fontSize:'larger'}}>Forget about awkward club meetings. This is the new way to meet people on campus.             <br></br>
  //            </p>
  //        </div>
  //        <img 
  //        className='d-sm-block img-fluid h-20 w-30 py-2' 
  //        style={{width:'25%'}}
  //        src="conversation.svg"></img>
  //      </div>
  //      </Container>
  //       </section>
  //       <section id="hero" className='text-center text-sm-start py-3'>
  //     <Container>
  //      <div className='d-flex align-items-center justify-content-center'
  //      style={{display:'flex', flexWrap:'wrap', overflow:'auto'}}>
  //        <div style={{marginRight: '6%'}}>
  //          <h1>Don't believe us? Try it out for yourself.  <span className='text-primary'>It's free :)!</span>
  //            </h1>
  //            {jwt ? 
  //            <Button onClick={() => navigate('/hangouts')} variant='primary'>Browse hangouts!</Button>
  //            :
  //            <Button onClick={() => navigate('/register')} variant='primary'>Sign up!</Button>
  //            }         </div>
  //        <img 
  //        className='d-sm-block img-fluid h-20 w-30 py-2' 
  //        style={{width:'25%'}}
  //        src="demo2.png"></img>
  //      </div>
  //      </Container>
  //       </section>
  // </div>
  <div>
  <section class="mb-20">
  <div class="px-6 py-12 md:px-12 bg-transparent-50 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12 py-4">Looking to make new friends? <br /><span class="text-blue-600">We can help</span></h1>
            <p class="text-gray-500 text-2xl">With AIT Hangouts, you can connect with other students looking
                to organize fun outings! <br></br></p>
            <a class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out landingBtn" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
            <a class="inline-block px-7 py-3 mr-2 bg-teal-400 text text-black text-500 font-medium text-sm leading-snug uppercase rounded shadow-md mt-2 border border-blue-400 hover:bg-white-700 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out landingBtn" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Browse hangouts</a>

          </div>
          <div class="lg:mb-0 d-flex justify-content-center">
            <img
              src="hangoutHero.svg"
              class="lg:w-9/12 w-11/12 rounded-lg "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-20">
  <div class="px-6  md:px-12 bg-transparent-50 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12"><br /><span class="text-blue-600">Easier than texting</span></h1>
            <p class="text-gray-500 text-2xl">
            All you need to do is sign up, pitch a hangout, and wait for people to contact you.
          </p>
          </div>
          <div class="lg:mb-0 d-flex justify-content-center">
            <img
              src="demo.png"
              class="lg:w-9/12 w-10/12 rounded-lg "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-20">
  <div class="px-6 py-12 md:px-12 bg-transparent-50 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-blue-600 text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12">The sky is your limit</h1>
            <p class="text-gray-500 text-2xl">
              Fancy a walk by the river? How about a crazy nightout in the downtown? Maybe a quick gym session?
          </p>
          <p class="text-gray-500 text-2xl">
            No matter what you come up with, you will always find people to hangout with here!
          </p>
          </div>
          <div class="lg:mb-0 d-flex justify-content-center">
            <img
              src="conversation.svg"
              class="lg:w-9/12 w-10/12 rounded-lg "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-20">
  <div class="px-6 py-12 md:px-12 bg-transparent-50 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-5xl md:text-6xl xl:text-6xl font-bold tracking-tight mb-12">Don't believe us?<br /><span class="text-blue-600">Try it out for yourself. It's free!</span></h1>
            <p class="text-gray-500 text-2xl">
            Still not convinced? Check what other students have been up to by clicking on "Browse Hangouts!"
          </p>
            <a class="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out landingBtn" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Sign up</a>
            <a class="inline-block px-7 py-3 mr-2 bg-teal-400 text text-black text-500 font-medium text-sm leading-snug uppercase rounded shadow-md mt-2 border border-blue-400 hover:bg-white-700 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out landingBtn" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Browse hangouts</a>
          </div>
          <div class="lg:mb-0 d-flex d-flex justify-content-center">
            <img
              src="demo2.png"
              class="lg:w-8/12 w-10/12 rounded-lg "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  );
  }

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
