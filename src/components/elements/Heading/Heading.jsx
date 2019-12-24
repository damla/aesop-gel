import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from './Heading.module.css';

const Heading = ({
  children,
  className = "",
  id = "",
  level,
  noMargin = false,
  noTopMargin = false,
  size = "large",
  useSerifFont = false,
}) => {
  const classNames = cx(
    styles.base,
    { [styles.noTopMargin]: noTopMargin },
    { [styles.noMargin]: noMargin },
    { [styles.serifFont]: useSerifFont },
    styles[size],
    className
  );

  return React.createElement(
    `h${level}`,
    { className: classNames, id },
    children
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string,
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
  noMargin: PropTypes.bool,
  noTopMargin: PropTypes.bool,
  size: PropTypes.oneOf(["xSmall", "small", "medium", "large", "xLarge"]),
  useSerifFont: PropTypes.bool,
  className: PropTypes.string
};

export default Heading;
