import { Box, Stack, Title } from '@mantine/core';

export const MainReason = () => {
  return (
    <Box>
      <Stack>
        <Title>왜 티에이치컴퍼니인가?</Title>
        <Stack>
          <Box>
            <p>icon</p>
            <Box>
              <Title>풍부한 경험</Title>
              <Title>HACCP, GMP 기준 위생 설계 경험과 노하우를 보유하고 있습니다.</Title>
            </Box>
          </Box>
          <Box>
            <p>icon</p>
            <Box>
              <Title>전문 팀</Title>
              <Title>건축, 위생, 자동화 분야 전문가가 함께합니다.</Title>
            </Box>
          </Box>
          <Box>
            <p>icon</p>
            <Box>
              <Title>올인원 솔루션</Title>
              <Title>설계부터 시공, 유지보수까지 통합 솔루션을 제공합니다.</Title>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
