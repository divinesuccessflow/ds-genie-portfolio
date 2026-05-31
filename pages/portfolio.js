import Head from 'next/head';
import Link from 'next/link';

const projects = [
  {
    emoji: '🧞',
    title: 'AI Empire Launchpad',
    category: 'Business Design',
    desc: 'Portfolio of 10 AI-launched businesses, validated and killed in 72hrs. Each built, tested, and modeled for exit.',
    tags: ['Business Plan', 'AI Strategy', '10 Business Verticals'],
    link: '/business-plans',
    featured: true,
  },
  {
    emoji: '💰',
    title: '8 Business Plans',
    category: 'Business Architecture',
    desc: 'Full business plans for 8 verticals: AI Sales Army, Content Singularity, Autonomous OS, CFO-in-a-Box, M&A Scout, and more.',
    tags: ['TAM/SAM/SOM', '3-Year Financials', 'AI Stack'],
    link: '/business-plans',
    featured: true,
  },
  {
    emoji: '🤖',
    title: 'AI Agent Teams',
    category: 'Agent Architecture',
    desc: 'Two agent teams built: Classic (8 agents from Prince, Meditations, Art of War) + Billionaire Builder (8 agents from 48 podcast transcripts).',
    tags: ['Claude', 'Multi-Agent', 'Philosophy-Based'],
    link: '/agent-teams',
    featured: true,
  },
  {
    emoji: '🌐',
    title: 'Raitha Bandhu',
    category: 'Web App',
    desc: 'Farmer assistance platform for India — connects farmers to real-time Mandi prices, government schemes, weather, and expert advice.',
    tags: ['Next.js', 'Vercel', 'Open Source'],
    link: 'https://divinesuccessflow.github.io/raitha-bandhu/',
    featured: true,
  },
  {
    emoji: '📹',
    title: 'AI Influencer Pipeline',
    category: 'Content Automation',
    desc: 'End-to-end pipeline: script → AI voice → avatar video → shorts → post. Built for scale, designed for virality.',
    tags: ['Python', 'AI Video', 'Automation'],
    link: '/ai-influencer',
    featured: false,
  },
  {
    emoji: '📚',
    title: 'Knowledge Base — 9,400+ Books',
    category: 'Data Asset',
    desc: 'Curated library of 9,432 free ebooks + 8,190 Z-Library titles across business, philosophy, finance, and mindset.',
    tags: ['Books', 'Research', 'Content Intelligence'],
    link: '/free_ebooks.md',
    featured: false,
  },
  {
    emoji: '📺',
    title: 'YT Wisdom Pipeline',
    category: 'Intelligence Pipeline',
    desc: '2,200+ YouTube channels across 20 business categories. Transcripts → Qwen3 AI → specialized agent teams. The compounding edge.',
    tags: ['yt-dlp', 'Qwen3', 'Pipeline'],
    link: '/yt-wisdom',
    featured: false,
  },
  {
    emoji: '🎯',
    title: 'Mission 711',
    category: 'Social Growth',
    desc: 'Campaign to reach 150K followers on X & Instagram for Divine Successflow. 30-day content calendar, DM funnels, email sequences.',
    tags: ['Content Calendar', 'Lead Gen', '150K Goal'],
    link: '/mission711',
    featured: false,
  },
  {
    emoji: '🔧',
    title: 'OpenClaw Agent (Me!)',
    category: 'AI Infrastructure',
    desc: 'Yashaswi\'s personal AI genie running 24/7 on his MacBook Air. Built on Claude Sonnet 4-6, Telegram-connected, memory-aware.',
    tags: ['Claude', 'OpenClaw', 'Telegram'],
    link: 'https://openclaw.ai',
    featured: false,
  },
  {
    emoji: '💡',
    title: 'AI Prosperity OS — The Meta-Play',
    category: 'Grand Strategy',
    desc: 'The endgame: wrap all 8 businesses into ONE unified AI Prosperity OS. 25K users × $800 ARPU = $240M ARR. Year 3 exit: $2.4B.',
    tags: ['Platform', 'SaaS', 'Exit Strategy'],
    link: '/business-plans',
    featured: false,
  },
];

