import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import useHasMounted from '~/hooks/useHasMounted';
import data from './Transition.data';

const transitionPropTypeOptions = [
  'fade',
  'shiftInDown',
  'shiftInLeft',
  'slideDown',
  'slideRight',
  'slowFade',
  'zoom',
];

const propTypes = {
  active: PropTypes.boolean,
  activeOnMount: PropTypes.boolean,
  children: PropTypes.node.isRequired,
  mountOnEnter: PropTypes.boolean,
  type: PropTypes.oneOf(transitionPropTypeOptions).isRequired,
  unmountOnExit: PropTypes.boolean,
};

const Transition = ({
  active = true,
  activeOnMount = false,
  children,
  mountOnEnter = false,
  type,
  unmountOnExit = false,
}) => {
  const hasMounted = useHasMounted();

  return (
    <CSSTransition
      classNames={data[type].classNames}
      in={activeOnMount ? hasMounted : active}
      mountOnEnter={mountOnEnter}
      timeout={data[type].timeout}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </CSSTransition>
  );
};

Transition.propTypes = propTypes;

export default Transition;
