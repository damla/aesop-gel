import React from 'react';
import cx from 'classnames';
import Button from '~/components/elements/Button';
import Icon from '~/components/elements/Icon';
import Props from './ModalBody.types';
import styles from './ModalBody.module.css';

const ModalBody: React.FunctionComponent<Props> = ({
  children,
  classSet,
  copy,
  handleClose,
  isVisible,
}) => {
  const className: string = cx(
    styles.base,
    { [styles.isVisible]: isVisible },
    classSet,
  );

  return (
    <div className={className}>
      {children}
      <Button
        classSet={styles.closeButton}
        dataTestRef="MODAL_CLOSE_BUTTON"
        inline={true}
        onClick={handleClose}
        title={copy.closeDialog}
      >
        <Icon classSet={styles.closeIcon} height={14} name="close" width={14} />
      </Button>
    </div>
  );
};

export default ModalBody;
