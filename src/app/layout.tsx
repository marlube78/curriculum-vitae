import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CV Luci',
  description: 'Generated by Lucia Urrea Uribe',
  icons: [
    {
      src: "images/touch/homescreen48.png",
      sizes: "48x48",
      type: "image/png"
    }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
