import React from 'react';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import Props from './List.types';
import styles from './List.module.css';

const List: React.FunctionComponent<Props> = ({
  className,
  items,
  listItemclassName,
}) => {
  const classSet: string = cx(styles.base, className);

  return (
    <ul className={classSet}>
      {items.map(({ content, id = uuidv4() }) => (
        <li className={cx(styles.item, listItemClassSet)} key={id}>
          {content}
        </li>
      ))}
    </ul>
  );
};

export default List;
