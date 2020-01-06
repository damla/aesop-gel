import React from 'react';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import Button from '~/components/elements/Button';
import PROP_TYPES from './Hyperlink.prop-types';
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

Hyperlink.propTypes = PROP_TYPES;

export default Hyperlink;
