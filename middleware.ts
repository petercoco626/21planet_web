import { NextRequest, NextResponse } from 'next/server';
import { pathname } from './constants/path';
import { refreshAccessToken } from './service/auth';
import axios from 'axios';

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const redirectUrl = req.nextUrl.origin + pathname.LOGIN;

  const accessToken = req.cookies.get('21-pl-ac')?.value;

  const { status: fetchProfileStatus } = await fetch(
    'https://api-dev.21planet.world/auth/me',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (fetchProfileStatus === 401) {
    const refreshToken = req.cookies.get('21-pl-rf')?.value;

    if (!refreshToken) {
      return NextResponse.redirect(redirectUrl);
    }

    const { status, tokenInfo } = await refreshAccessToken(refreshToken);

    if (status === 401) {
      res.cookies.delete('21-pl-rf');
      res.cookies.delete('21-pl-ac');
      axios.defaults.headers.common.Authorization == '';
      return NextResponse.redirect(redirectUrl);
    }

    const refreshTokenExpires = new Date();
    refreshTokenExpires.setTime(
      refreshTokenExpires.getTime() + 30 * 24 * 60 * 60 * 1000
    );

    res.cookies.set({
      name: '21-pl-rf',
      value: tokenInfo.data.refreshToken || '',
      path: '/',
      expires: refreshTokenExpires,
    });

    const accessTokenExpires = new Date();
    accessTokenExpires.setTime(
      refreshTokenExpires.getTime() + 30 * 24 * 60 * 60 * 1000
    );

    res.cookies.set({
      name: '21-pl-ac',
      value: tokenInfo.data.accessToken || '',
      path: '/',
      expires: accessTokenExpires,
    });
  }

  return res;
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    '/setting/:path*',
    '/challenge/:path*',
    '/sign-up/success/:path*',
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    // '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
