import React from 'react';
import cx from 'classnames';
import { InputType as Props } from '~/types/Control.types';
import { State } from './Input.types';
import styles from './Input.module.css';

class Input extends React.Component<Props, State> {
  static defaultProps = {
    errorMessage: '',
    placeholder: '',
    type: 'text',
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
      onKeyPress,
      placeholder,
      testReference,
      type,
      value,
    } = this.props;

    const { hasFocus } = this.state;

    const classSet: string = cx(
      styles.base,
      {
        // @ts-ignore
        [styles.hasFocus]:
          value ||
          hasFocus ||
          placeholder ||
          type === 'date' ||
          type === 'time',
        [styles.hasError]: errorMessage,
      },
      className,
    );

    return (
      <div className={classSet}>
        <label className={cx(styles.label)} htmlFor={name}>
          {label}
        </label>
        <input
          className={styles.input}
          data-test-ref={testReference}
          id={name}
          name={name}
          onBlur={this.handleBlur}
          onChange={onChange}
          onFocus={this.handleFocus}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        <div
          className={styles.errorMessage}
          data-test-ref={`${testReference}_ERROR`}
        >
          {errorMessage}
        </div>
      </div>
    );
  }

  handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(event);
    }

    this.setState(() => ({
      hasFocus: true,
    }));
  };

  handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(event);
    }

    this.setState(() => ({
      hasFocus: false,
    }));
  };
}

export default Input;
