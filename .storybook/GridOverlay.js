import React from 'react';
import cx from 'classnames';
import styles from './GridOverlay.module.css';

const generateColumns = () => {
  const columns = [];

  for (let columnCount = 12; columnCount > 0; columnCount--) {
    columns.push(<li className={styles.column} />);
  }

  return columns;
};

const GridOverlay = ({ isActive = false }) => {
  if (!isActive) return false;

  return (
    <div className={styles.base}>
      <div className={cx(styles.gutter, styles.left)} />
      {generateColumns()}
      <div className={cx(styles.gutter, styles.right)} />
    </div>
  );
};

GridOverlay.propTypes = {};

export default GridOverlay;
