import React from 'react';
import Button from '~/components/Button';
import { useNotificationContext } from 'contexts';

const ToogleButton = () => {
  const footerSuccessModal = useNotificationContext();
  const { actionType, dispatch } = footerSuccessModal;

  const onClick = e => {
    e.preventDefault();
    dispatch({ type: actionType });
  };

  return (
    <Button onClick={onClick} title="Show Notification">
      Show Notification
    </Button>
  );
};

export default ToogleButton;
