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
  hasLightText,
  hasTargetInNewWindow,
  isAlternate,
  style,
  title,
  url,
}) => {
  const isInline = checkIsInlineFromStyle(style);
  const isExternal = checkIsExternalFromStyle(style);
  const hasIcon = hasIconFromStyle(style);
  const target = getTargetType(hasTargetInNewWindow);
  const classSet = cx(
    styles.base,
    { [styles.alternate]: isAlternate },
    { [styles.blockStyle]: !isInline },
    { [styles.external]: isExternal },
    { [styles.lightText]: hasLightText },
    { [styles.hasIcon]: hasIcon },
    { [styles.inlineStyle]: isInline },
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
  hasLightText: PropTypes.bool,
  hasTargetInNewWindow: PropTypes.bool,
  id: PropTypes.string,
  isAlternate: PropTypes.bool,
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
  hasLightText: undefined,
  hasTargetInNewWindow: false,
  id: undefined,
  isAlternate: undefined,
  style: 'No Icon Link',
  title: undefined,
  type: undefined,
  url: undefined,
};

export default Hyperlink;
