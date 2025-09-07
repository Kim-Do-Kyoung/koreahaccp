import { Center } from '@mantine/core';
import { QuoteForm } from '@/app/quote/sections/quoteForm/QuoteForm';

export default function QuotePage() {
  return (
    <Center style={{ minHeight: '70vh' }}>
      <QuoteForm />
    </Center>
  );
}
