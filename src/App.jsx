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

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Componente de Ícone do Instagram Manual (SVG)
const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

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
  const testimonials = [
    { name: "Amanda Souza", text: "Meu pet fez xixi no sofá e achei que teria que jogar fora pelo cheiro. A equipe da Aconchego removeu o odor e as manchas totalmente. Além disso, minha rinite parou de atacar! É saúde e economia real.", img: "/img/cliente1.png" },
    { name: "Carlos Eduardo", text: "Fiquei impressionado com a sujeira que saiu do colchão. O serviço de extração profunda é outro nível, o quarto ficou até mais leve. Atendimento nota 10.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
    { name: "Mariana Silva", text: "Fiquei chocada com a cor da água! Meu sofá parecia limpo, mas a higienização mostrou a realidade. Serviço impecável e técnico muito cuidadoso.", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800" },
    { name: "Ricardo Menezes", text: "Atendimento pontual e muito educado. Limparam as cadeiras de jantar e o resultado foi surpreendente. Recomendo para quem tem pets em casa!", img: "https://images.unsplash.com/photo-1556911223-e4524c73c480?auto=format&fit=crop&q=80&w=800" },
    { name: "Juliana Costa", text: "Tenho rinite alérgica e senti a diferença no ar da casa logo após a limpeza do colchão. Vale cada centavo pela qualidade do sono.", img: "https://images.unsplash.com/photo-1631677285814-2f24f81c2f6d?auto=format&fit=crop&q=80&w=800" },
    { name: "Beatriz Santos", text: "Excelente custo-benefício. O técnico foi super cuidadoso com o meu piso de madeira durante o processo. Meu estofado de linho voltou a ser branco!", img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div>
      <header>
        <nav className="container">
          <img src="/img/logomarca.png" alt="Aconchego Higienização - Especialistas em Limpeza de Estofados em SP" className="logo" />
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Diferenciais</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li>
              <a 
                href="https://www.instagram.com/aconchegohigienizacao/" 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  color: 'var(--text-main)', 
                  display: 'flex', 
                  alignItems: 'center',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}
              >
                <InstagramIcon size={22} />
              </a>
            </li>
          </ul>
          <a href="https://wa.me/5511914936063" className="btn btn-primary">Falar com Especialista</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>
                Limpeza Profissional <br />
                de Estofados em <span className="highlight">São Paulo</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                Higienização profunda que elimina 99% de ácaros e manchas, devolvendo o conforto e a saúde para sua família.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://wa.me/5511914936063" className="btn btn-primary">
                  <MessageCircle size={20} />
                  Orçamento via WhatsApp
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                  <Star className="highlight" fill="currentColor" size={20} />
                  <span>Referência em São Paulo</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hero-image"
            >
              <img src="/img/sofa-hero.jpg" alt="Profissional realizando limpeza de sofá em São Paulo - Aconchego Higienização" />
            </motion.div>
          </div>
        </section>

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
              <ServiceCard icon={Sofa} title="Sofás" description="Higienização profunda para todos os tipos de tecidos e tamanhos." delay={0.1} />
              <ServiceCard icon={Bed} title="Colchões" description="Eliminação total de ácaros e bactérias para um sono saudável." delay={0.2} />
              <ServiceCard icon={Armchair} title="Estofados" description="Poltronas, cadeiras e puffs renovados em minutos." delay={0.3} />
              <ServiceCard icon={Zap} title="Tapetes" description="Lavagem especializada para diversos tipos de fibras e tramas." delay={0.4} />
            </div>
          </div>
        </section>

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

        <section id="depoimentos" className="section">
          <div className="container">
            <div className="section-title">
              <h2>A confiança de quem vive em um ambiente renovado</h2>
              <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>Veja o que nossos clientes de São Paulo dizem sobre nós</p>
            </div>
            
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              style={{ paddingBottom: '3rem' }}
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ 
                      width: '100%', 
                      height: '180px', 
                      borderRadius: '12px', 
                      overflow: 'hidden', 
                      marginBottom: '1.5rem',
                      background: '#e2e8f0' 
                    }}>
                      <img 
                        src={t.img} 
                        alt={`Resultado serviço ${t.name}`} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.style.background = 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)';
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
                    </div>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-main)', flexGrow: 1 }}>"{t.text}"</p>
                    <strong style={{ display: 'block', marginTop: '1.5rem', color: 'var(--primary)' }}>- {t.name}</strong>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>

      <footer style={{ background: 'var(--text-dark)', color: 'white', padding: '4rem 0 2rem' }}>
        <div className="container">
          <div className="hero-grid" style={{ marginBottom: '2rem' }}>
            <div>
              <h3>Aconchego Higienização</h3>
              <p style={{ opacity: 0.7, marginTop: '1rem' }}>Transformando lares através da higienização profissional de estofados.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p>📍 Atendemos Toda a Cidade de São Paulo e Região</p>
              <p>📞 (11) 91493-6063</p>
              <p style={{ marginBottom: '1.5rem' }}>✉️ aconchego.higienizacao@gmail.com</p>
              <a 
                href="https://www.instagram.com/aconchegohigienizacao/" 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  color: 'white', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  textDecoration: 'none',
                  background: 'var(--primary)',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-dark)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(14, 165, 233, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(14, 165, 233, 0.3)';
                }}
              >
                <InstagramIcon size={20} color="white" />
                Siga-nos no Instagram
              </a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.875rem' }}>
            © 2026 Aconchego Higienização. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <a href="https://wa.me//5511914936063" className="btn btn-whatsapp" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
        <MessageCircle size={32} />
      </a>
    </div>
  )
}

export default App