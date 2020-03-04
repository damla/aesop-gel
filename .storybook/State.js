import React from 'react'

export const State = ({ children, initialState }) => {
  const [state, setState] = React.useState(initialState);

  return <div>{children(state, setState)}</div>;
};
