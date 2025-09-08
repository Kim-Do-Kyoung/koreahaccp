import { Group, Title } from '@mantine/core';

export const DataTableTitle = ({ titleName }: { titleName?: string }) => {
  return (
    <Group justify="flex-start">
      <>
        <Title order={2} fw={600}>
          {titleName}
        </Title>
      </>
    </Group>
  );
};
