'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { TbMessages, TbNotes } from 'react-icons/tb';
import { Box, Flex, NavLink, Stack, Text, Title } from '@mantine/core';
import styles from './AdminSideNav.module.css';

interface NavItem {
  label: string;
  href: string;
  level: 1 | 2;
  items?: NavItem[];
  icon?: ReactNode;
}

interface NavSection {
  title: string;
  items?: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: '메인관리',
    items: [
      {
        label: '랜딩 이미지',
        href: '/admin/site/mainImage',
        level: 1,
        icon: <TbMessages size={18} />,
      },
    ],
  },
  {
    title: '포트폴리오',
    items: [
      {
        label: '포트폴리오 관리',
        href: '/admin/site/portfolio',
        level: 1,
        icon: <TbMessages size={18} />,
      },
    ],
  },
  {
    title: '고객 관리',
    items: [
      {
        label: '게시판 관리',
        href: '#',
        level: 1,
        icon: <TbNotes size={18} />,
        items: [{ label: '공지사항', href: '/admin/site/board', level: 2 }],
      },
      { label: '문의 관리', href: '/admin/site/quote', level: 1, icon: <TbMessages size={18} /> },
    ],
  },
];

export const AdminSideNav = ({
  collapsed,
  setCollapsedAction,
}: {
  collapsed: boolean;
  setCollapsedAction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const toggleSidebar = () => setCollapsedAction(!collapsed);

  const navItem = ({ href, label, level, items, icon }: NavItem) => (
    <NavLink
      key={href + label}
      className={level === 1 ? styles.link : styles.link2}
      href={href}
      label={label}
      active={href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)}
      leftSection={level === 1 && icon}
      rightSection={items && <FiChevronRight size={16} />}
      component={Link}
      styles={{
        label: { fontSize: 15 },
        section: { marginRight: 8 },
      }}
    >
      {items && items.map((item) => navItem(item))}
    </NavLink>
  );

  return (
    <Box className={styles.wrapper}>
      <Flex className={styles.header} justify="space-between" align="center">
        {!collapsed && <Title order={6}>관리자 페이지</Title>}
        <Box onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
          {collapsed ? <FiChevronsRight size={20} /> : <FiChevronsLeft size={20} />}
        </Box>
      </Flex>
      <Stack style={{ display: collapsed ? 'none' : 'block' }}>
        {navSections.map((section) => (
          <Box key={section.title} p="4px 8px">
            <Text fw={700} size="sm" c="black" p="8px 12px">
              {section.title}
            </Text>
            {section.items && <Stack gap={4}>{section.items.map((item) => navItem(item))}</Stack>}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
