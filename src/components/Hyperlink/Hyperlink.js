import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  // checkIsInlineFromStyle,
  // getButtonPropsFromStyle,
  getTargetType,
  // hasIconFromStyle,
} from './Hyperlink.utils';
import styles from './Hyperlink.module.css';

const Hyperlink = ({
  children,
  className,
  dataTestRef,
  hasTargetInNewWindow,
  // style,
  title,
  url,
}) => {
  const classSet = cx(styles.base, className);
  // const inline = checkIsInlineFromStyle(style);
  // const hasIcon = hasIconFromStyle(style);
  const target = getTargetType(hasTargetInNewWindow);

  return (
    <a
      className={classSet}
      data-test-ref={dataTestRef}
      href={url}
      target={target}
      title={title}
    >
      {children}
    </a>
  );
};

Hyperlink.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  dataTestRef: PropTypes.string,
  hasTargetInNewWindow: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.oneOf([
    'External Button Link',
    'External Text Link',
    'Internal Button Link',
    'Internal Text Link',
    'External No Icon Link',
    'No Icon Link',
  ]),
  title: PropTypes.string,
  type: PropTypes.oneOf(['Relative', 'Absolute']),
  url: PropTypes.string.isRequired,
};

Hyperlink.defaultProps = {
  children: undefined,
  className: undefined,
  dataTestRef: undefined,
  hasTargetInNewWindow: false,
  id: undefined,
  style: 'No Icon Link',
  title: undefined,
  type: undefined,
  url: undefined,
};

export default Hyperlink;
