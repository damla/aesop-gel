import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import List from '~/components/elements/List';
import Props from './KitList.types';
import styles from './KitList.module.css';

const KitList: FunctionComponent<Props> = ({ items, classSet }) => {
  const className: string = cx(styles.base, classSet);

  return (
    <List
      classSet={className}
      items={items.map((item: string) => ({ content: item }))}
      listItemClassSet={styles.item}
    />
  );
};

KitList.defaultProps = {};

export default KitList;
