import React from 'react';
import cx from 'classnames';
import includes from 'lodash/includes';
import { HTML } from '~/constants';
import Icon from '~/components/elements/Icon/Icon';
import PROP_TYPES from './Button.prop-types';
import styles from './Button.module.css';

const Button = ({
  alternate = false,
  children,
  className,
  dataTestRef,
  disabled = false,
  hasLightText,
  href,
  icon = false,
  id,
  inline = false,
  onClick,
  tabIndex,
  target = '_self',
  title,
  to,
  type = 'button',
}) => {
  const internal = to;
  const external = href;

  if (onClick && icon) {
    console.error('<Button /> Event Buttons cannot have an icon');
  }

  if ((to || external) && disabled) {
    console.error('<Button /> Do not disable anchors');
  }

  if (inline && alternate) {
    console.error('<Button /> No such support for alternate inline links');
  }

  const classSet = cx(
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

  const commonProps = {
    title,
    id,
    tabIndex,
  };

  if (onClick || type !== 'button') {
    return (
      <button
        className={cx(classSet, { [styles.action]: onClick || type })}
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
    let Element = '';
    const props = {};

    /**
     * @TODO Pick routing tool
     */
    if (internal) {
      // Element = Link;
      // iconName = 'rightArrow';
      // props.to = to;

      if (!includes(href, 'http://') && !includes(href, 'https://')) {
        console.error(
          '<Button /> Make sure the value of href contains http:// or https://',
        );
      }
      Element = HTML.A;
      iconName = 'rightUpArrow';
      props.href = href;
    } else if (external) {
      if (!includes(href, 'http://') && !includes(href, 'https://')) {
        console.error(
          '<Button /> Make sure the value of href contains http:// or https://',
        );
      }
      Element = HTML.A;
      iconName = 'rightUpArrow';
      props.href = href;
    }

    return (
      <Element
        className={cx(classSet)}
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
    console.error(
      '<Button /> Make sure you pass a prop to make this work, href, to or onClick',
    );

    return null;
  }
};

Button.propTypes = PROP_TYPES;

export default Button;
