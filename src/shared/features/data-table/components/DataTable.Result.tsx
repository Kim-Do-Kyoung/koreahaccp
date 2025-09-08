import { Group, Text } from '@mantine/core';

export const DataTableResult = ({ count }: { count: number }) => {
  return (
    <Group justify="flex-start" gap={5}>
      <>
        <Text>
          총 <span style={{ color: '#EFBA28' }}>{count}</span>건
        </Text>
      </>
    </Group>
  );
};
