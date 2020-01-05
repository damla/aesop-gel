import React from 'react';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import Props from './List.types';
import styles from './List.module.css';

const List: React.FunctionComponent<Props> = ({
  classSet,
  items,
  listItemClassSet,
}) => {
  const className: string = cx(styles.base, classSet);

  return (
    <ul className={className}>
      {items.map(({ content, id = uuidv4() }) => (
        <li className={cx(styles.item, listItemClassSet)} key={id}>
          {content}
        </li>
      ))}
    </ul>
  );
};

export default List;
