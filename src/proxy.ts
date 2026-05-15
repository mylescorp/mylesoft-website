import { NextRequest, NextResponse } from 'next/server'

const AGRIMYLES_HOST = 'agrimyles.mylescorptech.com'
const MYLESCARE_HOST = 'mylescare.mylescorptech.com'

const PRODUCT_HOSTS: Record<string, string> = {
  [AGRIMYLES_HOST]: '/products/agrimyles',
  [MYLESCARE_HOST]: '/products/mylescare',
}

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0].toLowerCase()
  const productPath = hostname ? PRODUCT_HOSTS[hostname] : undefined

  if (!productPath) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()

  if (url.pathname === '/') {
    url.pathname = productPath
    return NextResponse.rewrite(url)
  }

  if (url.pathname === productPath) {
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
