import { Center, Loader } from '@mantine/core';

export const AppLoader = ({ height }: { height?: string }) => {
  return (
    <Center h={height || '100%'}>
      <Loader />
    </Center>
  );
};
