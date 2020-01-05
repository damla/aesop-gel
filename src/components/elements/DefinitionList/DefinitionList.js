import React from 'react';
import cx from 'classnames';
import Props from './DefinitionList.types';
import styles from './DefinitionList.module.css';

const DefinitionList: React.FunctionComponent<Props> = ({
  className,
  items,
}) => {
  const classSet: string = cx(styles.base, className);

  return (
    <dl className={classSet}>
      {items
        .filter(({ description, term }) => description && term)
        .map(({ description, term }, index) => (
          <React.Fragment key={index}>
            <dt className={styles.term}>{term}</dt>
            <dd className={styles.description}>{description}</dd>
          </>
        ))}
    </dl>
  );
};

DefinitionList.defaultProps = {
  items: [],
};

export default DefinitionList;
