import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Heading.module.css';

const Heading = ({
  children,
  className,
  id,
  level,
  isFlush,
  hasTopMargin,
  size,
  hasSerifFont,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.noTopMargin]: !hasTopMargin },
    { [styles.noMargin]: isFlush },
    { [styles.serifFont]: hasSerifFont },
    styles[size],
    className,
  );

  return React.createElement(
    `h${level}`,
    { className: classSet, id },
    children,
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  hasTopMargin: PropTypes.bool,
  id: PropTypes.string,
  isFlush: PropTypes.bool,
  hasSerifFont: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large', 'xLarge'])
    .isRequired,
};

Heading.defaultProps = {
  children: undefined,
  className: undefined,
  hasTopMargin: true,
  id: undefined,
  isFlush: false,
  hasSerifFont: false,
  level: undefined,
  size: undefined,
};

export default Heading;
