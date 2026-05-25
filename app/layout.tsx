import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}