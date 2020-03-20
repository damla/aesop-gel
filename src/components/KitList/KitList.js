import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import List from '~/components/List';
import styles from './KitList.module.css';

const KitList = ({ className, forwardedRef, isVisible, items, theme }) => {
  const classSet = cx(styles.base, styles[theme], className);
  const listItemClassSet = cx(styles.item, { [styles.slideIn]: isVisible });

  return (
    <List
      className={classSet}
      forwardedRef={forwardedRef}
      items={items}
      listItemClassName={listItemClassSet}
      theme={theme}
    />
  );
};

KitList.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  isVisible: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
        .isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

KitList.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
  isVisible: true,
  items: undefined,
  theme: 'dark',
};

export default KitList;
