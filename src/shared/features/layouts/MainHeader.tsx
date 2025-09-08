'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Burger, Center, NavLink } from '@mantine/core';
import { ResponsiveBox, ResponsiveMobileBox } from '@/shared/features/responseive/ResponsiveBox';
import styles from './MainHeader.module.css';

export const MainHeader = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '홈' },
    { href: '/portfolio', label: '포트폴리오' },
    { href: '/notice', label: '인테리어 팁' },
    { href: '/intro', label: '회사 소개' },
    { href: '/quote', label: '견적 신청' },
    { href: '/call', label: '전화하기' }, // 전화하기는 별도 페이지 or tel: 링크
  ];

  return (
    <Center>
      <Box className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          티에이치컴퍼니
        </Link>

        {/* PC 화면 */}
        <ResponsiveBox>
          <Box className={styles.headerNav}>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                component="a"
                href={item.href}
                className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
                label={item.label}
              />
            ))}
          </Box>
        </ResponsiveBox>

        {/* 모바일 화면 */}
        <ResponsiveMobileBox>
          <Burger />
        </ResponsiveMobileBox>
      </Box>
    </Center>
  );
};
