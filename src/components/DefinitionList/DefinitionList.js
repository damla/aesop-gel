import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isObjectPopulatedArray } from '~/utils/objects';
import styles from './DefinitionList.module.css';

const DefinitionList = ({ className, items }) => {
  const classSet = cx(styles.base, className);

  if (!isObjectPopulatedArray(items)) {
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

DefinitionList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      term: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

DefinitionList.defaultProps = {
  className: undefined,
  items: undefined,
};

export default DefinitionList;
