import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Paragraph.module.css';

const Paragraph = ({ children, className, theme }) => {
  const classSet = cx(styles.base, styles[theme], className);

  return <p className={classSet}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Paragraph.defaultProps = {
  children: undefined,
  className: undefined,
  theme: 'dark',
};

const ParagraphSet = ({ children, className, theme }) => {
  const classSet = cx(styles.set, styles[theme], className);

  return <div className={classSet}>{children}</div>;
};

ParagraphSet.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ParagraphSet.defaultProps = {
  children: undefined,
  className: undefined,
  theme: 'dark',
};

export { Paragraph as P };
export { ParagraphSet };
export default Paragraph;
