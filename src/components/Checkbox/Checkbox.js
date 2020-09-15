import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Checkbox.module.css';

const Checkbox = ({
  className,
  checkboxClassName,
  content,
  contentClassName,
  disabled,
  id,
  name,
  onChange,
  theme,
}) => {
  const baseClassSet = cx(styles.base, className);
  const checkboxClassSet = cx(
    styles.checkBox,
    styles[theme],
    checkboxClassName,
  );
  const contentClassSet = cx(styles.content, styles[theme], contentClassName);

  return (
    <label className={baseClassSet} htmlFor={id}>
      <input
        className={checkboxClassSet}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      <span className={contentClassSet}>{content}</span>
    </label>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checkboxClassName: PropTypes.string,
  content: PropTypes.string.isRequired,
  contentClassName: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Checkbox.defaultProps = {
  className: undefined,
  checkboxClassName: undefined,
  content: undefined,
  contentClassName: undefined,
  disabled: false,
  id: undefined,
  name: undefined,
  onChange: undefined,
  theme: 'dark',
};

export default Checkbox;
