import React from 'react';
import cx from 'classnames';
import Props from './DoubleImage.types';
import styles from './DoubleImage.module.css';

const DoubleImage: React.FunctionComponent<Props> = ({
  className,
  id,
  left,
  right,
}) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet} id={id}>
      <div className={styles.wrapper}>
        <div className={styles.item}>{left}</div>
        <div className={styles.item}>{right}</div>
      </div>
    </div>
  );
};

export default DoubleImage;
