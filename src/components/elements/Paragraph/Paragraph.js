import React from 'react';
import cx from 'classnames';
import Props from './Paragraph.types';
import styles from './Paragraph.module.css';

const Paragraph: React.FunctionComponent<Props> = ({ children, classSet }) => {
  const className: string = cx(styles.base, classSet);

  return <p className={className}>{children}</p>;
};

const ParagraphSet: React.FunctionComponent<Props> = ({
  children,
  classSet,
}) => {
  const className: string = cx(styles.set, classSet);

  return <div className={className}>{children}</div>;
};

Paragraph.defaultProps = {};

export { Paragraph as P };
export { ParagraphSet };
export default Paragraph;
