import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const name = searchParams.get('name') || 'MylesCorp Technologies'
  const category = searchParams.get('category') || 'AI Software'

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
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#C79639',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '36px',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1A395B',
          }}
        >
          M
        </div>

        <div
          style={{
            color: '#C79639',
            fontSize: '22px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '18px',
          }}
        >
          {category}
        </div>

        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            margin: 0,
            marginBottom: '18px',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.1,
          }}
        >
          {name}
        </h1>

        <p
          style={{
            fontSize: '24px',
            color: '#E8EDF4',
            margin: 0,
            textAlign: 'center',
            maxWidth: '820px',
            opacity: 0.92,
          }}
        >
          AI-powered solutions built for East Africa
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
