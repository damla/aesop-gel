import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Paragraph.module.css';

const Paragraph = ({ children, className }) => {
  const classSet = cx(styles.base, className);

  return <p className={classSet}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  children: undefined,
  className: undefined,
};

const ParagraphSet = ({ children, className }) => {
  const classSet = cx(styles.set, className);

  return <div className={classSet}>{children}</div>;
};

ParagraphSet.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

ParagraphSet.defaultProps = {
  children: undefined,
  className: undefined,
};

export { Paragraph as P };
export { ParagraphSet };
export default Paragraph;
