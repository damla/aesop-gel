import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isObjectPopulatedArray } from '~/utils/objects';
import { useOnScreen } from '~/customHooks/useOnScreen';
import styles from './DefinitionList.module.css';

const DefinitionList = ({ className, items, theme }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-20px');
  const classSet = cx(styles.base, styles[theme], className);
  const termClassSet = cx(styles.term, { [styles.slideIn]: onScreen });
  const descriptionClassSet = cx(styles.description, {
    [styles.slideIn]: onScreen,
  });

  if (!isObjectPopulatedArray(items)) {
    return null;
  }

  return (
    <dl className={classSet} ref={ref}>
      {items
        .filter(({ description, term }) => description && term)
        .map(({ description, id, term }) => (
          <React.Fragment key={id}>
            <dt className={termClassSet}>{term}</dt>
            <dd className={descriptionClassSet}>{description}</dd>
          </React.Fragment>
        ))}
    </dl>
  );
};

DefinitionList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      term: PropTypes.string.isRequired,
    }),
  ),
  theme: PropTypes.oneOf(['dark', 'light']),
};

DefinitionList.defaultProps = {
  className: undefined,
  items: undefined,
  theme: 'dark',
};

export default DefinitionList;
