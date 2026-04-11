import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({
    success: false,
    error: 'Search functionality temporarily disabled for build compatibility'
  })
}

export async function GET() {
  return NextResponse.json({
    success: false,
    error: 'Search functionality temporarily disabled for build compatibility'
  })
}
