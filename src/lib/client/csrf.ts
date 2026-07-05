export async function getCsrfHeader() {
  const response = await fetch('/api/csrf', {
    method: 'GET',
    credentials: 'same-origin',
  })

  if (!response.ok) {
    throw new Error('csrf-unavailable')
  }

  const data = await response.json() as { token?: string }

  if (!data.token) {
    throw new Error('csrf-unavailable')
  }

  return {
    'x-csrf-token': data.token,
  }
}
