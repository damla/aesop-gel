import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './LinkButtonGroup.module.css';

const isReactFragment = component => {
  if (component.type) return component.type === Fragment;
  return component === Fragment;
};

const LinkButtonGroup = ({
  children,
  className,
  hasFitContent,
  isFlush,
  textAlign,
  theme,
}) => {
  const classSet = cx(
    styles.base,
    { [styles.fitContent]: hasFitContent },
    { [styles.flush]: isFlush },
    className,
  );

  const childrenClassSet = cx(
    styles.link,
    { [styles.flushLink]: isFlush },
    { [styles.fitContent]: hasFitContent },
    styles[textAlign],
  );

  const childComponents = isReactFragment(children)
    ? children.props.children
    : children;

  return (
    <div className={classSet}>
      <>
        {React.Children.map(childComponents, child =>
          React.cloneElement(child, {
            className: `${child.props.className} ${childrenClassSet}`,
            textAlign,
            theme,
          }),
        )}
      </>
    </div>
  );
};

LinkButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasFitContent: PropTypes.bool,
  isFlush: PropTypes.bool,
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  theme: PropTypes.oneOf(['dark', 'light']),
};

LinkButtonGroup.defaultProps = {
  children: undefined,
  className: undefined,
  hasFitContent: false,
  isFlush: true,
  textAlign: 'center',
  theme: 'dark',
};

export default LinkButtonGroup;
