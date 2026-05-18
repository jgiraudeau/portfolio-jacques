import type { Metadata } from 'next'
import AssistantWordPressClient from './AssistantWordPressClient'

export const metadata: Metadata = {
  title: 'Assistant WordPress BTS NDRC',
  description: 'Interface sécurisée pour interroger l’assistant RAG WordPress destiné aux enseignants et étudiants BTS NDRC.',
  alternates: {
    canonical: '/assistant-wordpress',
  },
}

export default function AssistantWordPressPage() {
  return <AssistantWordPressClient />
}
