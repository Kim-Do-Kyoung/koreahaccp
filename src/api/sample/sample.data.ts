import { SampleUser } from '@/models/sample/SampleUser';

export const fetchSampleUser = async (): Promise<SampleUser> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  return response.json();
};
