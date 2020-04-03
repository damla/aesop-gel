import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '~/components/Icon';
import {
  checkIsInlineFromStyle,
  getTargetType,
  hasIconFromStyle,
  checkIsExternalFromStyle,
} from './Hyperlink.utils';
import styles from './Hyperlink.module.css';

const Hyperlink = ({
  children,
  className,
  dataTestRef,
  hasTargetInNewWindow,
  style,
  theme,
  title,
  url,
}) => {
  const isInline = checkIsInlineFromStyle(style);
  const isExternal = checkIsExternalFromStyle(style);
  const hasIcon = hasIconFromStyle(style);
  const target = getTargetType(hasTargetInNewWindow);
  const classSet = cx(
    styles.base,
    { [styles.blockStyle]: !isInline },
    { [styles.hasIcon]: hasIcon },
    styles[theme],
    className,
  );

  /** @TODO Handle Link component */

  let iconName = '';
  // let Element = '';
  // const props: LinkProps = {};

  if (isExternal) {
    // Element = Link;
    iconName = 'rightUpArrow';
    // props.to = to;
  } else {
    // Element = HTML.A;
    iconName = 'rightArrow';
    // props.href = href;
  }

  return (
    <a
      className={classSet}
      data-test-ref={dataTestRef}
      href={url}
      target={target}
      title={title}
    >
      {children}
      {hasIcon && (
        <i aria-hidden="true" className={styles.icon}>
          <Icon height={15} name={iconName} width={15} />
        </i>
      )}
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
  theme: PropTypes.oneOf(['dark', 'light']),
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
  theme: 'dark',
  title: undefined,
  type: undefined,
  url: undefined,
};

export default Hyperlink;
