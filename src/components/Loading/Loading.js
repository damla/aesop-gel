import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Loading.module.css';

const Loading = ({ className, isLight, isLoading, small }) => {
  const classSet = cx(
    styles.base,
    {
      [styles.light]: isLight,
      [styles.isLoading]: isLoading,
      [styles.small]: small,
    },
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
  isLight: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  small: PropTypes.bool,
};

Loading.defaultProps = {
  className: undefined,
  isLight: false,
  isLoading: undefined,
  small: false,
};

export default Loading;
