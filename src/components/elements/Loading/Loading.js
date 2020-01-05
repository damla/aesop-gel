import React from 'react';
import cx from 'classnames';
import Props from './Loading.types';
import styles from './Loading.module.css';

const Loading: React.FunctionComponent<Props> = ({
  className,
  isLight,
  isLoading,
  small,
}) => {
  const classSet: string = cx(
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

Loading.defaultProps = {
  isLight: false,
  small: false,
};

export default Loading;
