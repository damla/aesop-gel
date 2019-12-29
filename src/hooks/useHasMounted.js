import React from 'react';

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);

    return () => {
      setHasMounted(false);
    };
  }, [hasMounted]);

  return hasMounted;
};

export default useHasMounted;
