import { Box, Burger, Center, Image, NavLink } from '@mantine/core';
import { ResponsiveBox, ResponsiveMobileBox } from '@/shared/features/responseive/ResponsiveBox';
import styles from './MainHeader.module.css';

export const MainHeader = () => {
  return (
    <Center>
      <Box className={styles.headerWrapper}>
        <Image src="/" alt="logo" />

        {/*993px 이상 ( PC 화면 )*/}
        <ResponsiveBox>
          <Box className={styles.headerNav}>
            <NavLink href="/" label="홈" />
            <NavLink href="/" label="클린룸 시공" />
            <NavLink href="/" label="인증서비스" />
            <NavLink href="/" label="스마트팜" />
            <NavLink href="/" label="견적 신청" />
            <NavLink href="/" label="전화하기" />
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
