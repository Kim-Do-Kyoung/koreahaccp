import { FiClipboard, FiHome, FiTool } from 'react-icons/fi';
import { Group } from '@mantine/core';
import { ServiceCard } from './ServiceCard';
import styles from './ServiceCard.module.css';

const serviceData = [
  {
    icon: <FiClipboard size={40} color="white" />, // 토목 · 설계
    title: '토목 · 설계',
    subTitle: '토목 설계부터 준공 인허가 까지 원스톱',
  },
  {
    icon: <FiHome size={40} color="white" />, // 건축 인테리어
    title: '건축 인테리어',
    subTitle: '건축, 인테리어 공사 완료',
  },
  {
    icon: <FiTool size={40} color="white" />, // 부분 공사 (망치 대체)
    title: '부분 공사',
    subTitle: '부분 수리를 요하는 공사',
  },
];

export const ServiceCardList = () => {
  return (
    <Group className={styles.serviceCardListWrapper}>
      {serviceData.map((service, idx) => (
        <ServiceCard
          key={idx}
          icon={service.icon}
          title={service.title}
          subTitle={service.subTitle}
        />
      ))}
    </Group>
  );
};
