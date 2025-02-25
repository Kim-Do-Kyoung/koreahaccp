import { Group, Text } from '@mantine/core';

export const DataTableResult = ({ count }: { count: number }) => {
  return (
    <Group justify="flex-start" gap={5}>
      <>
        <Text>검색결과</Text>
        <Text>총 {count}건</Text>
      </>
    </Group>
  );
};
