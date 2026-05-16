import type { Metadata } from 'next'
import AssistantPrestaShopClient from './AssistantPrestaShopClient'

export const metadata: Metadata = {
  title: 'Assistant PrestaShop BTS NDRC',
  description: 'Interface sécurisée pour interroger l’assistant RAG PrestaShop destiné aux enseignants et étudiants BTS NDRC.',
  alternates: {
    canonical: '/assistant-prestashop',
  },
}

export default function AssistantPrestaShopPage() {
  return <AssistantPrestaShopClient />
}
