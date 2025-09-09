import { Center } from '@mantine/core';
import { Construction } from '@/app/construction/sections/Construction';

export default function ConstructionPage({ params }: { params: { id: string } }) {
  return (
    <Center p={30}>
      <Construction id={params.id} />
    </Center>
  );
}
