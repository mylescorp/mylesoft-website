import { NextRequest, NextResponse } from 'next/server'

const AGRIMYLES_HOST = 'agrimyles.mylescorptech.com'

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0].toLowerCase()

  if (hostname !== AGRIMYLES_HOST) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()

  if (url.pathname === '/') {
    url.pathname = '/products/agrimyles'
    return NextResponse.rewrite(url)
  }

  if (url.pathname === '/products/agrimyles') {
    return NextResponse.next()
  }

  url.pathname = '/'
  url.search = ''
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)',
  ],
}
