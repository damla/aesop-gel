import React from 'react';
import cx from 'classnames';
import PROP_TYPES from './RegionSelector.prop-types';
import styles from './RegionSelector.module.css';

const RegionSelector = ({ children, className }) => {
  const classSet = cx(styles.base, className);

  return <div className={classSet}>{children}</div>;
};

RegionSelector.propTypes = PROP_TYPES;

export default RegionSelector;
