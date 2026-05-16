"use client"

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Bot,
  CircleAlert,
  ExternalLink,
  KeyRound,
  Loader2,
  Lock,
  LogOut,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import styles from './assistant.module.css'

type Role = 'user' | 'assistant'

type Source = {
  file?: string
  page?: string | number
  excerpt?: string
}

type ChatMessage = {
  id: string
  role: Role
  content: string
  sources?: Source[]
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_PRESTASHOP_RAG_URL?.replace(/\/$/, '') ||
  'https://assistant-prestashop-rag-production.up.railway.app'

const AUTH_STORAGE_KEY = 'portfolio-prestashop-rag-auth'

const starterQuestions = [
  'Comment créer une fiche produit propre dans PrestaShop ?',
  'Quelles étapes vérifier avant de publier une boutique ?',
  'Comment expliquer les catégories à un étudiant débutant ?',
]

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function toBasicAuth(username: string, password: string) {
  const bytes = new TextEncoder().encode(`${username}:${password}`)
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('')
  return `Basic ${btoa(binary)}`
}

function initialMessages(): ChatMessage[] {
  return [
    {
      id: makeId(),
      role: 'assistant',
      content:
        'Bonjour, je suis prêt. Posez une question sur PrestaShop, les manipulations BTS NDRC ou les documents indexés.',
    },
  ]
}

export default function AssistantPrestaShopClient() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [question, setQuestion] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')
  const messagesRef = useRef<HTMLDivElement | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const canAsk = isAuthenticated && question.trim().length > 0 && !isSending

  const authHeader = useMemo(() => {
    if (!username || !password) return ''
    return toBasicAuth(username, password)
  }, [username, password])

  useEffect(() => {
    const saved = window.sessionStorage.getItem(AUTH_STORAGE_KEY)
    if (!saved) return

    try {
      const parsed = JSON.parse(saved) as { username?: string; password?: string }
      if (parsed.username && parsed.password) {
        setUsername(parsed.username)
        setPassword(parsed.password)
        setIsAuthenticated(true)
      }
    } catch {
      window.sessionStorage.removeItem(AUTH_STORAGE_KEY)
    }
  }, [])

  useEffect(() => {
    const container = messagesRef.current
    if (!container) return

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isSending])

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    const cleanUsername = username.trim()
    if (!cleanUsername || !password) {
      setError('Identifiant et mot de passe requis.')
      return
    }

    setUsername(cleanUsername)
    setIsAuthenticated(true)
    window.sessionStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ username: cleanUsername, password }),
    )
  }

  function handleLogout() {
    window.sessionStorage.removeItem(AUTH_STORAGE_KEY)
    setIsAuthenticated(false)
    setPassword('')
    setError('')
  }

  async function askBot(nextQuestion?: string) {
    const trimmedQuestion = (nextQuestion ?? question).trim()
    if (!trimmedQuestion || !authHeader) return

    const userMessage: ChatMessage = {
      id: makeId(),
      role: 'user',
      content: trimmedQuestion,
    }
    const history = messages
      .filter((message) => message.role === 'user' || message.role === 'assistant')
      .slice(-8)
      .map(({ role, content }) => ({ role, content }))

    setMessages((current) => [...current, userMessage])
    setQuestion('')
    setError('')
    setIsSending(true)

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: trimmedQuestion,
          history,
        }),
      })

      if (response.status === 401) {
        throw new Error('Identifiants refusés par le bot.')
      }

      if (!response.ok) {
        throw new Error(`Réponse API inattendue (${response.status}).`)
      }

      const data = (await response.json()) as { answer?: string; sources?: Source[] }
      setMessages((current) => [
        ...current,
        {
          id: makeId(),
          role: 'assistant',
          content: data.answer || 'Je n’ai pas obtenu de réponse exploitable.',
          sources: data.sources || [],
        },
      ])
    } catch (caughtError) {
      const message = caughtError instanceof Error ? caughtError.message : 'Erreur inconnue.'
      setError(message)
      setMessages((current) => [
        ...current,
        {
          id: makeId(),
          role: 'assistant',
          content: `Je n’ai pas pu joindre l’assistant. ${message}`,
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  function handleAsk(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void askBot()
  }

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={18} aria-hidden="true" />
          Portfolio
        </Link>
        <div className={styles.topbarStatus}>
          <ShieldCheck size={18} aria-hidden="true" />
          Accès profs et élèves
        </div>
      </header>

      <section className={styles.shell}>
        <aside className={styles.contextPanel} aria-label="Contexte assistant">
          <div className={styles.brandMark}>
            <BookOpen size={24} aria-hidden="true" />
          </div>
          <p className={styles.eyebrow}>BTS NDRC</p>
          <h1>Assistant PrestaShop</h1>
          <p className={styles.lead}>
            Une interface réservée aux utilisateurs autorisés pour interroger le bot documentaire.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <Sparkles size={18} aria-hidden="true" />
              <span>Réponses appuyées sur les documents indexés.</span>
            </div>
            <div className={styles.infoItem}>
              <Lock size={18} aria-hidden="true" />
              <span>Aucun identifiant n’est inscrit dans le code du site.</span>
            </div>
            <a href={API_BASE_URL} target="_blank" rel="noreferrer" className={styles.infoLink}>
              <ExternalLink size={18} aria-hidden="true" />
              Ouvrir le bot Railway
            </a>
          </div>
        </aside>

        <section className={styles.chatPanel} aria-label="Conversation assistant PrestaShop">
          <div className={styles.chatHeader}>
            <div className={styles.chatTitle}>
              <span className={styles.botIcon}>
                <Bot size={21} aria-hidden="true" />
              </span>
              <div>
                <p>Assistant documentaire</p>
                <strong>{isAuthenticated ? `Connecté : ${username}` : 'Connexion requise'}</strong>
              </div>
            </div>

            {isAuthenticated ? (
              <button type="button" className={styles.iconButton} onClick={handleLogout} title="Déconnexion">
                <LogOut size={18} aria-hidden="true" />
              </button>
            ) : null}
          </div>

          {!isAuthenticated ? (
            <form className={styles.loginBox} onSubmit={handleLogin}>
              <div className={styles.loginTitle}>
                <KeyRound size={19} aria-hidden="true" />
                <span>Accès sécurisé</span>
              </div>
              <label>
                Identifiant
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoComplete="username"
                  placeholder="prof ou élève"
                />
              </label>
              <label>
                Mot de passe
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  autoComplete="current-password"
                  placeholder="Mot de passe"
                />
              </label>
              <button type="submit" className={styles.primaryButton}>
                <ShieldCheck size={18} aria-hidden="true" />
                Entrer
              </button>
            </form>
          ) : null}

          <div ref={messagesRef} className={styles.messages} aria-live="polite">
            {messages.map((message) => (
              <article
                key={message.id}
                className={`${styles.message} ${
                  message.role === 'user' ? styles.userMessage : styles.assistantMessage
                }`}
              >
                <p>{message.content}</p>
                {message.sources && message.sources.length > 0 ? (
                  <details className={styles.sources}>
                    <summary>Sources consultées</summary>
                    <ul>
                      {message.sources.slice(0, 4).map((source, index) => (
                        <li key={`${message.id}-${index}`}>
                          <strong>{source.file || 'Document'}</strong>
                          {source.page ? <span> page {source.page}</span> : null}
                          {source.excerpt ? <small>{source.excerpt}</small> : null}
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </article>
            ))}

            {isSending ? (
              <div className={`${styles.message} ${styles.assistantMessage} ${styles.loadingMessage}`}>
                <Loader2 className={styles.spinIcon} size={18} aria-hidden="true" />
                <span>Réponse en cours</span>
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          {error ? (
            <div className={styles.errorBox} role="alert">
              <CircleAlert size={18} aria-hidden="true" />
              {error}
            </div>
          ) : null}

          <div className={styles.starters} aria-label="Questions rapides">
            {starterQuestions.map((starter) => (
              <button
                key={starter}
                type="button"
                onClick={() => void askBot(starter)}
                disabled={!isAuthenticated || isSending}
              >
                {starter}
              </button>
            ))}
          </div>

          <form className={styles.composer} onSubmit={handleAsk}>
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Votre question sur PrestaShop"
              rows={2}
              disabled={!isAuthenticated || isSending}
            />
            <button type="submit" disabled={!canAsk} title="Envoyer">
              {isSending ? (
                <Loader2 className={styles.spinIcon} size={20} aria-hidden="true" />
              ) : (
                <Send size={20} aria-hidden="true" />
              )}
            </button>
          </form>
        </section>
      </section>
    </main>
  )
}
