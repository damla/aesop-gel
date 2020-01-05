import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import includes from 'lodash/includes';
import { HTML } from '~/constants';
import Icon from '~/components/elements/Icon/Icon';
import Props, { LinkProps } from './Button.types';
import styles from './Button.module.css';

const Button: React.FunctionComponent<Props> = props => {
  const {
    alternate,
    children,
    className,
    dataTestRef,
    disabled,
    hasLightText,
    href,
    icon,
    id,
    inline,
    onClick,
    tabIndex,
    target,
    title,
    to,
    type,
  } = props;
  const internal = to;
  const external = href;

  if (onClick && icon) {
    console.error('<Button /> Event Buttons cannot have an icon');

    return null;
  }

  if ((to || external) && disabled) {
    console.error('<Button /> Do not disable anchors');

    return null;
  }

  if (inline && alternate) {
    console.error('<Button /> No such support for alternate inline links');

    return null;
  }

  const classSet: string = cx(
    styles.base,
    { [styles.alternate]: alternate },
    { [styles.block]: !inline },
    { [styles.disabled]: disabled },
    { [styles.external]: external },
    { [styles.hasLightText]: hasLightText },
    { [styles.hasIcon]: icon },
    { [styles.inline]: inline },
    { [styles.internal]: internal },
    className,
  );

  const commonProps: object = {
    title,
    id,
    tabIndex,
  };

  if (onClick || type !== 'button') {
    return (
      <button
        className={cx(className, { [styles.action]: onClick || type })}
        data-test-ref={dataTestRef}
        disabled={disabled}
        onClick={onClick}
        type={type}
        {...commonProps}
      >
        {children}
      </button>
    );
  } else if (internal || external) {
    let iconName = '';
    let Element: React.ReactType | string = '';
    const props: LinkProps = {};

    if (internal) {
      Element = Link;
      iconName = 'rightArrow';
      props.to = to;
    } else if (external) {
      if (!includes(href, 'http://') && !includes(href, 'https://')) {
        console.error(
          '<Button /> Make sure the value of href contains http:// or https://',
        );

        return null;
      }
      Element = HTML.A;
      iconName = 'rightUpArrow';
      props.href = href;
    }

    return (
      <Element
        className={cx(className)}
        data-test-ref={dataTestRef}
        target={target}
        {...commonProps}
        {...props}
      >
        {children}
        {icon && (
          <i aria-hidden="true" className={styles.icon}>
            <Icon name={iconName} />
          </i>
        )}
      </Element>
    );
  } else {
    return null;
  }
};

Button.defaultProps = {
  alternate: false,
  disabled: false,
  hasLightText: false,
  icon: false,
  inline: false,
  target: '_self',
  type: 'button',
};

export default Button;
