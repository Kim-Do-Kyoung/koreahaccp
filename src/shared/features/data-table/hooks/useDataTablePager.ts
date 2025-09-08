import { useEffect, useState } from 'react';
import { IDataTableOptions } from '@/shared/features/data-table/DataTable.types';

export const useDataTablePager = <T extends { id: number | string }>({
  data,
  options,
}: {
  data?: T[];
  options?: IDataTableOptions;
}) => {
  const [currentPageData, setCurrentPageData] = useState<T[]>([]);
  const [totalPageSize, setTotalPageSize] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const setPageHandler = (page: number) => {
    if (options?.serverPagination && options?.serverPaginationHandler) {
      options.serverPaginationHandler(page - 1);
    }
    setPage(page);
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    if (options?.serverPagination) {
      const { serverPaginationData } = options;

      const pageNumber = serverPaginationData?.pageable.pageNumber || 0;

      setPage(pageNumber + 1);
      setTotalPageSize(serverPaginationData?.totalPages || 0);
      setCurrentPageData(data);
    } else if (options?.pagination) {
      const pageSize = options.pageSize || 10;
      setTotalPageSize(
        () => Math.floor(data.length / pageSize) + (data.length % pageSize === 0 ? 0 : 1)
      );

      setCurrentPageData(() => data.slice((page - 1) * pageSize, page * pageSize));
    } else {
      setCurrentPageData(() => data);
    }
  }, [page, data]);

  return {
    currentPageData,
    totalPageSize,
    page,
    setPage: setPageHandler,
  };
};
