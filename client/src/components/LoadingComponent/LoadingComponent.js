import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadingComponent.css';
import Container from  'react-bootstrap/Container';
import ReactLoading from 'react-loading';
const LoadingComponent = () => (
  <div style={{display: 'flex', marginTop:'3%', justifyContent:'center'}}>
     <ReactLoading type='spinningBubbles' color='#000000' height={'10%'} width={'10%'} />
    </div>
);

LoadingComponent.propTypes = {};

LoadingComponent.defaultProps = {};

export default LoadingComponent;
