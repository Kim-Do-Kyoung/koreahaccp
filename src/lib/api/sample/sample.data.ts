import { SampleUser } from '@/shared/types/sample/SampleUser';

export const fetchSampleUser = async (): Promise<SampleUser[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // for suspense test
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return response.json();
};
