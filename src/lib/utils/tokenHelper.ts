import { NextRequest } from 'next/server';
import { decodeJwt, jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

export function getToken(req: NextRequest): string | null {
  return req.cookies.get('access_token')?.value || null;
}

export async function validateToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, SECRET_KEY);
    return true;
  } catch (error) {
    console.error('Invalid token:', error);
    return false;
  }
}

export async function extractRoleFromToken(token: string | null): Promise<string | null> {
  if (token === null) {
    return null;
  }
  try {
    const payload = decodeJwt(token);
    return (payload.role as string) || null;
  } catch (error) {
    console.error('Role extraction error:', error);
    return null;
  }
}

export async function validateAndExtractRoleFromToken(
  token: string | null
): Promise<string | null> {
  if (token === null) {
    return null;
  }
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return (payload.role as string) || null;
  } catch (error) {
    console.error('Role extraction error:', error);
    return null;
  }
}
