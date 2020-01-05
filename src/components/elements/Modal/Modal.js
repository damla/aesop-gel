import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/hooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/hooks/useOverflowHidden';
import ModalBody from './components/ModalBody';
import ModalBodyFixture from './components/ModalBody/ModalBody.fixture';
import Overlay from '~/components/elements/Overlay';
import Transition from '~/components/elements/Transition';
import Props from './Modal.types';
import styles from './Modal.module.css';

const Modal: React.FunctionComponent<Props> = ({
  children,
  classSet,
  handleClose,
  isVisible,
}) => {
  useEscapeKeyListener(handleClose);
  useOverflowHidden(isVisible);

  const className: string = cx(styles.base, classSet);
  const modalRootElement: HTMLElement | null = document.querySelector('#modal');

  if (!modalRootElement) {
    return null;
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <aside aria-hidden={!isVisible} className={className}>
          <Overlay handleClose={handleClose} isVisible={isVisible} />
          <Transition
            active={isVisible}
            mountOnEnter={true}
            type="zoom"
            unmountOnExit={true}
          >
            <div className={styles.inner}>
              <ModalBody
                copy={ModalBodyFixture.copy}
                handleClose={handleClose}
                isVisible={isVisible}
              >
                {children}
              </ModalBody>
            </div>
          </Transition>
        </aside>,
        modalRootElement,
      )}
    </React.Fragment>
  );
};

export default Modal;
