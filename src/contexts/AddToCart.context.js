import React from 'react';

const AddToCartContext = React.createContext({
  handleOnClick: () => {},
  isLoading: false,
  isUpdateSuccessful: false,
});

export default AddToCartContext;
