import React from 'react';
import cx from 'classnames';
import PROP_TYPES, { PARAGRAPH_SET_PROP_TYPES } from './Paragraph.prop-types';
import styles from './Paragraph.module.css';

const Paragraph = ({ children, className }) => {
  const classSet = cx(styles.base, className);

  return <p className={classSet}>{children}</p>;
};

Paragraph.propTypes = PROP_TYPES;

const ParagraphSet = ({ children, className }) => {
  const classSet = cx(styles.set, className);

  return <div className={classSet}>{children}</div>;
};

ParagraphSet.propTypes = PARAGRAPH_SET_PROP_TYPES;

export { Paragraph as P };
export { ParagraphSet };
export default Paragraph;
