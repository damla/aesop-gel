import React from 'react';
import cx from 'classnames';
// import findIndex from 'lodash/findIndex';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = ({ dots, theme }) => {
  // const progress = findIndex(dots, ['props.className', 'slick-active']);
  // const width = `${100 / dots.length}%`;
  // const positionLeft = `${(100 / dots.length) * progress}%`;

  return (
    <div className={styles.base}>
      <ul className={cx(styles.list, styles[theme])}>{dots}</ul>
    </div>
  );
};

// <div className={cx(styles.list, styles[theme])}>
//   <div className={styles.bar} style={{ width, left: positionLeft }} />
// </div>

Pagination.propTypes = {
  dots: PropTypes.array,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Pagination.defaultProps = {
  dots: undefined,
  theme: 'dark',
};

export default Pagination;
