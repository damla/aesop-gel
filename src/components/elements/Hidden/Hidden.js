import React from 'react';
import cx from 'classnames';
import PROP_TYPES from './Hidden.prop-types';
import styles from './Hidden.module.css';

const Hidden = ({
  children,
  className,
  large = false,
  medium = false,
  small = false,
  visuallyHidden = false,
  xLarge = false,
}) => {
  const classSet = cx(
    {
      [styles.small]: small,
      [styles.medium]: medium,
      [styles.large]: large,
      [styles.xLarge]: xLarge,
      [styles.hidden]: !visuallyHidden && (small || medium || large || xLarge),
      [styles.visuallyHidden]: visuallyHidden,
    },
    className,
  );

  /** @TODO attempt to get this working to avoid style only `div`s*/
  // return (
  //   <>{React.cloneElement(children, { className, classSet: className })}</>
  // );

  return <div className={classSet}>{children}</div>;
};

Hidden.propTypes = PROP_TYPES;

export default Hidden;
