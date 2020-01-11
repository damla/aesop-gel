import React from 'react';
import cx from 'classnames';
import { get } from 'lodash';
import Transition from '~/components/elements/Transition';
// import { useMutationHideNotification } from '~/hooks/api/useMutationHideNotification';
// import { useQueryGetNotification } from '~/hooks/api/useQueryGetNotification';
import PropTypes from './NotificationBanner.prop-types';
import styles from './NotificationBanner.module.css';

const NotificationBanner = ({
  className,
  handleClose,
  isVisible = false,
  message,
  timeout = 2000,
}) => {
  const classSet = cx(styles.base, className);
  // const { data } = useQueryGetNotification();

  // const notificationVisible = get(data, 'Notification.visible', isVisible);
  // const notificationMessage = get(data, 'Notification.message', message);

  // const [hideNotification] = useMutationHideNotification();

  // React.useEffect(() => {
  //   const closeBanner = () => {
  //     if (handleClose) {
  //       handleClose();
  //     }
  //
  //     // hideNotification();
  //   };
  //
  //   if (notificationVisible) {
  //     setTimeout(() => closeBanner(), timeout);
  //   }
  // }, [handleClose, hideNotification, notificationVisible, timeout]);

  return (
    <Transition
      active={!!isVisible}
      mountOnEnter={true}
      type="slideDown"
      unmountOnExit={true}
    >
      <aside className={classSet} data-test-ref="NOTIFICATION_BANNER_MESSAGE">
        {message}
      </aside>
    </Transition>
  );
};

NotificationBanner.propTypes = PropTypes;

export default NotificationBanner;
