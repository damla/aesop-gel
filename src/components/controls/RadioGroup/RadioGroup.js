import React from 'react';
import cx from 'classnames';
import { RadioGroupType } from '~/types/Control.types';
// @ts-ignore
import styles from './RadioGroup.module.css';

const RadioGroup: React.FunctionComponent<RadioGroupType> = ({
  className,
  errorMessage,
  name,
  onChange,
  options,
  testReference,
  value,
}) => {
  const classSet = cx(
    styles.base,
    {
      [styles.hasError]: errorMessage,
    },
    className,
  );

  return (
    <ul className={classSet}>
      {options.map(({ label: optionLabel, value: optionValue }) => (
        <li className={styles.radio} key={optionValue}>
          <label className={cx(styles.label)} htmlFor={`option-${optionValue}`}>
            <input
              aria-checked={optionValue === value}
              checked={optionValue === value}
              className={styles.input}
              data-test-ref={testReference}
              id={`option-${optionValue}`}
              name={name}
              onChange={onChange}
              tabIndex={0}
              type="radio"
              value={optionValue}
            />
            <span className={styles.pot} />
            <span className={cx(styles.labelContent)}>{optionLabel}</span>
          </label>
        </li>
      ))}
      <div className={styles.errorMessage}>{errorMessage}</div>
    </ul>
  );
};

RadioGroup.defaultProps = {
  errorMessage: '',
};

export default RadioGroup;
