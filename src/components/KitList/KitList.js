import React from 'react';
import cx from 'classnames';
import List from '~/components/List';
import PROP_TYPES from './KitList.prop-types';
import styles from './KitList.module.css';

const KitList = ({ items, className }) => {
  const classSet = cx(styles.base, className);

  return (
    <List
      className={classSet}
      items={items.map(item => ({ content: item }))}
      listItemClassName={styles.item}
    />
  );
};

KitList.propTypes = PROP_TYPES;

export default KitList;
