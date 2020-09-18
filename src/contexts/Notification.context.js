import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';
import { useNotification } from '~/customHooks';

const initialState = {
  actionTypes: {},
  dispatch: () => {},
  showModal: false,
};

const NotificationContext = createContext(initialState);

export const useNotificationContext = () => useContext(NotificationContext);

export const NotificationContextProvider = ({ children }) => (
  <NotificationContext.Provider value={useNotification()}>
    {children}
  </NotificationContext.Provider>
);

NotificationContextProvider.propTypes = {
  children: PropTypes.any,
};

export default NotificationContextProvider;
