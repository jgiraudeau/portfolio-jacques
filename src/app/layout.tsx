import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Jacques Giraudeau | Formateur Expert Numérique & IA - Marseille / Cassis',
    template: '%s | Jacques Giraudeau'
  },
  description: 'Expert en Ingénierie de Formation, Professeur Agrégé spécialisé en IA Générative, LMS (Moodle, Chamilo) et outils numériques pour le BTS NDRC. Basé à Marseille et Cassis.',
  keywords: ['Formateur IA', 'BTS NDRC', 'Ingénierie de formation', 'Moodle', 'Chamilo', 'LMS', 'Google Workspace Education', 'Marseille', 'Cassis', 'Pédagogie numérique'],
  authors: [{ name: 'Jacques Giraudeau' }],
  creator: 'Jacques Giraudeau',
  publisher: 'Jacques Giraudeau',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Jacques Giraudeau | Expert Pédagogie Numérique & IA',
    description: 'Accompagnement à la digitalisation des formations et adoption de l\'IA générative.',
    url: 'https://www.jacquesgiraudeau.com',
    siteName: 'Jacques Giraudeau Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacques Giraudeau | Formateur Expert IA',
    description: 'Expertise en Ingénierie de Formation et IA Pédagogique à Marseille.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'FR-13',
    'geo.placename': 'Marseille, Cassis',
    'geo.position': '43.2965;5.3698', // Marseille Center
    'ICBM': '43.2965, 5.3698'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jacques Giraudeau',
    url: 'https://www.jacquesgiraudeau.com',
    jobTitle: 'Formateur Expert Numérique & IA',
    description: 'Expert en Ingénierie de Formation, Professeur Agrégé spécialisé en IA Générative et LMS.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marseille',
      addressRegion: 'Provence-Alpes-Côte d\'Azur',
      addressCountry: 'FR'
    },
    sameAs: [
      'https://www.linkedin.com/in/jacques-giraudeau-71539020',
      'https://blog.jacquesgiraudeau.com'
    ],
    knowsAbout: ['Intelligence Artificielle', 'LMS', 'Moodle', 'Chamilo', 'BTS NDRC', 'Pédagogie']
  }

  return (
    <html lang="fr" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
