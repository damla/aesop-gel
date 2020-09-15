import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';
import cx from 'classnames';

const TextInput = ({
  className,
  defaultValue,
  disabled,
  errorMessage,
  hasContent,
  id,
  inputClassName,
  inputRef,
  label,
  max,
  min,
  name,
  type,
  maxLength,
  novalidate,
  onBlur,
  onChange,
  prefixElement,
  theme,
  value,
  ...moreProps
}) => {
  const dataTestRef = moreProps['data-test-ref'];
  const classNames = cx(styles.formText, className);
  const inputClassNames = cx(
    styles.formTextInput,
    styles[theme],
    (!!defaultValue || hasContent) && styles.hasContent,
    !!errorMessage && styles.hasError,
    inputClassName,
  );
  const labelClassSet = cx(styles.formTextLabel, styles[theme]);

  return (
    <div className={classNames}>
      <label htmlFor={id}>
        <input
          className={inputClassNames}
          data-test-ref={dataTestRef}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          max={max}
          maxLength={maxLength}
          min={min}
          name={name}
          noValidate={novalidate}
          onBlur={onBlur}
          onChange={onChange}
          placeholder=""
          ref={inputRef}
          type={type || 'text'}
          value={value}
        />
        <span className={labelClassSet}>{label}</span>
        {prefixElement}
      </label>
      {errorMessage && (
        <div className={styles.formTextErrorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasContent: PropTypes.bool,
  id: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  inputRef: PropTypes.func,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  novalidate: PropTypes.bool,
  prefixElement: PropTypes.element,
  theme: PropTypes.oneOf(['dark', 'light']),
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'number',
    'tel',
    'search',
  ]),
  'data-test-ref': PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
