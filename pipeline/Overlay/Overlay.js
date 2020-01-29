import React from 'react';
import cx from 'classnames';
import { KEYBOARD_CODES } from '~/constants';
import Transition from '~/components/Transition';
import PROP_TYPES from './Overlay.prop-types';
import styles from './Overlay.module.css';

const Overlay = ({ className, handleClose, isVisible = false }) => {
  const classSet = cx(
    styles.base,
    {
      [styles.isVisible]: isVisible,
    },
    className,
  );

  return (
    <Transition
      active={!!isVisible}
      mountOnEnter={true}
      type="fade"
      unmountOnExit={true}
    >
      <div
        className={classSet}
        onClick={handleClose}
        onKeyPress={event => {
          if (event.keyCode === KEYBOARD_CODES.ESCAPE) {
            handleClose(event);
          }
        }}
        role="button"
        tabIndex={-1}
      />
    </Transition>
  );
};

Overlay.propTypes = PROP_TYPES;

export default Overlay;
