import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Textarea.css';

const Textarea = ({
  className,
  defaultValue,
  disabled,
  id,
  inputRef,
  maxLength,
  name,
  onBlur,
  onChange,
  rows,
  termBoxClassName,
  theme,
  value,
}) => {
  const baseClassSet = cx(styles.base, styles[theme], className);
  const termBoxClassSet = cx(styles.term, styles[theme], termBoxClassName);
  return (
    <label htmlFor={id}>
      <div className={baseClassSet}>
        <textarea
          className={termBoxClassSet}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={inputRef}
          rows={rows}
          value={value}
        />
      </div>
    </label>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inputRef: PropTypes.func,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  termBoxClassName: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  theme: PropTypes.oneOf(['dark', 'light']),
  value: PropTypes.string,
};

Textarea.defaultProps = {
  className: undefined,
  defaultValue: undefined,
  disabled: false,
  id: undefined,
  inputRef: undefined,
  maxLength: undefined,
  name: undefined,
  termBoxClassName: undefined,
  onBlur: undefined,
  onChange: undefined,
  rows: undefined,
  theme: 'dark',
  value: undefined,
};

export default Textarea;
