import './globals.css'
import localFont from 'next/font/local'

const quicksan = localFont({
  src: [
    {
      path: './fonts/QuickSand/Quicksand-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/QuickSand/Quicksand-Medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/QuickSand/Quicksand-SemiBold.woff',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/QuickSand/Quicksand-Bold.woff',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata = {
  title: 'Journeys',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="any" href="/img16.png" />
      </head>
      <body className={quicksan.className}>
        {children}
      </body>
    </html>
  )
}
