export const metadata = {
  title: 'Velique Waitlist',
  description: 'Elevate Your Style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
