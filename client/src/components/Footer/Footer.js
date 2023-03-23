import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.css';
import { MDBFooter } from 'mdb-react-ui-kit';


const Footer = () => (
  <>
<footer  style={{display:'flex', justifyContent:'center', textAlign:'center'}} class="bottom-0 left-0 z-20 w-full p-2 bg-white-100 items-center justify-between p-6">
    <div style={{display:'flex', justifyContent:'center', textAlign:'center'}} class="text-sm text-gray-700 text-bold text-center dark:text-gray-600">Made with ♡ by Ahmed Laban, UPenn '24
    </div>
        </footer>
        </>

);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
