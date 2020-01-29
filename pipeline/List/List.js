import React from 'react';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import PROP_TYPES from './List.prop-types';
import styles from './List.module.css';

const List = ({ className, items, listItemClassName }) => {
  const classSet = cx(styles.base, className);

  return (
    <ul className={classSet}>
      {items.map(({ content, id = uuidv4() }) => (
        <li className={cx(styles.item, listItemClassName)} key={id}>
          {content}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = PROP_TYPES;

export default List;
