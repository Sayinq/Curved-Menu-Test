import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/NavBody.jsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Curved Menu',
  description: 'Testing a curved menu animation in a closed environment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
