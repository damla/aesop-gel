import React from 'react';
import cx from 'classnames';
import PROP_TYPES from './Button.prop-types';
import styles from './Button.module.css';

const Button = ({
  alternate = false,
  children,
  className,
  dataTestRef,
  disabled = false,
  hasLightText,
  id,
  inline = false,
  handleClick,
  tabIndex,
  title,
  type = 'button',
}) => {
  const classSet = cx(
    styles.base,
    { [styles.alternate]: alternate },
    { [styles.block]: !inline },
    { [styles.disabled]: disabled },
    { [styles.external]: external },
    { [styles.hasLightText]: hasLightText },
    { [styles.inline]: inline },
    className,
  );

  return (
    <button
      className={cx(classSet, styles.action)}
      data-test-ref={dataTestRef}
      disabled={disabled}
      id={id}
      onClick={handleClick}
      tabIndex={tabIndex}
      title={title}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = PROP_TYPES;

export default Button;
