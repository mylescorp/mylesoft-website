import { randomUUID } from 'crypto'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const CSRF_COOKIE_NAME = '__mylescorp_csrf'
export const CSRF_HEADER_NAME = 'x-csrf-token'

const CSRF_MAX_AGE_SECONDS = 15 * 60

function cookieDomain(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0] ?? ''

  if (host === 'mylescorptech.com' || host.endsWith('.mylescorptech.com')) {
    return '.mylescorptech.com'
  }

  return undefined
}

export function createCsrfResponse(request: NextRequest) {
  const token = randomUUID()
  const response = NextResponse.json({ success: true, token })

  response.cookies.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    domain: cookieDomain(request),
    maxAge: CSRF_MAX_AGE_SECONDS,
  })

  return response
}

export function validateCsrfRequest(request: NextRequest) {
  const cookieToken = request.cookies.get(CSRF_COOKIE_NAME)?.value
  const headerToken = request.headers.get(CSRF_HEADER_NAME)

  return Boolean(cookieToken && headerToken && cookieToken === headerToken)
}

export function clearCsrfCookie(request: NextRequest, response: NextResponse) {
  response.cookies.set(CSRF_COOKIE_NAME, '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    domain: cookieDomain(request),
    maxAge: 0,
    expires: new Date(0),
  })

  return response
}
