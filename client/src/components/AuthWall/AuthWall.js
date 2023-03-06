import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthWall.module.css';

const AuthWall = () => (
  <div className={styles.AuthWall}>
    Please login or signup to access this page.
  </div>
);

AuthWall.propTypes = {};

AuthWall.defaultProps = {};

export default AuthWall;
