import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames';
import Props from './DefinitionList.types';
import styles from './DefinitionList.module.css';

const DefinitionList: React.FunctionComponent<Props> = ({
  classSet,
  items,
}) => {
  const className: string = cx(styles.base, classSet);

  return (
    <dl className={className}>
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

DefinitionList.defaultProps = {
  items: [],
};

export default DefinitionList;
