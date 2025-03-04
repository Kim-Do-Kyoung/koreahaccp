'use client';

import { useEffect, useState } from 'react';
import { Group, Pagination, rem, ScrollArea, Stack, Table } from '@mantine/core';
import { DataTableBody } from '@/shared/features/data-table/components/DataTable.Body';
import { DataTableCommandButtons } from '@/shared/features/data-table/components/DataTable.CommandButtons';
import { DataTableHeader } from '@/shared/features/data-table/components/DataTable.Header';
import { DataTableResult } from '@/shared/features/data-table/components/DataTable.Result';
import { DataTableTitle } from '@/shared/features/data-table/components/DataTable.Title';
import { IDataTableColDef, IDataTableOptions } from '@/shared/features/data-table/DataTable.types';

export const DataTable = <T extends { id: number | string }>({
  data,
  colDefs,
  options,
}: {
  data?: T[];
  colDefs: IDataTableColDef[];
  options?: IDataTableOptions;
}) => {
  const [currentPageData, setCurrentPageData] = useState<T[]>([]);
  const [totalPageSize, setTotalPageSize] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!data) {
      return;
    }

    if (options?.pagination) {
      const pageSize = options.pageSize || 10;
      setTotalPageSize(
        () => Math.floor(data.length / pageSize) + (data.length % pageSize === 0 ? 0 : 1)
      );

      setCurrentPageData(() => data.slice((page - 1) * pageSize, page * pageSize));
    } else {
      setCurrentPageData(() => data);
    }
  }, [page, data]);

  return (
    <>
      <Stack w="100%">
        <Group justify="space-between">
          {options?.showDataResult && <DataTableResult count={data ? data.length : 0} />}
          {options?.showTitle && <DataTableTitle titleName={options.titleName} />}
          <DataTableCommandButtons options={options} />
          <ScrollArea
            w={options?.width ? '1400' : '100%'}
            h={options?.fixedHeight ? rem(640) : 'unset'}
            pb="md"
          >
            <Table
              w={options?.width || '100%'}
              stickyHeader
              highlightOnHover={options?.highlightOnHover ?? true}
              highlightOnHoverColor="var(--mantine-background-color-orange)"
              horizontalSpacing={options?.horizontalSpacing ?? 'sm'}
              verticalSpacing={options?.verticalSpacing ?? 'sm'}
            >
              <DataTableHeader options={options} colDefs={colDefs} />
              <DataTableBody page={page} currentPageData={currentPageData} colDefs={colDefs} />
            </Table>
          </ScrollArea>
          {options?.pagination && totalPageSize > 0 && (
            <Pagination total={totalPageSize} value={page} onChange={setPage} />
          )}
        </Group>
      </Stack>
    </>
  );
};
