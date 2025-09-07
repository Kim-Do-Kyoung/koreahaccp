import Link from 'next/link';
import { Box, Burger, Center, Image, NavLink } from '@mantine/core';
import { ResponsiveBox, ResponsiveMobileBox } from '@/shared/features/responseive/ResponsiveBox';
import styles from './MainHeader.module.css';

export const MainHeader = () => {
  return (
    <Center>
      <Box className={styles.headerWrapper}>
        <Link href="/">
          <Image src="/" alt="logo" />
        </Link>

        {/*993px 이상 ( PC 화면 )*/}
        <ResponsiveBox>
          <Box className={styles.headerNav}>
            <NavLink href="/public" label="홈" />
            <NavLink href="/public" label="클린룸 시공" />
            <NavLink href="/public" label="인증서비스" />
            <NavLink href="/public" label="스마트팜" />
            <NavLink href="/public" label="견적 신청" />
            <NavLink href="/public" label="전화하기" />
          </Box>
        </ResponsiveBox>

        {/*992px 이하 ( 모바일 화면 )*/}
        <ResponsiveMobileBox>
          <Burger />
        </ResponsiveMobileBox>
      </Box>
    </Center>
  );
};
