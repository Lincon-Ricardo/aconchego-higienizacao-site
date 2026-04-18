import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sofa, 
  Bed, 
  Armchair, 
  Wind, 
  Star, 
  MessageCircle,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react'

// Componente para Cards de Serviço com animação
const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="card"
  >
    <div className="card-icon">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>{description}</p>
  </motion.div>
)

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div>
      {/* Header */}
      <header>
        <nav className="container">
          <img src="/img/logomarca.png" alt="Aconchego Higienização co Logo" className="logo" />
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Diferenciais</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
          </ul>
          <a href="https://wa.me//5511914936063" className="btn btn-primary">Falar com Especialista</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Seu sofá <span className="highlight">novo de novo</span> em poucas horas!</h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                Tecnologia de extração profunda que elimina 99% de ácaros, fungos e manchas difíceis. Atendimento VIP no conforto da sua casa.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/5511914936063" className="btn btn-primary">
                  <MessageCircle size={20} />
                  Orçamento Grátis
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                  <Star className="highlight" fill="currentColor" size={20} />
                  <span>4.9/5 no Google</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-image"
            >
              <img src="/img/sofa-hero.jpg" alt="Sofá Limpo" />
            </motion.div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="section">
          <div className="container">
            <div className="section-title">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                O que cuidamos para você
              </motion.h2>
            </div>
            <div className="services-grid">
              <ServiceCard 
                icon={Sofa} 
                title="Sofás" 
                description="Higienização profunda para todos os tipos de tecidos e tamanhos."
                delay={0.1}
              />
              <ServiceCard 
                icon={Bed} 
                title="Colchões" 
                description="Eliminação total de ácaros e bactérias para um sono saudável."
                delay={0.2}
              />
              <ServiceCard 
                icon={Armchair} 
                title="Estofados" 
                description="Poltronas, cadeiras e puffs renovados em minutos."
                delay={0.3}
              />
              <ServiceCard 
                icon={Zap} 
                title="Tapetes" 
                description="Lavagem especializada para diversos tipos de fibras e tramas."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="sobre" className="section" style={{ background: 'white' }}>
          <div className="container hero-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hero-image"
            >
              <img src="/img/antes-depois.png" alt="Antes e Depois" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>A qualidade que seus olhos <span className="highlight">comprovam</span></h2>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <ShieldCheck className="highlight" />
                  <div>
                    <strong>Produtos Certificados:</strong> Não tóxicos e seguros para bebês e pets.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <Zap className="highlight" />
                  <div>
                    <strong>Secagem Express:</strong> Tecnologia que permite o uso em poucas horas.
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <Users className="highlight" />
                  <div>
                    <strong>Equipe Treinada:</strong> Profissionais uniformizados e especialistas.
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="section">
          <div className="container">
            <div className="section-title">
              <h2>Quem já contratou, recomenda</h2>
            </div>
            <div className="services-grid">
              {[
                { name: "Lucilene Lopes", text: "Meu filho sujou a cama, e eles resolveram em 1 hora! Ficou novo e cheiroso." },
                { name: "Carlos Eduardo", text: "Fiquei impressionado com a sujeira que saiu do colchão. Serviço nota 10." }
              ].map((t, i) => (
                <div key={i} className="card">
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
                  </div>
                  <p>"{t.text}"</p>
                  <strong style={{ display: 'block', marginTop: '1rem' }}>- {t.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ background: 'var(--text-dark)', color: 'white', padding: '4rem 0 2rem' }}>
        <div className="container">
          <div className="hero-grid" style={{ marginBottom: '2rem' }}>
            <div>
              <h3>Aconchego Higienização co</h3>
              <p style={{ opacity: 0.7, marginTop: '1rem' }}>Transformando lares através da higienização profissional de estofados.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p>📍 Atendemos Toda a Cidade de São Paulo e Região</p>
              <p>📞 (11) 91493-6063</p>
              <p>✉️ aconchego.higienizacao@gmail.com</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.875rem' }}>
            © 2026 Aconchego Higienização co. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me//5511914936063" 
        className="btn btn-whatsapp" 
        target="_blank" 
        rel="noreferrer"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
      >
        <MessageCircle size={32} />
      </a>
    </div>
  )
}

export default App