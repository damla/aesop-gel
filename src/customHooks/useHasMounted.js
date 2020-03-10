import { useEffect, useState } from 'react';

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    return () => {
      setHasMounted(false);
    };
  }, [hasMounted]);

  return hasMounted;
};

export default useHasMounted;
