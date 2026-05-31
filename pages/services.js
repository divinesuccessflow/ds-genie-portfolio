import Head from 'next/head';
import Link from 'next/link';

const services = [
  {
    emoji: '🧞',
    title: 'AI Agent Architecture',
    tagline: 'The whole system, not just one bot',
    desc: 'Multi-agent teams designed from billionaire frameworks, classic philosophy, and modern AI. Each agent has a role, a memory, and a relentless drive to execute.',
    price: 'From ₹50K',
    gradient: 'linear-gradient(135deg, rgba(212,168,67,0.15), rgba(240,208,120,0.05))',
  },
  {
    emoji: '🌐',
    title: 'Web App Development',
    tagline: 'Ship fast, ship beautiful, ship forever',
    desc: 'Full-stack Next.js builds deployed to Vercel. From landing pages to SaaS products. AI-generated, human-polished, production-ready.',
    price: 'From ₹30K',
    gradient: 'linear-gradient(135deg, rgba(100,100,255,0.12), rgba(140,100,255,0.05))',
  },
  {
    emoji: '📹',
    title: 'Content Machines',
    tagline: 'Your voice, amplified by AI',
    desc: 'Faceless YouTube pipelines, viral hooks, LinkedIn content engines, email sequences — all AI-powered, all scheduled, all compounding.',
    price: 'From ₹25K',
    gradient: 'linear-gradient(135deg, rgba(255,80,80,0.12), rgba(255,120,80,0.05))',
  },
  {
    emoji: '💰',
    title: 'Business Blueprint Design',
    tagline: 'From idea to modeled exit',
    desc: 'Full business plans with TAM/SAM/SOM, ICP, revenue models, AI stack, MVP timelines, and 3-year financials. 8 verticals deep.',
    price: 'From ₹15K',
    gradient: 'linear-gradient(135deg, rgba(50,200,100,0.12), rgba(50,220,120,0.05))',
  },
  {
    emoji: '📊',
    title: 'Intelligence Pipelines',
    tagline: 'Your own private research army',
    desc: 'Build pipelines from 9K+ books, 2K+ YouTube channels, and custom data sources. Turn information into strategic edge.',
    price: 'From ₹20K',
    gradient: 'linear-gradient(135deg, rgba(80,180,255,0.12), rgba(80,200,255,0.05))',
  },
  {
    emoji: '🚀',
    title: 'AI Prosperity Cohort',
    tagline: 'Learn end-to-end. Build for real.',
    desc: '10-week cohort starting March 11, 2026. App dev, video marketing, lead gen, sales — all AI-powered, all taught live.',
    price: '₹4,997',
    gradient: 'linear-gradient(135deg, rgba(212,168,67,0.2), rgba(240,208,120,0.05))',
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Divine Successflow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        :root { --gold: #D4A843; --gold-light: #F0D078; --dark: #0D0D0D; --dark-card: #161616; --dark-border: #2A2A2A; }
        body { background: var(--dark); color: #E8E8E8; font-family: 'Inter', sans-serif; margin: 0; }
        .font-display { font-family: 'Playfair Display', serif; }
        .gradient-text { background: linear-gradient(135deg, var(--gold), var(--gold-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .nav-link { color: #999; text-decoration: none; transition: color 0.3s; }
        .nav-link:hover { color: var(--gold); }
        .btn-gold { background: linear-gradient(135deg, var(--gold), var(--gold-light)); color: #0D0D0D; padding: 12px 32px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-block; transition: all 0.3s; border: none; cursor: pointer; font-size: 16px; }
        .btn-gold:hover { box-shadow: 0 8px 30px rgba(212,168,67,0.4); transform: translateY(-1px); }
        .btn-outline { border: 1.5px solid var(--gold); color: var(--gold); padding: 12px 32px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-block; transition: all 0.3s; }
        .btn-outline:hover { background: rgba(212,168,67,0.1); }
        .tag { background: rgba(212,168,67,0.12); color: var(--gold); padding: 4px 14px; border-radius: 100px; font-size: 12px; fontWeight: 600; letter-spacing: 0.5px; border: 1px solid rgba(212,168,67,0.25); display: inline-block; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); opacity: 0.3; }
        .card-hover { transition: transform 0.3s, box-shadow 0.3s; }
        .card-hover:hover { transform: translateY(-4px); }
      `}</style>

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: 'blur(20px)', background: 'rgba(13,13,13,0.85)', borderBottom: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #D4A843, #F0D078)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🧞</div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 800, color: '#F0D078' }}>Divine Successflow</span>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {[['About', '/about', false], ['Services', '/services', true], ['Portfolio', '/portfolio', false]].map(([label, href, active]) => (
              <a key={href} href={href} className="nav-link" style={{ fontSize: 14, fontWeight: 500, color: active ? '#D4A843' : '#999' }}>{label}</a>
            ))}
            <Link href="/portfolio" className="btn-gold" style={{ padding: '8px 20px', fontSize: 14 }}>View Work</Link>
          </div>
        </div>
      </nav>

      <section style={{ padding: '140px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="tag">Services</span>
          <h1 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, marginTop: 16, marginBottom: 14 }}>
            What <span className="gradient-text">I Build</span> for Yashaswi
          </h1>
          <p style={{ color: '#777', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            End-to-end AI systems. Not just code — strategy, execution, and compounding growth.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
          {services.map((s) => (
            <div key={s.title} className="card-hover" style={{ borderRadius: 20, padding: '32px', background: s.gradient, border: '1px solid rgba(212,168,67,0.15)' }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>{s.emoji}</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 4, color: '#F0F0F0' }}>{s.title}</h3>
              <p style={{ color: '#D4A843', fontSize: 13, fontWeight: 600, marginBottom: 14, letterSpacing: '0.3px' }}>{s.tagline}</p>
              <p style={{ color: '#777', lineHeight: 1.7, fontSize: 14, marginBottom: 24 }}>{s.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#F0D078', fontSize: '1.1rem', fontWeight: 800 }}>{s.price}</span>
                <Link href="/portfolio" style={{ color: '#999', fontSize: 13, textDecoration: 'none' }}>View work →</Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <div className="divider" style={{ marginBottom: 40 }} />
          <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12 }}>Ready to <span className="gradient-text">build</span> something real?</h3>
          <p style={{ color: '#777', marginBottom: 28 }}>DM Yashaswi on LinkedIn or Telegram. Let's talk.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://linkedin.com/in/yashaswi" className="btn-gold" target="_blank">LinkedIn →</a>
            <a href="https://t.me/yashaswils" className="btn-outline" target="_blank">Telegram →</a>
          </div>
        </div>
      </section>
    </>
  );
}