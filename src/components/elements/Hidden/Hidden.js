import React from 'react';
import cx from 'classnames';
import Props from './Hidden.types';
import styles from './Hidden.module.css';

const Hidden: React.FunctionComponent<Props> = ({
  children,
  className,
  large,
  medium,
  small,
  visuallyHidden,
  xLarge,
}) => {
  const classSet: string = cx(
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
  //   @ts-ignore
  //   <>{React.cloneElement(children, { className, classSet: className })}</>
  // );

  return <div className={classSet}>{children}</div>;
};

Hidden.defaultProps = {
  large: false,
  medium: false,
  small: false,
  visuallyHidden: false,
  xLarge: false,
};

export default Hidden;
