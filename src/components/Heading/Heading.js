import React from 'react';
import cx from 'classnames';
import PROP_TYPES from './Heading.prop-types';
import styles from './Heading.module.css';

const Heading = ({
  children,
  className,
  id = '',
  level,
  noMargin = false,
  noTopMargin = false,
  size,
  useSerifFont = false,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.noTopMargin]: noTopMargin },
    { [styles.noMargin]: noMargin },
    { [styles.serifFont]: useSerifFont },
    styles[size],
    className,
  );

  return React.createElement(
    `h${level}`,
    { className: classSet, id },
    children,
  );
};

Heading.propTypes = PROP_TYPES;

export default Heading;
