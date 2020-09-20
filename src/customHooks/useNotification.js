import { useReducer } from 'react';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

const initialState = {
  showModal: false,
};

function reducer(state, action) {
  if (action.type === SHOW_NOTIFICATION) {
    return {
      showModal: !state.showModal,
    };
  }

  throw new Error(
    `useNotification: Dispatch action type "${action.type}" not found.`,
  );
}

const useNotification = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showModal } = state;

  return {
    actionType: SHOW_NOTIFICATION,
    dispatch,
    showModal,
  };
};

export default useNotification;
