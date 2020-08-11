import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Heading.module.css';

const Heading = ({
  children,
  className,
  hasMediumWeightFont,
  hasSerifFont,
  hasTopMargin,
  id,
  isFlush,
  level,
  size,
  theme,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.noTopMargin]: !hasTopMargin },
    { [styles.noMargin]: isFlush },
    { [styles.serifFont]: hasSerifFont },
    { [styles.mediumWeightFont]: hasMediumWeightFont },
    styles[size],
    styles[theme],
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
  hasMediumWeightFont: PropTypes.bool,
  hasSerifFont: PropTypes.bool,
  hasTopMargin: PropTypes.bool,
  id: PropTypes.string,
  isFlush: PropTypes.bool,
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  size: PropTypes.oneOf([
    'xXSmall',
    'xSmall',
    'small',
    'medium',
    'large',
    'xLarge',
  ]).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Heading.defaultProps = {
  children: undefined,
  className: undefined,
  hasMediumWeightFont: false,
  hasSerifFont: false,
  hasTopMargin: true,
  id: undefined,
  isFlush: false,
  level: undefined,
  size: undefined,
  theme: 'dark',
};

export default Heading;
