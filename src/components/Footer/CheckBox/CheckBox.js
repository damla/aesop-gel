import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './CheckBox.module.css';

const CheckBox = ({ className, content, disabled, onChange }) => {
  const baseClassSet = cx(styles.base, className);
  const checkboxClassSet = cx(styles.checkBox, className);
  const contentClassSet = cx(styles.content, className);

  return (
    <div className={baseClassSet}>
      <input
        className={checkboxClassSet}
        disabled={disabled}
        onChange={onChange}
        type="checkbox"
      />
      <div className={contentClassSet}>{content}</div>
    </div>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  className: undefined,
  content: undefined,
  disabled: false,
  onChange: undefined,
};

export default CheckBox;
