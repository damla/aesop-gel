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
  value,
  ...moreProps
}) => {
  const dataTestRef = moreProps['data-test-ref'];
  const classNames = cx(styles.formText, className);
  const inputClassNames = cx(
    styles.formTextInput,
    (!!defaultValue || hasContent) && styles.hasContent,
    !!errorMessage && styles.hasError,
    inputClassName,
  );

  return (
    <div className={classNames}>
      <label htmlFor={id}>
        <input
          className={inputClassNames}
          data-test-ref={dataTestRef}
          defaultValue={defaultValue}
          id={id}
          disabled={disabled}
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
        <span className={styles.formTextLabel}>{label}</span>
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
  id: PropTypes.string,
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
