import React from 'react';
import cx from 'classnames';
import PROP_TYPES from './FormRow.prop-types';
import styles from './FormRow.module.css';

const FormRow = ({ children, className }) => {
  const classSet = cx(styles.base, className);

  return <div className={classSet}>{children}</div>;
};

FormRow.propTypes = PROP_TYPES;

export default FormRow;
