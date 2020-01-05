import React from 'react';
import cx from 'classnames';
import Props from './Hidden.types';
import styles from './Hidden.module.css';

const Hidden: React.FunctionComponent<Props> = ({
  children,
  classSet,
  large,
  medium,
  small,
  visuallyHidden,
  xLarge,
}) => {
  const className: string = cx(
    {
      [styles.small]: small,
      [styles.medium]: medium,
      [styles.large]: large,
      [styles.xLarge]: xLarge,
      [styles.hidden]: !visuallyHidden && (small || medium || large || xLarge),
      [styles.visuallyHidden]: visuallyHidden,
    },
    classSet,
  );

  /** @TODO attempt to get this working to avoid style only `div`s*/
  // return (
  //   @ts-ignore
  //   <React.Fragment>{React.cloneElement(children, { className, classSet: className })}</React.Fragment>
  // );

  return <div className={className}>{children}</div>;
};

Hidden.defaultProps = {
  large: false,
  medium: false,
  small: false,
  visuallyHidden: false,
  xLarge: false,
};

export default Hidden;
