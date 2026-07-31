import type { NextRequest } from 'next/server'
import { createCsrfResponse } from '@/lib/security/csrf'

export function GET(request: NextRequest) {
  return createCsrfResponse(request)
}
