import React from 'react';
import cx from 'classnames';
import Props from './Overlay.types';
import { KEYBOARD_CODES } from '~/constants';
import Transition from '~/components/elements/Transition';
import styles from './Overlay.module.css';

const Overlay: React.FunctionComponent<Props> = ({
  className,
  handleClose,
  isVisible,
}) => {
  const classSet: string = cx(
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
