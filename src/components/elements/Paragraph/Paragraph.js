import React from 'react';
import cx from 'classnames';
import Props from './Paragraph.types';
import styles from './Paragraph.module.css';

const Paragraph: React.FunctionComponent<Props> = ({ children, classSet }) => {
  const classSet: string = cx(styles.base, className);

  return <p className={classSet}>{children}</p>;
};

const ParagraphSet: React.FunctionComponent<Props> = ({
  children,
  className,
}) => {
  const classSet: string = cx(styles.set, className);

  return <div className={classSet}>{children}</div>;
};

Paragraph.defaultProps = {};

export { Paragraph as P };
export { ParagraphSet };
export default Paragraph;
