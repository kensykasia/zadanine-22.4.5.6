import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Navigation.css';

const Navigation = () => {
  return (
    <nav className={styles['main-nav']}>
      <ul>
        <li><Link to="/Home"><FormattedMessage id="siteHome" /></Link></li>
        <li><Link to="/"><FormattedMessage id="sitePosts" /></Link></li>
        <li><Link to="/About"><FormattedMessage id="siteAbout" /></Link></li>
      </ul>
    </nav>
  );
};

 //Navigation.propTypes = {
 //};

export default Navigation;
