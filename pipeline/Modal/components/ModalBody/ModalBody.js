import React from 'react';
import cx from 'classnames';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import PROP_TYPES from './ModalBody.prop-types';
import styles from './ModalBody.module.css';

const ModalBody = ({ children, className, copy, handleClose, isVisible }) => {
  const classSet = cx(
    styles.base,
    { [styles.isVisible]: isVisible },
    className,
  );

  return (
    <div className={classSet}>
      {children}
      <Button
        className={styles.closeButton}
        dataTestRef="MODAL_CLOSE_BUTTON"
        inline={true}
        onClick={handleClose}
        title={copy.closeDialog}
      >
        <Icon
          className={styles.closeIcon}
          height={14}
          name="close"
          width={14}
        />
      </Button>
    </div>
  );
};

ModalBody.propTypes = PROP_TYPES;

export default ModalBody;
