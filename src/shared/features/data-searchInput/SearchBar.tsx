'use client';

import { Group } from '@mantine/core';
import { SearchBarInput } from '@/shared/features/data-searchInput/components/SearchBarInput';
import { useSearchStore } from '@/shared/features/data-searchInput/stores/SearchStore';
import styles from './components/SearchBar.module.css';

export interface ISearchOptions {
  placeholder?: string;
  onSubmit: () => void;
}

export const SearchBar = ({ options }: { options?: ISearchOptions }) => {
  const { keyword, setKeyword } = useSearchStore();

  if (!options) {
    return null;
  }

  return (
    <form
      className={styles.searchBarForm}
      onSubmit={(e) => {
        e.preventDefault();
        options.onSubmit();
      }}
    >
      <Group className={styles.searchBarGroup}>
        <SearchBarInput options={options} keyword={keyword} setKeyword={setKeyword} />
      </Group>
    </form>
  );
};
