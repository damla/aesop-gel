import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getPropTypeOptionValues } from '~/utils/propTypes';
import styles from './Button.module.css';

const Button = ({
  children,
  className,
  dataTestRef,
  handleClick,
  hasLightText,
  id,
  isAlternate = false,
  isEnabled = true,
  isInline = false,
  tabIndex = undefined,
  title = undefined,
  type = 'button',
}) => {
  const classSet = cx(
    styles.base,
    { [styles.alternate]: isAlternate },
    { [styles.block]: !isInline },
    { [styles.disabled]: !isEnabled },
    { [styles.external]: external },
    { [styles.lightText]: hasLightText },
    { [styles.inline]: isInline },
    className,
  );

  return (
    <button
      className={cx(classSet, styles.action)}
      data-test-ref={dataTestRef}
      disabled={!isEnabled}
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

Button.defaultProps = {
  children: undefined,
  className: undefined,
  dataTestRef: undefined,
  handleClick: undefined,
  hasLightText: undefined,
  id: undefined,
  isAlternate: false,
  isEnabled: true,
  isInline: false,
  tabIndex: undefined,
  title: undefined,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  handleClick: PropTypes.func,
  hasLightText: PropTypes.bool,
  id: PropTypes.string,
  isAlternate: PropTypes.bool,
  isEnabled: PropTypes.bool,
  isInline: PropTypes.bool,
  tabIndex: PropTypes.number,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
