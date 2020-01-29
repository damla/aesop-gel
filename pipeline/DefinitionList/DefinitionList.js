import React from 'react';
import cx from 'classnames';
import PROP_TYPES from './DefinitionList.prop-types';
import styles from './DefinitionList.module.css';

const DefinitionList = ({ className, items = [] }) => {
  const classSet = cx(styles.base, className);

  if (items.length === 0) {
    return null;
  }

  return (
    <dl className={classSet}>
      {items
        .filter(({ description, term }) => description && term)
        .map(({ description, term }, index) => (
          <React.Fragment key={index}>
            <dt className={styles.term}>{term}</dt>
            <dd className={styles.description}>{description}</dd>
          </React.Fragment>
        ))}
    </dl>
  );
};

DefinitionList.propTypes = PROP_TYPES;

export default DefinitionList;
