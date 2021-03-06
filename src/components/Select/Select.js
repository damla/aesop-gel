import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '~/components/Icon';
import cx from 'classnames';
import styles from './Select.module.css';

const Select = ({
  className,
  dataTestRef,
  errorMessage,
  isBlock,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  options,
  theme,
  value,
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const classSet = cx(
    styles.base,
    {
      [styles.hasFocus]: value || hasFocus,
    },
    { [styles.hasError]: errorMessage },
    styles[theme],
    className,
  );

  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }

    setHasFocus(true);
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }

    setHasFocus(false);
  };

  return (
    <div className={classSet}>
      <label className={cx(styles.label)} htmlFor={name}>
        {label}
      </label>
      <select
        className={cx(styles.input, { [styles.isBlock]: isBlock })}
        data-test-ref={dataTestRef}
        id={name}
        name={name}
        onBlur={handleBlur}
        onChange={onChange}
        onFocus={handleFocus}
        value={value}
      >
        {label && <option value="" />}
        {options.map(({ id, label: optionLabel, value: optionValue }) => (
          <option key={id || optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
      <Icon
        className={styles.icon}
        height={15}
        name="chevron"
        theme={theme}
        width={15}
      />
      <div className={styles.errorMessage}>{errorMessage}</div>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  errorMessage: PropTypes.string,
  isBlock: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  theme: PropTypes.oneOf(['dark', 'light']),
  value: PropTypes.string,
};

Select.defaultProps = {
  className: undefined,
  dataTestRef: undefined,
  errorMessage: '',
  isBlock: false,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  options: [],
  theme: 'dark',
  value: undefined,
};

export default Select;
