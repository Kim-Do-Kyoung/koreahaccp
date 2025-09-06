import { Group } from '@mantine/core';
import { ServiceCard } from './ServiceCard';

const serviceData = [
  {
    title: 'HACCP 컨설팅',
    subTitle: '서류 공정 인증까지 원스톱 지원',
  },
  {
    title: '클린룸 설계 시공',
    subTitle: '식품 제약 특화 청정 공간 구현',
  },
  {
    title: '스마트팜 구축',
    subTitle: '자동화 설계 & 시공',
  },
];

export const ServiceCardList = () => {
  return (
    <Group justify="space-between" wrap="wrap">
      {serviceData.map((service, idx) => (
        <ServiceCard key={idx} title={service.title} subTitle={service.subTitle} />
      ))}
    </Group>
  );
};
