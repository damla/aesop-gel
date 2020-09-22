import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './NavigationBar.module.css';

const NavigationBar = ({ className }) => {
  const classSet = cx(styles.base, className);

  return <div className={classSet}>Test</div>;
};

NavigationBar.propTypes = {
  className: PropTypes.string,
};

NavigationBar.defaultProps = {
  className: undefined,
};

export default NavigationBar;
