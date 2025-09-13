import { Box } from '@mantine/core';
import { AdminQuoteDetailView } from '@/app/admin/(page)/site/Quote/components/AdminQuote.Detail.View';

export const AdminQuoteDetail = ({ id }: { id: string }) => {
  return (
    <Box>
      <AdminQuoteDetailView id={id} />
    </Box>
  );
};
