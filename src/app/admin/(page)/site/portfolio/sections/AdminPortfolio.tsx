import { Box } from '@mantine/core';
import { AdminPortfolioForm } from '@/app/admin/(page)/site/portfolio/components/AdminPortfolio.Form';
import { AdminPortfolioView } from '@/app/admin/(page)/site/portfolio/components/AdminPortfolio.View';

export const AdminPortfolio = () => {
  return (
    <Box>
      <AdminPortfolioForm />
      <AdminPortfolioView />
    </Box>
  );
};
