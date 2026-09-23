import { ArrowUpRight, Camera, Menu, Phone, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const phone = '(860) 555-0147'

const services = [
  { number: '01', title: 'Hair', copy: 'Cuts, color, and effortless styling that feels like you.', items: ['Signature cut', 'Dimensional color', 'Blowouts'] },
  { number: '02', title: 'Skin', copy: 'Quiet, results-minded rituals for your best skin days.', items: ['Custom facial', 'Dermaplane glow', 'Back treatment'] },
  { number: '03', title: 'Beauty', copy: 'The finishing touches for everyday ease and big moments.', items: ['Brow shaping', 'Lash lift', 'Event makeup'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="announcement"><span className="announcement-dot" /> Now welcoming new guests in Farmington <a href={`tel:${phone.replace(/\D/g, '')}`}>Call to book <ArrowUpRight size={14} /></a></div>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Juniper and Co. home"><span>Juniper</span><small>&amp; CO. BEAUTY STUDIO</small></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#visit" onClick={closeMenu}>Visit us</a>
          <a className="nav-cta" href={`tel:${phone.replace(/\D/g, '')}`} onClick={closeMenu}><Phone size={15} /> Call to book</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">A softer kind of beauty studio <span>✳</span></p>
            <h1>Come as you are.<br /><em>Leave feeling</em><br />like yourself.</h1>
            <p className="hero-intro">Thoughtful hair, skin, and beauty services in a warm, collected space in the heart of Farmington, Connecticut.</p>
            <div className="hero-actions"><a className="button button-dark" href={`tel:${phone.replace(/\D/g, '')}`}><Phone size={16} /> Call to book</a><a className="text-link" href="#services">Explore services <ArrowUpRight size={16} /></a></div>
            <div className="hero-note"><Sparkles size={16} /><span>Independent studio · By appointment · Farmington, CT</span></div>
          </div>
          <div className="hero-art" aria-label="Editorial beauty studio still life">
            <div className="sun-disc" /><div className="arch-shape" /><div className="plant-stem stem-one" /><div className="plant-stem stem-two" /><div className="plant-leaf leaf-one" /><div className="plant-leaf leaf-two" /><div className="plant-leaf leaf-three" />
            <div className="bottle bottle-one"><div className="bottle-cap" /><div className="bottle-label">JUNIPER<br /><small>no. 03</small></div></div>
            <div className="bottle bottle-two"><div className="bottle-cap" /><div className="bottle-label">GLOW<br /><small>ritual oil</small></div></div>
            <div className="art-caption"><span>01 / 04</span><span>Objects of ritual</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Studio values"><div>Hair <span>✳</span> Skin <span>✳</span> Beauty <span>✳</span> Good energy <span>✳</span> Local love <span>✳</span></div></section>

        <section className="services section-pad" id="services">
          <div className="section-heading"><div><p className="eyebrow">The menu</p><h2>Beauty, but make it <em>personal.</em></h2></div><p className="heading-note">No one-size-fits-all packages here. We’ll talk through what you want, what you need, and create a visit around it.</p></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span><ArrowUpRight size={19} /></div><h3>{service.title}</h3><p>{service.copy}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><a href={`tel:${phone.replace(/\D/g, '')}`}>Call for details <ArrowUpRight size={15} /></a></article>)}</div>
        </section>

        <section className="approach" id="approach"><div className="approach-image"><div className="image-mark">J<span>&amp;</span>C</div><div className="image-label">The art of<br /><em>taking your time</em></div></div><div className="approach-copy"><p className="eyebrow">Our approach</p><h2>A little more <em>human.</em></h2><p>We believe beauty appointments should feel like a reset, not another thing on your calendar. Our studio is intentionally small, our work is considered, and your time here is entirely yours.</p><p>Come in for the hair, stay for the conversation. Leave with a little more ease than you arrived with.</p><a className="text-link" href={`tel:${phone.replace(/\D/g, '')}`}>Meet us over the phone <ArrowUpRight size={16} /></a></div></section>

        <section className="visit section-pad" id="visit"><div><p className="eyebrow">Find your way here</p><h2>Make a little room<br /><em>for yourself.</em></h2></div><div className="visit-details"><div><span className="detail-label">Studio</span><p>Farmington, Connecticut<br />By appointment only</p></div><div><span className="detail-label">Hours</span><p>Tuesday–Saturday<br />Hours vary by service</p></div><a className="button button-sage" href={`tel:${phone.replace(/\D/g, '')}`}><Phone size={16} /> {phone}</a></div></section>
      </main>

      <footer className="site-footer"><a className="wordmark footer-mark" href="#top"><span>Juniper</span><small>&amp; CO. BEAUTY STUDIO</small></a><p>Rooted in Farmington, CT · Made for feeling good.</p><div className="footer-links"><a href="#services">Services</a><a href={`tel:${phone.replace(/\D/g, '')}`}>Call to book</a><a href="#top"><Camera size={17} aria-label="Social" /></a></div></footer>
    </div>
  )
}

export default App