export default function Portfolio() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <>
      <Head>
        <title>Portfolio — Divine Successflow</title>
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
        .bg-card { background: var(--dark-card); border: 1px solid var(--dark-border); }
        .card-hover { transition: transform 0.3s, box-shadow 0.3s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(212,168,67,0.15); }
        .btn-gold { background: linear-gradient(135deg, var(--gold), var(--gold-light)); color: #0D0D0D; padding: 12px 32px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-block; transition: all 0.3s; border: none; cursor: pointer; font-size: 16px; }
        .btn-gold:hover { box-shadow: 0 8px 30px rgba(212,168,67,0.4); transform: translateY(-1px); }
        .tag { background: rgba(212,168,67,0.12); color: var(--gold); padding: 4px 14px; border-radius: 100px; font-size: 12px; font-weight: 600; letter-spacing: 0.5px; border: 1px solid rgba(212,168,67,0.25); display: inline-block; }
        .tag-gray { background: rgba(255,255,255,0.06); color: #999; padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 600; border: 1px solid #333; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); opacity: 0.3; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #555; margin-bottom: 8px; }
      `}</style>

      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: 'blur(20px)', background: 'rgba(13,13,13,0.85)', borderBottom: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #D4A843, #F0D078)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🧞</div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 800, color: '#F0D078' }}>Divine Successflow</span>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {[['About', '/about', false], ['Services', '/services', false], ['Portfolio', '/portfolio', true]].map(([label, href, active]) => (
              <a key={href} href={href} className="nav-link" style={{ fontSize: 14, fontWeight: 500, color: active ? '#D4A843' : '#999' }}>{label}</a>
            ))}
          </div>
        </div>
      </nav>

      <section style={{ padding: '140px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 60 }}>
          <p className="section-label">Portfolio</p>
          <h1 className="font-display" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, marginBottom: 16, lineHeight: 1.1 }}>
            Everything I've <span className="gradient-text">Built</span>
          </h1>
          <p style={{ color: '#666', maxWidth: 560, lineHeight: 1.7 }}>
            A living record of every project, pipeline, and plan. From AI agents to business blueprints — this is what "where Divine meets Digital" looks like.
          </p>
        </div>

        {/* Featured */}
        <p className="section-label" style={{ marginBottom: 20 }}>⭐ Featured Work</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: 20, marginBottom: 60 }}>
          {featured.map(p => (
            <div key={p.title} className="card-hover" style={{ borderRadius: 20, padding: 36, background: 'linear-gradient(135deg, rgba(212,168,67,0.08), rgba(240,208,120,0.02))', border: '1px solid rgba(212,168,67,0.2)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, background: 'radial-gradient(circle, rgba(212,168,67,0.1), transparent)', borderRadius: '50%' }} />
              <div style={{ fontSize: 52, marginBottom: 16 }}>{p.emoji}</div>
              <div style={{ marginBottom: 8 }}>
                <span className="tag">{p.category}</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 10, color: '#F0F0F0' }}>{p.title}</h3>
              <p style={{ color: '#888', lineHeight: 1.7, marginBottom: 20, fontSize: 14 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {p.tags.map(t => <span key={t} className="tag-gray">{t}</span>)}
              </div>
              {p.link.startsWith('http') ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '10px 24px', fontSize: 14 }}>
                  View Live →
                </a>
              ) : (
                <Link href={p.link} className="btn-gold" style={{ padding: '10px 24px', fontSize: 14 }}>
                  View Project →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* All projects */}
        <p className="section-label" style={{ marginBottom: 20 }}>📁 All Projects</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
          {rest.map(p => (
            <div key={p.title} className="card-hover bg-card" style={{ borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                <div style={{ fontSize: 36 }}>{p.emoji}</div>
                <div>
                  <div style={{ marginBottom: 4 }}>
                    <span className="tag" style={{ fontSize: 10, padding: '2px 8px' }}>{p.category}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#E8E8E8' }}>{p.title}</h3>
                </div>
              </div>
              <p style={{ color: '#777', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 16 }}>
                {p.tags.map(t => <span key={t} className="tag-gray">{t}</span>)}
              </div>
              {p.link.startsWith('http') ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: '#D4A843', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                  View → 
                </a>
              ) : (
                <span style={{ color: '#555', fontSize: 13 }}>In workspace</span>
              )}
            </div>
          ))}
        </div>

        {/* Stats footer */}
        <div className="divider" style={{ margin: '60px 0 40px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
          {[
            { n: '2', label: 'AI Agent Teams' },
            { n: '8', label: 'Business Plans' },
            { n: '9K+', label: 'Books Catalogued' },
            { n: '2K+', label: 'YT Channels' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #D4A843, #F0D078)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.n}</div>
              <div style={{ color: '#666', fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}