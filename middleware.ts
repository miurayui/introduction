// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  if (authHeader) {
    // 認証情報をデコード
    const authValue = authHeader.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // 環境変数と照合
    if (user === process.env.BASIC_AUTH_USER && pwd === process.env.BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  // 認証に失敗した場合、ブラウザにログインダイアログを表示させる
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// 適用するパスを指定（サイト全体に適用する場合）
export const config = {
  matcher: '/:path*',
};
