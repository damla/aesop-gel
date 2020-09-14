import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '~/components/Icon';
import styles from './NotificationModal.module.css';
import { useNotificationContext } from 'contexts';

const NotificationModal = ({
  className,
  backgroundColor,
  notificationMessage,
}) => {
  const footerSuccessModal = useNotificationContext();
  const { actionType, dispatch, showModal } = footerSuccessModal;

  const onClick = e => {
    e.preventDefault();
    dispatch({ type: actionType });
  };

  const baseClassSet = cx(
    styles.base,
    !showModal && styles.isNotVisible,
    className,
  );

  const style = backgroundColor ? { backgroundColor } : undefined;

  return (
    <div className={baseClassSet} style={style}>
      <span className={styles.notificationMessage}>
        {notificationMessage}
      </span>
      <button
        className={styles.closeButton}
        data-ref="close"
        onClick={onClick}
        tabIndex={-1}
      >
        <Icon height={15} name="close" theme="dark" width={15} />
      </button>
    </div>
  );
};

NotificationModal.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  notificationMessage: PropTypes.string,
};

NotificationModal.defaultProps = {
  className: undefined,
  backgroundColor: undefined,
  notificationMessage: undefined,
};

export default NotificationModal;
