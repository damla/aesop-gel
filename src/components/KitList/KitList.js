import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks/useOnScreen';
import List from '~/components/List';
import styles from './KitList.module.css';

const KitList = ({ items, className, theme }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref, '-20px');
  const classSet = cx(styles.base, styles[theme], className);
  const listItemClassSet = cx(styles.item, { [styles.slideIn]: isOnScreen });

  return (
    <List
      className={classSet}
      forwardedRef={ref}
      items={items}
      listItemClassName={listItemClassSet}
      theme={theme}
    />
  );
};

KitList.propTypes = {
  className: PropTypes.string,
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
  items: undefined,
  theme: 'dark',
};

export default KitList;
