import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

export const useCheckMobile = () => {
  const [isReady, setIsReady] = useState(false);
  const isMobile = useMediaQuery('(max-width: 992px)');

  useEffect(() => {
    setIsReady(true);
  }, []);

  return {
    isMobile,
    isLoading: !isReady,
  };
};
