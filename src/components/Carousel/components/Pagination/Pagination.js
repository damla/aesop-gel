import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = ({ dots, hasFlushPagination, progressIndex, theme }) => {
  const width = `${100 / dots.length}%`;
  const positionLeft = `${(100 / dots.length) * progressIndex}%`;

  return (
    <div className={styles.base}>
      <div
        className={cx(
          styles.list,
          { [styles.flush]: hasFlushPagination },
          styles[theme],
        )}
      >
        <div className={styles.bar} style={{ width, left: positionLeft }} />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  dots: PropTypes.array,
  hasFlushPagination: PropTypes.bool,
  progressIndex: PropTypes.number,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Pagination.defaultProps = {
  dots: undefined,
  hasFlushPagination: false,
  progressIndex: 0,
  theme: 'dark',
};

export default Pagination;
