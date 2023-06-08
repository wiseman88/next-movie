import Header from './components/Header/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Movie App',
  description: 'Movie app for searching movies, actors, TV shows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
