import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/customHooks/useOverflowHidden';
import ModalBody from './components/ModalBody';
import ModalBodyFixture from './components/ModalBody/ModalBody.fixture';
import Overlay from '~/components/Overlay';
import Transition from '~/components/Transition';
import styles from './Modal.module.css';

const Modal = ({ children, className, onClose, isVisible }) => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const classSet = cx(styles.base, className);
  const modalRootElement = document.querySelector('#modal');

  if (!modalRootElement) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(
        <aside aria-hidden={!isVisible} className={classSet}>
          <Overlay isVisible={isVisible} onClose={onClose} />
          <Transition
            hasCSSTransitionMountOnEnter={true}
            hasCSSTransitionUnmountOnExit={true}
            isActive={isVisible}
            type="zoom"
          >
            <div className={styles.inner}>
              <ModalBody
                copy={ModalBodyFixture.copy}
                isVisible={isVisible}
                onClose={onClose}
              >
                {children}
              </ModalBody>
            </div>
          </Transition>
        </aside>,
        modalRootElement,
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  children: undefined,
  className: undefined,
  isVisible: undefined,
  onClose: undefined,
};
export default Modal;
