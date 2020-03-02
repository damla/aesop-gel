import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.css';

const Button = ({
  children,
  className,
  dataTestRef,
  hasLightText,
  id,
  isAlternate,
  isEnabled,
  isInline,
  onClick,
  tabIndex,
  title,
  type,
}) => {
  const classSet = cx(
    styles.base,
    styles.action,
    { [styles.alternate]: isAlternate },
    { [styles.blockStyle]: !isInline },
    { [styles.disabled]: !isEnabled },
    { [styles.external]: external },
    { [styles.lightText]: hasLightText },
    { [styles.inlineStyle]: isInline },
    className,
  );

  return (
    <button
      className={classSet}
      data-test-ref={dataTestRef}
      disabled={!isEnabled}
      id={id}
      onClick={onClick}
      tabIndex={tabIndex}
      title={title}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  hasLightText: PropTypes.bool,
  id: PropTypes.string,
  isAlternate: PropTypes.bool,
  isEnabled: PropTypes.bool,
  isInline: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  dataTestRef: undefined,
  hasLightText: undefined,
  id: undefined,
  isAlternate: false,
  isEnabled: true,
  isInline: false,
  onClick: undefined,
  tabIndex: undefined,
  title: undefined,
  type: 'button',
};

export default Button;
