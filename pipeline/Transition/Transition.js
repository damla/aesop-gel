import React from 'react';
import { CSSTransition } from 'react-transition-group';
import useHasMounted from '~/hooks/useHasMounted';
import PROP_TYPES from './Transition.prop-types';
import data from './Transition.data';

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

Transition.propTypes = PROP_TYPES;

export default Transition;
