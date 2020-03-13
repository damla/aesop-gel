import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuidv4 from 'uuid/v4';
import styles from './List.module.css';

const List = ({ className, items, listItemClassName, forwardedRef }) => {
  const classSet = cx(styles.base, className);

  return (
    <ul className={classSet} ref={forwardedRef}>
      {items.map(({ content, id = uuidv4() }) => (
        <li className={cx(styles.item, listItemClassName)} key={id}>
          {content}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  items: PropTypes.arrayOf(
    PropTypes.exact({
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
        .isRequired,
      id: PropTypes.string,
    }),
  ).isRequired,
  listItemClassName: PropTypes.string,
};

List.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
  items: undefined,
  listItemClassName: undefined,
};

export default List;
