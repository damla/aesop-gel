import React from 'react';
import cx from 'classnames';
import styles from './Checkbox.module.css';

class Checkbox extends React.Component {
  static defaultProps = {
    checked: false,
    errorMessage: '',
    type: 'text',
  };

  state = {
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

  handleFocus = (event) => {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(event);
    }

    this.setState(() => ({
      hasFocus: true,
    }));
  };

  handleBlur = (event) => {
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
