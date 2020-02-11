import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = ({ dots }) => (
  <div>
    <ul className={styles.base}>{dots}</ul>
  </div>
);

Pagination.propTypes = {
  dots: PropTypes.array,
};

Pagination.defaultProps = {
  dots: undefined,
};

export default Pagination;
