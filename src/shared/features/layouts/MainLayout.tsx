import { MainFooter } from '@/shared/features/layouts/MainFooter';
import { MainHeader } from '@/shared/features/layouts/MainHeader';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
