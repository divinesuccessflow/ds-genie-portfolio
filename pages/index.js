import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Divine Successflow — Where Divine Meets Digital</title>
        <meta name="description" content="AI-powered business transformation. Divine Successflow helps solopreneurs build, launch, and scale with AI agents." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <style>{`
        :root {
          --gold: #D4A843;
          --gold-light: #F0D078;
          --dark: #0D0D0D;
          --dark-card: #161616;
          --dark-border: #2A2A2A;
        }
        body { background: var(--dark); color: #E8E8E8; font-family: 'Inter', sans-serif; margin: 0; }
        .font-display { font-family: 'Playfair Display', serif; }
        .text-gold { color: var(--gold); }
        .text-gold-light { color: var(--gold-light); }
        .bg-gold { background: var(--gold); }
        .border-gold { border-color: var(--gold); }
        .bg-card { background: var(--dark-card); border: 1px solid var(--dark-border); }
        .gradient-gold { background: linear-gradient(135deg, var(--gold), var(--gold-light)); }
        .gradient-text {
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-link { color: #999; text-decoration: none; transition: color 0.3s; }
        .nav-link:hover { color: var(--gold); }
        .card-hover { transition: transform 0.3s, box-shadow 0.3s; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(212,168,67,0.15); }
        .glow { box-shadow: 0 0 40px rgba(212,168,67,0.2); }
        .btn-gold {
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #0D0D0D;
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        .btn-gold:hover { box-shadow: 0 8px 30px rgba(212,168,67,0.4); transform: translateY(-1px); }
        .btn-outline {
          border: 1.5px solid var(--gold);
          color: var(--gold);
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s;
        }
        .btn-outline:hover { background: rgba(212,168,67,0.1); }
        .tag { background: rgba(212,168,67,0.12); color: var(--gold); padding: 4px 14px; border-radius: 100px; font-size: 12px; font-weight: 600; letter-spacing: 0.5px; border: 1px solid rgba(212,168,67,0.25); }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); opacity: 0.3; }
        .stat-number { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 800; }
      `}</style>

      {/* Navbar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backdropFilter: 'blur(20px)', background: 'rgba(13,13,13,0.85)', borderBottom: '1px solid #2A2A2A' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #D4A843, #F0D078)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🧞</div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 800, color: '#F0D078' }}>Divine Successflow</span>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {[['About', '/about'], ['Services', '/services'], ['Portfolio', '/portfolio']].map(([label, href]) => (
              <Link key={href} href={href} className="nav-link" style={{ fontSize: 14, fontWeight: 500 }}>{label}</Link>
            ))}
            <Link href="/portfolio" className="btn-gold" style={{ padding: '8px 20px', fontSize: 14 }}>View Work</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,168,67,0.06) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 860 }}>
          <div className="tag" style={{ marginBottom: 28, display: 'inline-block' }}>⚡ AI Prosperity Project Cohort — Enrolling Now</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, color: '#F5F5F5' }}>
            Where <span className="gradient-text">Divine</span> Meets<br />
            <span className="gradient-text">Digital</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#888', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.7 }}>
            AI-powered business transformation for solopreneurs. From app development to content machines, we build the systems that compound your success.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/portfolio" className="btn-gold">Explore My Work →</Link>
            <Link href="/services" className="btn-outline">View Services</Link>
          </div>
          <div className="divider" style={{ margin: '60px 0 40px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, maxWidth: 600, margin: '0 auto' }}>
            {[
              { n: '10+', label: 'AI Businesses Designed' },
              { n: '50K+', label: 'Lines of Code Shipped' },
              { n: '150K+', label: 'Social Audience' },
              { n: '∞', label: 'Vision & Drive' },
            ].map(s => (
              <div key={s.label}>
                <div className="stat-number gradient-text">{s.n}</div>
                <div style={{ color: '#666', fontSize: 13, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 className="font-display" style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: 14 }}>What I <span className="gradient-text">Build</span></h2>
          <p style={{ color: '#666', maxWidth: 500, margin: '0 auto' }}>End-to-end AI systems — from strategy to deployment.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {[
            { emoji: '🧞', title: 'AI Agent Teams', desc: 'Multi-agent systems built from classic + billionaire wisdom — orchestrated, specialized, and relentless.' },
            { emoji: '🤖', title: 'Autonomous Agents', desc: 'AI agents that run sales, content, and operations 24/7 — so you can focus on what matters.' },
            { emoji: '🌐', title: 'Web Apps & Platforms', desc: 'Full-stack builds deployed to Vercel. From landing pages to full SaaS products.' },
            { emoji: '📹', title: 'Content Machines', desc: 'AI-powered video pipelines, faceless channels, viral hooks, and full content calendars.' },
            { emoji: '💰', title: 'Business Systems', desc: '8 detailed business plans across AI, content, sales, and M&A — all modeled to exit velocity.' },
            { emoji: '📊', title: 'Data & Intelligence', desc: '9,400+ books, 2,200+ YouTube channels, and pipelines that turn information into edge.' },
          ].map(card => (
            <div key={card.title} className="card-hover bg-card" style={{ borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>{card.emoji}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 10, color: '#F0F0F0' }}>{card.title}</h3>
              <p style={{ color: '#777', lineHeight: 1.6, fontSize: 14 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', background: 'linear-gradient(135deg, rgba(212,168,67,0.08), rgba(240,208,120,0.03))', border: '1px solid rgba(212,168,67,0.2)', borderRadius: 24, padding: 64 }}>
          <h2 className="font-display" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 14 }}>
            Ready to <span className="gradient-text">Build</span>?
          </h2>
          <p style={{ color: '#777', marginBottom: 32, lineHeight: 1.6 }}>
            The AI Prosperity Project is a 10-week cohort launching March 11, 2026. Learn to build, sell, and scale with AI — end to end.
          </p>
          <Link href="/portfolio" className="btn-gold" style={{ fontSize: 18, padding: '14px 40px' }}>See Everything I Have →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #2A2A2A', padding: '40px 24px', textAlign: 'center', color: '#555', fontSize: 13 }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontFamily: 'Playfair Display, serif', color: '#D4A843', marginRight: 8 }}>🧞</span>
          <span style={{ color: '#888', fontWeight: 600 }}>Divine Successflow</span>
        </div>
        <p>Where Divine Meets Digital. Built with AI, deployed with heart.</p>
      </footer>
    </>
  );
}