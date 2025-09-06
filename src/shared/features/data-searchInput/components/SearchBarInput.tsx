import { IoSearchOutline } from 'react-icons/io5';
import { ActionIcon, TextInput } from '@mantine/core';
import { ISearchOptions } from '@/shared/features/data-searchInput/SearchBar';
import styles from './SearchBar.module.css';

export const SearchBarInput = ({
  options,
  keyword,
  setKeyword,
}: {
  options?: ISearchOptions;
  keyword: string;
  setKeyword: (value: string) => void;
}) => {
  return (
    <TextInput
      value={keyword}
      onChange={(e) => setKeyword(e.currentTarget.value)}
      placeholder={options?.placeholder}
      className={styles.actionIcon}
      rightSection={
        <ActionIcon type="submit" component="button" variant="transparent">
          <IoSearchOutline />
        </ActionIcon>
      }
      style={{ flex: 1, maxWidth: 280 }}
      styles={{
        input: {
          height: 41,
        },
      }}
    />
  );
};
