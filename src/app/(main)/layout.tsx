import { MainFooter } from '@/app/(main)/sections/MainFooter';
import { MainHeader } from '@/app/(main)/sections/MainHeader';

export default function HomePageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
