import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import Button from '~/components/Button';
import {
  checkIsInlineFromStyle,
  getButtonPropsFromStyle,
  getTargetType,
  hasIconFromStyle,
} from './Hyperlink.utils';
import styles from './Hyperlink.module.css';

const { NO_ICON_LINK } = HYPERLINK_STYLE_TYPES;

const Hyperlink = ({
  children,
  className,
  dataTestRef,
  openInANewWindow = false,
  style = NO_ICON_LINK,
  text,
  title,
  url,
}) => {
  const classSet = cx(styles.base, className);

  if (!text) {
    return (
      <a className={classSet} href={url} title={title || `Link to ${url}`}>
        {children}
      </a>
    );
  }

  const inline = checkIsInlineFromStyle(style);
  const props = getButtonPropsFromStyle(style, url);
  const hasIcon = hasIconFromStyle(style);
  const target = getTargetType(openInANewWindow);

  return (
    <Button
      className={className}
      dataTestRef={dataTestRef}
      icon={hasIcon}
      inline={inline}
      target={target}
      title={title || `Link to ${url}`}
      {...props}
    >
      {text}
    </Button>
  );
};

Hyperlink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  dataTestRef: PropTypes.string,
  openInANewWindow: PropTypes.bool,
  style: PropTypes.oneOf([
    'External Button Link',
    'External Text Link',
    'Internal Button Link',
    'Internal Text Link',
    'External No Icon Link',
    'No Icon Link',
  ]),
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['Relative', 'Absolute']),
  url: PropTypes.string.isRequired,
};

Hyperlink.defaultProps = {
  children: undefined,
  className: undefined,
  id: undefined,
  dataTestRef: undefined,
  openInANewWindow: false,
  style: 'No Icon Link',
  title: undefined,
  text: undefined,
  type: undefined,
  url: undefined,
};

export default Hyperlink;
