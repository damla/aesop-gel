import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import List from '~/components/List';
import styles from './KitList.module.css';

const KitList = ({ items, className }) => {
  const classSet = cx(styles.base, className);

  return (
    <List
      className={classSet}
      items={items.map(item => ({ content: item }))}
      listItemClassName={styles.item}
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
