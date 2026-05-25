import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title') || 'MylesCorp Technologies'
    const description = searchParams.get('description') || 'Software Products for East African Businesses'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1A395B',
            backgroundImage: 'linear-gradient(135deg, #1A395B 0%, #0F2338 100%)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#C79639',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#1A395B',
            }}
          >
            M
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              margin: '0',
              marginBottom: '20px',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: '1.1',
            }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#E8EDF4',
              margin: '0',
              textAlign: 'center',
              maxWidth: '800px',
              opacity: 0.9,
            }}
          >
            {description}
          </p>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              display: 'flex',
              alignItems: 'center',
              color: '#E8EDF4',
              fontSize: '16px',
              opacity: 0.7,
            }}
          >
            <span>Nairobi, Kenya • mylescorptech.com</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error: any) {
    console.log(`${error.message}`)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
