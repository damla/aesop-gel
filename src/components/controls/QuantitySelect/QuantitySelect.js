import React from 'react';
import cx from 'classnames';
import Icon from '~/components/elements/Icon';
import styles from './QuantitySelect.module.css';

const QuantitySelect = ({
  className,
  disabled,
  name,
  onChange,
  value,
  testReference,
  options,
}) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <select
        className={styles.input}
        data-test-ref={testReference}
        disabled={disabled}
        name={name}
        onBlur={onChange}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
        value={String(value)}
      >
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
      <Icon
        className={styles.icon}
        height={10}
        name="downArrow"
        tabIndex={-1}
        width={10}
      />
    </div>
  );
};

QuantitySelect.defaultProps = {
  disabled: false,
};

export default QuantitySelect;
