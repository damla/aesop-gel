import React from 'react';
import cx from 'classnames';
import Props from './Loading.types';
import styles from './Loading.module.css';

const Loading: React.FunctionComponent<Props> = ({
  classSet,
  isLight,
  isLoading,
  small,
}) => {
  const className: string = cx(
    styles.base,
    {
      [styles.light]: isLight,
      [styles.isLoading]: isLoading,
      [styles.small]: small,
    },
    classSet,
  );

  return (
    <span className={className}>
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
