import { Suspense } from '@suspensive/react';
import { Center, rem, Text } from '@mantine/core';
import { Welcome } from '@/app/(main)/sections/Welcome';
import { ColorSchemeToggle } from '@/shared/features/color-scheme-toggle/ColorSchemeToggle';

export default function MainPage() {
  return (
    <>
      {/* 특정 페이지에서만 사용하는 컴포넌트의 경우 라우팅과 동일한 경로에 작성 */}
      <Suspense>
        <Welcome />
      </Suspense>
      <ColorSchemeToggle />
      <Center h={rem(500)}>
        <Text>이곳은 메인 영역입니다.</Text>
      </Center>
    </>
  );
}
