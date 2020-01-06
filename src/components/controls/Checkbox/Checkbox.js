import React from 'react';
import cx from 'classnames';
import { CheckboxType as Props } from '~/types/Control.types';
import { State } from './Checkbox.types';
import styles from './Checkbox.module.css';

class Checkbox extends React.Component<Props, State> {
  static defaultProps = {
    checked: false,
    errorMessage: '',
    type: 'text',
  };

  state: State = {
    hasFocus: false,
  };

  render() {
    const {
      checked,
      className,
      errorMessage,
      label,
      name,
      onChange,
      testReference,
    } = this.props;

    const { hasFocus } = this.state;

    const classSet = cx(
      styles.base,
      {
        [styles.hasFocus]: hasFocus,
        [styles.hasError]: errorMessage,
      },
      className,
    );

    return (
      <div className={classSet}>
        <input
          checked={checked}
          className={styles.input}
          data-test-ref={testReference}
          id={name}
          name={name}
          onBlur={this.handleBlur}
          onChange={onChange}
          onFocus={this.handleFocus}
          type="checkbox"
        />
        <label className={cx(styles.label)} htmlFor={name}>
          {label}
        </label>
        <div className={styles.errorMessage}>{errorMessage}</div>
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

export default Checkbox;
