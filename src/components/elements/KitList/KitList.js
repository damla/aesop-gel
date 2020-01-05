import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import List from '~/components/elements/List';
import Props from './KitList.types';
import styles from './KitList.module.css';

const KitList: FunctionComponent<Props> = ({ items, classSet }) => {
  const classSet: string = cx(styles.base, className);

  return (
    <List
      className={className}
      items={items.map((item: string) => ({ content: item }))}
      listItemclassName={styles.item}
    />
  );
};

KitList.defaultProps = {};

export default KitList;
