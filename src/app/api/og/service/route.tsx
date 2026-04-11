import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const name = searchParams.get('name') || 'MylesCorp Services'

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
          Service
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
          Digital transformation services for growing organisations
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
