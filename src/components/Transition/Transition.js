import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import useHasMounted from '~/hooks/useHasMounted';
import data from './Transition.data';

const Transition = ({
  children,
  hasCSSTransitionMountOnEnter,
  hasCSSTransitionUnmountOnExit,
  isActiveOnMount,
  isActive,
  type,
}) => {
  const hasMounted = useHasMounted();
  const isVisible = isActiveOnMount ? !!hasMounted : !!isActive;

  return (
    <CSSTransition
      classNames={data[type].classNames}
      in={isVisible}
      mountOnEnter={!!hasCSSTransitionMountOnEnter}
      timeout={data[type].timeout}
      unmountOnExit={!!hasCSSTransitionUnmountOnExit}
    >
      {React.cloneElement(children, {
        className: cx(
          children.props.className,
          isVisible ? '' : data[type].classNames.enter,
        ),
      })}
    </CSSTransition>
  );
};

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  hasCSSTransitionMountOnEnter: PropTypes.bool,
  hasCSSTransitionUnmountOnExit: PropTypes.bool,
  isActive: PropTypes.bool,
  isActiveOnMount: PropTypes.bool,
  type: PropTypes.oneOf([
    'fade',
    'shiftInDown',
    'shiftInLeft',
    'slideDown',
    'slideRight',
    'slowFade',
    'zoom',
  ]).isRequired,
};

Transition.defaultProps = {
  children: undefined,
  hasCSSTransitionMountOnEnter: undefined,
  hasCSSTransitionUnmountOnExit: undefined,
  isActive: false,
  isActiveOnMount: false,
  type: undefined,
};

export default Transition;
