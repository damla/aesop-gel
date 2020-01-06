import React from 'react';
import cx from 'classnames';
import PROP_TYPES from './Loading.prop-types';
import styles from './Loading.module.css';

const Loading = ({ className, isLight = false, isLoading, small = false }) => {
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

Loading.propTypes = PROP_TYPES;

export default Loading;
