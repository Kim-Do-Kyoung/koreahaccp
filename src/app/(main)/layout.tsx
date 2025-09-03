import { MainFooter } from '@/shared/ui/layouts/mainFooter/MainFooter';
import { MainHeader } from '@/shared/ui/layouts/mainHeader/MainHeader';

export default function HomePageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
