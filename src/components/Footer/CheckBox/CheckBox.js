import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './CheckBox.module.css';

const CheckBox = ({ className, content, disabled, name, onChange }) => {
  const baseClassSet = cx(styles.base, className);
  const checkboxClassSet = cx(styles.checkBox, className);
  const contentClassSet = cx(styles.content, className);

  return (
    <label className={baseClassSet} htmlFor={name}>
      <input
        className={checkboxClassSet}
        disabled={disabled}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      <span className={contentClassSet}>{content}</span>
    </label>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  className: undefined,
  content: undefined,
  disabled: false,
  name: undefined,
  onChange: undefined,
};

export default CheckBox;
