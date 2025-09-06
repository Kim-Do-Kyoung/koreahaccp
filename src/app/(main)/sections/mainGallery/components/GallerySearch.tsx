'use client';

import { Box, Center, Tabs } from '@mantine/core';
import { GalleryCardList } from '@/app/(main)/sections/mainGallery/components/GalleryCardList';
import { SearchBar } from '@/shared/features/data-searchInput/SearchBar';
import styles from './GallerySearch.module.css';

export const GallerySearch = () => {
  return (
    <Box>
      <Tabs defaultValue="all">
        <Tabs.List className={styles.tabsList}>
          <Box className={styles.listBox}>
            <Tabs.Tab value="all">전체</Tabs.Tab>
            <Tabs.Tab value="cleanRoom">클린룸</Tabs.Tab>
            <Tabs.Tab value="inside">실내건축</Tabs.Tab>
          </Box>
          <Box>
            <SearchBar
              options={{
                onSubmit: () => console.log('submit'),
                placeholder: '검색어를 입력하세요.',
              }}
            />
          </Box>
        </Tabs.List>

        <Tabs.Panel value="all">
          <GalleryCardList />
        </Tabs.Panel>

        <Tabs.Panel value="cleanRoom">
          <GalleryCardList />
        </Tabs.Panel>

        <Tabs.Panel w={1280} value="inside">
          <Center>실내 건축 데이터가 없습니다.</Center>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};
