import { Box } from '@mantine/core';
import { AdminQuoteDetail } from '@/app/admin/(page)/site/Quote/sections/AdminQuoteDetail';

export default function QuoteDetailPage({ params }: { params: { id: string } }) {
  return (
    <Box>
      <AdminQuoteDetail id={params.id} />
    </Box>
  );
}
