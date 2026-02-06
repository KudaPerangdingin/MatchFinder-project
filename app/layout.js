// File: app/layout.js
import './globals.css'
import { AuthProvider } from '@/components/AuthProvider'

export const metadata = {
  title: 'MatchFinder',
  description: 'Find sparring partners',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* TARUH LINK FONT DISINI, DI DALAM <head> */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <nav style={{ background: '#1a1a1a', color: 'white', padding: '20px', borderBottom: '3px solid #ff6b35' }}>
            <h1 style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 900,
              fontSize: '2.5rem',
              letterSpacing: '-1px',
              margin: 0 
            }}>
              MATCH<span style={{color: '#ff6b35'}}>FINDER</span>
            </h1>
          </nav>
          <main style={{ padding: '20px' }}>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}