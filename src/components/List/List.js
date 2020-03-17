import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './List.module.css';

const List = ({ className, items, listItemClassName, forwardedRef, theme }) => {
  const classSet = cx(styles.base, styles[theme], className);

  return (
    <ul className={classSet} ref={forwardedRef}>
      {items.map(({ content, id }) => (
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
    PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
        .isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  listItemClassName: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

List.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
  items: undefined,
  listItemClassName: undefined,
  theme: 'dark',
};

export default List;
