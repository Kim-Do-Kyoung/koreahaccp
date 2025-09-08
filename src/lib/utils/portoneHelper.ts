import * as PortOne from '@portone/browser-sdk/v2';
import { jwtDecode } from 'jwt-decode';
import { fetchApi } from '@/lib/utils/fetchApi';

type DecodedUser = {
  name: string;
  email: string;
  phone: string;
  externalId: string;
};

export const generatePaymentId = () => {
  const now = new Date();

  const YYYY = now.getFullYear();
  const MM = String(now.getMonth() + 1).padStart(2, '0');
  const DD = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const SSS = String(now.getMilliseconds()).padStart(3, '0');

  const timestamp = `${YYYY}${MM}${DD}${hh}${mm}${ss}${SSS}`;
  const randomPart = Math.random().toString(36).slice(2, 6);
  return `pay-${timestamp}-${randomPart}`;
};

export const preRegisterPayment = async (orderCacheId: string, paymentId: string) =>
  await fetchApi.post('/api/shop/order/prepare', { orderCacheId, paymentId });

export const getUserFromToken = (): DecodedUser | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  const accessToken = document.cookie.match(
    new RegExp(`(?:^|; )${'access_token'.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`)
  );
  if (accessToken) {
    return jwtDecode<DecodedUser>(accessToken[1]);
  }
  return null;
};

export const createOrder = async (
  totalPrice: number,
  products: {
    id: number;
    price: number;
    title: string;
  }[],
  payMethod: 'CARD' | 'TRANSFER' | 'VIRTUAL_ACCOUNT',
  orderCacheId?: string
) => {
  const paymentId = generatePaymentId();
  await preRegisterPayment(orderCacheId ?? '', paymentId);
  const user = getUserFromToken();

  const orderName =
    products.length > 1 ? `${products[0].title} 외 ${products.length - 1} 건` : products[0].title;
  sessionStorage.setItem('paymentAttemptId', paymentId);

  const portoneResponse = await PortOne.requestPayment({
    storeId: 'store-77b19b36-df66-4dd4-a830-f79b6b47b5ba',
    channelKey: 'channel-key-24522e65-e20d-41ee-86e8-ccf1090a88bb',
    paymentId,
    orderName,
    totalAmount: totalPrice,
    payMethod,
    currency: 'CURRENCY_KRW',
    redirectUrl: `${process.env.NEXT_PUBLIC_PAYMENT_REDIRECT_URL ?? 'http://localhost:3000/shop/payment'} `,
    customer: {
      customerId: user?.externalId,
      fullName: user?.name,
      email: user?.email,
      phoneNumber: user?.phone,
    },
    appScheme: 'guitarzip',
    products: products.map((value) => ({
      id: value.id.toString(),
      name: value.title,
      amount: value.price,
      quantity: 1,
    })),
    virtualAccount:
      payMethod === 'VIRTUAL_ACCOUNT'
        ? {
            accountExpiry: {
              validHours: 24,
            },
          }
        : undefined,
    storeDetails: {
      phoneNumber: '01063215828',
      storeName: '기타집',
      businessRegistrationNumber: '1779400823',
      ceoFullName: '이재서',
    },
  });

  if (!portoneResponse) {
    return;
  }

  // PC 버전에서는 결제 전 창을 닫을 경우 리다이렉트 되지 않도록 함(PG사마다 해당 코드 다름)
  if (portoneResponse.code !== undefined) {
    if (portoneResponse.code === 'FAILURE_TYPE_PG') {
      if (portoneResponse.pgCode === 'I009') {
        return;
      }
    }
  }

  const searchParams = new URLSearchParams({
    code: portoneResponse.code ?? '',
    message: portoneResponse.message ?? '',
    paymentId: portoneResponse.paymentId ?? '',
    pgCode: portoneResponse.pgCode ?? '',
    pgMessage: portoneResponse.pgMessage ?? '',
    transactionType: portoneResponse.transactionType ?? '',
    txId: portoneResponse.txId ?? '',
  });

  window.location.href = `/shop/payment?${searchParams.toString()}`;
};
