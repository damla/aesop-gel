import React from 'react';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import Button from '~/components/elements/Button';
import Props from './Hyperlink.types';
import {
  checkIsInlineFromStyle,
  getButtonPropsFromStyle,
  getTargetType,
  hasIconFromStyle,
} from './Hyperlink.utils';
import styles from './Hyperlink.module.css';

const { NO_ICON_LINK } = HYPERLINK_STYLE_TYPES;

const Hyperlink: React.FunctionComponent<Props> = ({
  children,
  classSet,
  dataTestRef,
  openInANewWindow,
  style,
  text,
  title,
  url,
}) => {
  const className: string = cx(styles.base, classSet);

  if (!text) {
    return (
      <a className={className} href={url} title={title || `Link to ${url}`}>
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
      classSet={className}
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

Hyperlink.defaultProps = {
  openInANewWindow: false,
  style: NO_ICON_LINK,
};

export default Hyperlink;
