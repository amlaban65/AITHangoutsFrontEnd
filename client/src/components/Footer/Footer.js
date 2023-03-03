import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';
import { MDBFooter } from 'mdb-react-ui-kit';


const Footer = () => (
  <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{marginTop:'12%'}}>
  <div className='text-center p-4 bg-light'>
    Made with ❤ by Ahmed Laban, UPenn Class of '24</div>
  </MDBFooter>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
