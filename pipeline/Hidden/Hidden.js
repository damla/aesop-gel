import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Hidden.module.css';

const Hidden = ({
  children,
  className,
  isLarge,
  isMedium,
  isSmall,
  isVisuallyHidden,
  isXLarge,
}) => {
  const classSet = cx(
    {
      [styles.small]: isSmall,
      [styles.medium]: isMedium,
      [styles.large]: isLarge,
      [styles.xLarge]: isXLarge,
      [styles.hidden]:
        !isVisuallyHidden && (isSmall || isMedium || isLarge || isXLarge),
      [styles.visuallyHidden]: isVisuallyHidden,
    },
    className,
  );

  return <div className={classSet}>{children}</div>;
};

Hidden.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isLarge: PropTypes.bool,
  isMedium: PropTypes.bool,
  isSmall: PropTypes.bool,
  isVisuallyHidden: PropTypes.bool,
  isXLarge: PropTypes.bool,
};

Hidden.defaultProps = {
  children: undefined,
  className: undefined,
  isLarge: false,
  isMedium: false,
  isSmall: false,
  isVisuallyHidden: false,
  isXLarge: false,
};

export default Hidden;
