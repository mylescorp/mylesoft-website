export default function BrochureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      suppressHydrationWarning
      style={{ margin: 0, padding: 0, minHeight: '100vh' }}
    >
      {children}
    </div>
  )
}
