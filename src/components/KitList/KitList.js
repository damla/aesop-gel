import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks/useOnScreen';
import List from '~/components/List';
import styles from './KitList.module.css';

const KitList = ({ items, className }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-20px');
  const classSet = cx(styles.base, className);
  const listItemClassSet = cx(styles.item, { [styles.slideIn]: onScreen });

  return (
    <List
      className={classSet}
      forwardedRef={ref}
      items={items.map(item => ({ content: item }))}
      listItemClassName={listItemClassSet}
    />
  );
};

KitList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

KitList.defaultProps = {
  className: undefined,
  items: undefined,
};

export default KitList;
