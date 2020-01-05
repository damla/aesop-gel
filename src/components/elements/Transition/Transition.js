import React from 'react';
import { CSSTransition } from 'react-transition-group';
import useHasMounted from '~/hooks/useHasMounted';
import data from './Transition.data';
import Props from './Transition.types';

const Transition: React.FunctionComponent<Props> = ({
  active,
  activeOnMount,
  children,
  mountOnEnter,
  type,
  unmountOnExit,
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

Transition.defaultProps = {
  active: true,
  activeOnMount: false,
  mountOnEnter: false,
  unmountOnExit: false,
};

export default Transition;
