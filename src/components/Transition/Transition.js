import React from 'react';
import PropTypes from 'prop-types';
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

  return (
    <CSSTransition
      classNames={data[type].classNames}
      in={isActiveOnMount ? hasMounted : isActive}
      mountOnEnter={hasCSSTransitionMountOnEnter}
      timeout={data[type].timeout}
      unmountOnExit={hasCSSTransitionUnmountOnExit}
    >
      {children}
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
  hasCSSTransitionMountOnEnter: false,
  hasCSSTransitionUnmountOnExit: false,
  isActive: true,
  isActiveOnMount: false,
  type: undefined,
};

export default Transition;
