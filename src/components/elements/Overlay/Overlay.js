import React from 'react';
import cx from 'classnames';
import Props from './Overlay.types';
import { KEYBOARD_CODES } from '~/constants';
import Transition from '~/components/elements/Transition';
import styles from './Overlay.module.css';

const Overlay: React.FunctionComponent<Props> = ({
  classSet,
  handleClose,
  isVisible,
}) => {
  const className: string = cx(
    styles.base,
    {
      [styles.isVisible]: isVisible,
    },
    classSet,
  );

  return (
    <Transition
      active={!!isVisible}
      mountOnEnter={true}
      type="fade"
      unmountOnExit={true}
    >
      <div
        className={className}
        onClick={handleClose}
        onKeyPress={event => {
          if (event.keyCode === KEYBOARD_CODES.ESCAPE) {
            // @ts-ignore
            handleClose(event);
          }
        }}
        role="button"
        tabIndex={-1}
      />
    </Transition>
  );
};

Overlay.defaultProps = {
  isVisible: false,
};

export default Overlay;
