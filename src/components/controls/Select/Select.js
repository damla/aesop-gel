import React from 'react';
import cx from 'classnames';
import { SelectType as Props } from '~/types/Control.types';
import { State } from './Select.types';
import styles from './Select.module.css';

class Select extends React.Component<Props, State> {
  static defaultProps = {
    errorMessage: '',
  };

  state: State = {
    hasFocus: false,
  };

  render() {
    const {
      className,
      errorMessage,
      label,
      name,
      onChange,
      value,
      testReference,
      options,
    } = this.props;

    const { hasFocus } = this.state;
    const classSet: string = cx(
      styles.base,
      {
        [styles.hasFocus]: value || hasFocus,
        [styles.hasError]: errorMessage,
      },
      className,
    );

    return (
      <div className={classSet}>
        <label className={cx(styles.label)} htmlFor={name}>
          {label}
        </label>
        <select
          className={styles.input}
          data-test-ref={testReference}
          id={name}
          name={name}
          onBlur={this.handleBlur}
          onChange={onChange}
          onFocus={this.handleFocus}
          value={value}
        >
          <option value="" />
          {options.map(({ label: optionLabel, value: optionValue }) => (
            <option key={optionValue} value={optionValue}>
              {optionLabel}
            </option>
          ))}
        </select>
        <div className={styles.errorMessage}>{errorMessage}</div>
      </div>
    );
  }

  handleFocus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(event);
    }

    this.setState(() => ({
      hasFocus: true,
    }));
  };

  handleBlur = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(event);
    }

    this.setState(() => ({
      hasFocus: false,
    }));
  };
}

export default Select;
