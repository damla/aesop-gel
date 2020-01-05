import React from 'react';
import cx from 'classnames';
import Props from './FormRow.types';
import styles from './FormRow.module.css';

const FormRow: React.FunctionComponent<Props> = ({ children, classSet }) => {
  const className: string = cx(styles.base, classSet);

  return <div className={className}>{children}</div>;
};

export default FormRow;
