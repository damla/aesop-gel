import React from 'react';
import cx from 'classnames';
import Props from './FormRow.types';
import styles from './FormRow.module.css';

const FormRow: React.FunctionComponent<Props> = ({ children, classSet }) => {
  const classSet: string = cx(styles.base, className);

  return <div className={classSet}>{children}</div>;
};

export default FormRow;
