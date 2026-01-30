import { useState } from 'react'
import styles from './page.module.css'
import { portfolioData } from './data'
import {
  Brain,
  GraduationCap,
  Users,
  Mail,
  Linkedin,
  Globe,
  CheckCircle,
  Monitor,
  Rocket,
  ExternalLink,
  Menu,
  X
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const { personalInfo, about, experience, education } = portfolioData
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <main>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>JG.</div>

          {/* Mobile Toggle Button */}
          <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
            <a href="#about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>À propos</a>
            <a href="#skills" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Compétences</a>
            <a href="#projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Projets</a>
            <a href="#experience" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Parcours</a>
            <a href="https://blog.jacquesgiraudeau.com" target="_blank" rel="noreferrer" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Blog</a>
            <a href="#contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>

          <a href="mailto:jacques.giraudeau@gmail.com" className="btn btn-primary" style={{ fontSize: '0.9rem', display: isMenuOpen ? 'none' : 'flex' }}> {/* Hide CTA on mobile header if needed, or keep it */}
            Me Contacter
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={`${styles.heroText} fade-in`}>

            <div className={styles.badges}>
              <span className={`${styles.badge} ${styles.badgeBlue}`}>
                Ingénierie Pédagogique
              </span>
              <span className={`${styles.badge} ${styles.badgePurple}`}>
                Intelligence Artificielle
              </span>
            </div>

            <h1 style={{ marginBottom: '1.5rem' }}>
              <span className={styles.titleMain}>Transformez vos formations</span>
              <span className={styles.titleHighlight}>
                par l'adoption du Numérique
              </span>
            </h1>

            <h2 className={styles.subtitle}>
              Déployer un LMS ou former à l’IA ne suffit pas. <br />
              <strong>Je garantis l’appropriation réelle des outils par vos équipes pédagogiques</strong>, pour une performance durable.
            </h2>

            <div className={styles.heroButtons}>
              <a href="#contact" className="btn btn-primary">
                <Mail size={18} style={{ marginRight: '8px' }} /> Me contacter
              </a>
              <a href="#experience" className="btn btn-outline">
                Voir mon parcours
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', color: '#64748b', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', marginLeft: '10px' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#e2e8f0', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.7rem' }}>M</div>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#e2e8f0', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.7rem', marginLeft: '-10px' }}>C</div>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#e2e8f0', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.7rem', marginLeft: '-10px' }}>G</div>
              </div>
              <p>Expertise certifiée : <span style={{ fontWeight: 600, color: '#334155' }}>Moodle, Chamilo & Google</span></p>
            </div>

          </div>

          <div className={`${styles.imageWrapper} fade-in`}>
            <div className={styles.profileImage}>
              <Image
                src="/images/profile.jpg"
                alt="Jacques Giraudeau"
                fill
                style={{ objectFit: "cover" }}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Quick Banner */}
      <section className="bg-slate-900 text-white py-12" style={{ background: '#0f172a', color: 'white' }}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>30+</div>
            <div style={{ opacity: 0.8 }}>Années d'Expérience</div>
          </div>
          <div className={styles.statItem}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>100%</div>
            <div style={{ opacity: 0.8 }}>Passion Pédagogique</div>
          </div>
          <div className={styles.statItem}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#60a5fa' }}>Master 2</div>
            <div style={{ opacity: 0.8 }}>Ingénierie Formation</div>
          </div>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="section container">
        <div className="grid md:grid-cols-2 gap-12 items-start" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <h2 className="section-title text-left" style={{ textAlign: 'left', marginBottom: '2rem' }}>À propos</h2>
            <p className="text-lg text-muted" style={{ lineHeight: '1.9', marginBottom: '3rem', color: '#475569', fontSize: '1.1rem' }}>
              {about.summary}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {about.certifications.map((cert, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <CheckCircle style={{ color: '#2563eb', flexShrink: 0 }} size={24} />
                  <span className="font-medium" style={{ fontSize: '1.1rem', color: '#1e293b' }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="skills">
            <h3 className="text-2xl font-bold mb-6" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Domaines d'Intervention</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}><Brain /></div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>IA & Pédagogie</h4>
                <p className="text-sm text-muted">Intégration de l'IA générative dans les processus d'apprentissage et la création de contenus.</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}><Monitor /></div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Plateformes LMS</h4>
                <p className="text-sm text-muted">Déploiement et administration expert de Moodle, Chamilo et Google Workspace.</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}><Users /></div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Formation de Formateurs</h4>
                <p className="text-sm text-muted">Accompagnement au changement et adoption des outils numériques par les équipes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mes Apps Pédago (Projects) Section */}
      <section id="projects" className="section container">
        <h2 className="section-title text-center">Mes Applications Pédago & Projets</h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Des outils concrets développés pour répondre aux besoins du terrain.<br />
          Testez-les dès maintenant !
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {portfolioData.projects?.map((project, idx) => (
            <div key={idx} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
              border: '1px solid #f1f5f9',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              height: '100%'
            }}
              className="hover:-translate-y-2 transition-transform duration-300"
            >
              <div style={{
                width: 50,
                height: 50,
                background: idx === 2 ? '#f1f5f9' : '#eff6ff',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: idx === 2 ? '#64748b' : '#2563eb',
                marginBottom: '1.5rem'
              }}>
                {idx === 2 ? <Rocket size={24} /> : <Monitor size={24} />}
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#1e293b' }}>
                {project.title}
              </h3>

              <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '99px',
                    background: '#f8fafc',
                    color: '#475569',
                    border: '1px solid #e2e8f0'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a href={project.link} target={project.link.startsWith('http') ? "_blank" : "_self"} rel="noreferrer"
                className="btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  background: project.link === "#contact" ? 'transparent' : '#2563eb',
                  color: project.link === "#contact" ? '#2563eb' : 'white',
                  border: project.link === "#contact" ? '1px solid #2563eb' : 'none',
                  textDecoration: 'none',
                  gap: '8px',
                  marginTop: 'auto'
                }}
              >
                {project.link === "#contact" ? (
                  <>Discuter d'un projet <Mail size={16} /></>
                ) : (
                  <>Voir le site <ExternalLink size={16} /></>
                )}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="section bg-slate-50" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">Parcours Professionnel</h2>
          <p className="section-subtitle">Une carrière dédiée à la transmission et à l'innovation.</p>

          <div className={styles.timeline}>
            {experience.map((exp, idx) => (
              <div key={idx} className={`${styles.timelineItem} fade-in`}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDate}>{exp.period}</div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company} • {exp.location}</h4>
                  <p className="text-muted">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container text-center">
        <h2 className="section-title">Formation Académique</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
          {education.map((edu, idx) => (
            <div key={idx} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem', width: '300px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: '#2563eb' }}><GraduationCap size={32} /></div>
              <h3 style={{ fontWeight: 'bold' }}>{edu.degree}</h3>
              <div style={{ color: '#2563eb', fontSize: '0.9rem', marginTop: '0.5rem' }}>{edu.school}</div>
              <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>{edu.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className={styles.footer}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Prêt à digitaliser vos formations ?</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Contactez-moi pour échanger sur vos besoins en ingénierie pédagogique, déploiement LMS ou formation IA.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ background: 'white', color: '#0f172a' }}>
              <Mail style={{ marginRight: '8px' }} size={20} />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone.replace(/ /g, '')}`} className="btn btn-outline" style={{ borderColor: '#334155', color: 'white' }}>
              {personalInfo.phone}
            </a>
          </div>

          <div className={styles.footerLinks}>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={styles.footerLink}>
              <Linkedin size={20} /> LinkedIn
            </a>
            {personalInfo.websites.map((site, i) => (
              <a key={i} href={`https://${site}`} target="_blank" rel="noreferrer" className={styles.footerLink}>
                <Globe size={20} /> {site}
              </a>
            ))}
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #1e293b', fontSize: '0.9rem', color: '#475569' }}>
            © {new Date().getFullYear()} Jacques Giraudeau. Tous droits réservés.
          </div>
        </div>
      </footer>
    </main>
  )
}
