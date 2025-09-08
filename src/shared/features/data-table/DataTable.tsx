'use client';

import { Box, Group, Pagination, rem, ScrollArea, Stack, Table } from '@mantine/core';
import { SearchBar } from '@/shared/features/data-searchInput/SearchBar';
import { DataTableBody } from '@/shared/features/data-table/components/DataTable.Body';
import { DataTableCommandButtons } from '@/shared/features/data-table/components/DataTable.CommandButtons';
import { DataTableHeader } from '@/shared/features/data-table/components/DataTable.Header';
import { DataTableResult } from '@/shared/features/data-table/components/DataTable.Result';
import { DataTableTitle } from '@/shared/features/data-table/components/DataTable.Title';
import { IDataTableColDef, IDataTableOptions } from '@/shared/features/data-table/DataTable.types';
import { useDataTablePager } from '@/shared/features/data-table/hooks/useDataTablePager';
import styles from './DataTable.module.css';

export const DataTable = <T extends { id: number | string }>({
  data,
  colDefs,
  options,
}: {
  data?: T[];
  colDefs: IDataTableColDef[];
  options?: IDataTableOptions;
}) => {
  const isServerPagination = options?.serverPagination ?? false;
  const serverPageData = options?.serverPaginationData;
  const direction = options?.direction ?? 'column';
  const buttonDirection = options?.buttonDirection ?? 'space-between';

  const { page, totalPageSize, currentPageData, setPage } = useDataTablePager({ data, options });

  return (
    <>
      <Stack w="100%" className={styles.dataTableWrapper} mod={{ displayorder: direction }}>
        <Group justify={buttonDirection}>
          {options?.showDataResult && (
            <DataTableResult
              count={
                isServerPagination ? (serverPageData?.totalElements ?? 0) : (data?.length ?? 0)
              }
            />
          )}
          {options?.showTitle && <DataTableTitle titleName={options.titleName} />}
          <Group gap="sm" wrap="nowrap">
            <SearchBar options={options?.searchBarOption} />
            <DataTableCommandButtons options={options} />
          </Group>
        </Group>
        <Box className={styles.tableBox}>
          <ScrollArea
            w={options?.width ? '1400' : '100%'}
            h={options?.fixedHeight ? rem(640) : 'unset'}
          >
            <Table
              w={options?.width || '100%'}
              stickyHeader
              highlightOnHover={options?.highlightOnHover ?? true}
              highlightOnHoverColor="var(--mantine-background-color-orange)"
              horizontalSpacing={options?.horizontalSpacing ?? 'sm'}
              verticalSpacing={options?.verticalSpacing ?? 'sm'}
            >
              {options?.showHeader !== false && (
                <DataTableHeader options={options} colDefs={colDefs} />
              )}
              <DataTableBody
                options={options}
                page={page}
                currentPageData={currentPageData}
                colDefs={colDefs}
              />
            </Table>
          </ScrollArea>
          <Stack w="100%" align="center">
            {options?.pagination && totalPageSize > 0 && (
              <Pagination
                className={styles.customPagination}
                total={totalPageSize}
                value={page}
                onChange={setPage}
              />
            )}
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
