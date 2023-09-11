import Footer from './components/Header Footer/Footer'
import Navbar from './components/Header Footer/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SAGAFAT INTERNATIONALS',
  description: 'We are Sagafat Internationals, a company based in Pakistan specializing in the export and manufacturing of sportswear, streetwear, and activewear.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jomolhari&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/logo_dark.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
