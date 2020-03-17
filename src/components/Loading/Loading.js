import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Loading.module.css';

const Loading = ({ className, isLoading, small, theme }) => {
  const classSet = cx(
    styles.base,
    {
      [styles.isLoading]: isLoading,
      [styles.small]: small,
    },
    styles[theme],
    className,
  );

  return (
    <span className={classSet}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </span>
  );
};

Loading.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  small: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Loading.defaultProps = {
  className: undefined,
  isLoading: undefined,
  small: false,
  theme: 'dark',
};

export default Loading;
