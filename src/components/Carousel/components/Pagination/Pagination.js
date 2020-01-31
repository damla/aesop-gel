import React from 'react';
import PROP_TYPES from './Pagination.prop-types';
import styles from './Pagination.module.css';

const Pagination = ({ dots }) => (
  <div>
    <ul className={styles.base}>{dots}</ul>
  </div>
);

Pagination.propTypes = PROP_TYPES;

export default Pagination;
