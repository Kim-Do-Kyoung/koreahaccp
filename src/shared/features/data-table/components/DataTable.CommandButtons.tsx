import { Button, Group } from '@mantine/core';
import { IDataTableOptions } from '@/shared/features/data-table/DataTable.types';

export const DataTableCommandButtons = ({ options }: { options?: IDataTableOptions }) => {
  return (
    <Group>
      {options?.buttons?.map((button, index) => (
        <Button key={index} variant="default" size="sm" onClick={button.onClick}>
          {button.label}
        </Button>
      ))}
    </Group>
  );
};
