import { TbBrandInstagram, TbBrandYoutube } from 'react-icons/tb';
import { Center, Group } from '@mantine/core';

export const MainFooter = () => {
  return (
    <>
      <Center>
        <h1>Main Footer</h1>
      </Center>
      <Group justify="center">
        <span>기타는 기타집</span>
        <span>사업자등록번호: 01010101010</span>
        <TbBrandYoutube />
        <TbBrandInstagram />
      </Group>
    </>
  );
};
