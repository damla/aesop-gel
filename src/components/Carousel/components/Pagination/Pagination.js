import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = ({ dots, theme }) => (
  <div className={styles.base}>
    <ul className={cx(styles.list, styles[theme])}>{dots}</ul>
  </div>
);

Pagination.propTypes = {
  dots: PropTypes.array,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Pagination.defaultProps = {
  dots: undefined,
  theme: 'dark',
};

export default Pagination;
