import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacques Giraudeau | Formateur Expert Numérique & IA',
  description: 'Portfolio de Jacques Giraudeau, Professeur Agrégé et Expert en Ingénierie de Formation, déploiement LMS et Intelligence Artificielle Pédagogique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
