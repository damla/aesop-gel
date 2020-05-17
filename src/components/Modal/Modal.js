import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/customHooks/useOverflowHidden';
import ModalBody from './components/ModalBody';
import Overlay from '~/components/Overlay';
import Transition from '~/components/Transition';
import styles from './Modal.module.css';

const Modal = ({
  children,
  className,
  copy,
  isVisible,
  onClose,
  portalId,
  theme,
}) => {
  useEscapeKeyListener(onClose);
  useOverflowHidden(isVisible);

  const classSet = cx(styles.base, styles[theme], className);
  const modalRootElement = document.getElementById(portalId);

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
                copy={copy}
                isVisible={isVisible}
                onClose={onClose}
                theme={theme}
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
  copy: PropTypes.shape({
    close: PropTypes.string,
  }),
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  portalId: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

Modal.defaultProps = {
  children: undefined,
  className: undefined,
  copy: {
    copy: '',
  },
  isVisible: undefined,
  onClose: undefined,
  portalId: 'aesopModal',
  theme: 'dark',
};
export default Modal;
