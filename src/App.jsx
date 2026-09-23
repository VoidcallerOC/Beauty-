import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Button } from './components/Button'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { site } from './lib/site'

const services = [
  { number: '01', title: 'Hair', copy: 'Cuts, color, and effortless styling that feels like you.', items: ['Signature cut', 'Dimensional color', 'Blowouts'] },
  { number: '02', title: 'Skin', copy: 'Quiet, results-minded rituals for your best skin days.', items: ['Custom facial', 'Dermaplane glow', 'Back treatment'] },
  { number: '03', title: 'Beauty', copy: 'The finishing touches for everyday ease and big moments.', items: ['Brow shaping', 'Lash lift', 'Event makeup'] },
]

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">A softer kind of beauty studio <span aria-hidden="true">✳</span></p>
            <h1>Come as you are.<br /><em>Leave feeling</em><br />like yourself.</h1>
            <p className="hero-intro">Thoughtful hair, skin, and beauty services in a warm, collected space in the heart of Farmington, Connecticut.</p>
            <div className="hero-actions"><Button href={site.phoneHref} icon="phone">Call to book</Button><a className="text-link" href="#services">Explore services <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            <div className="hero-note"><Sparkles size={16} aria-hidden="true" /><span>Independent studio · By appointment · {site.location}</span></div>
          </div>
          <div className="hero-art" role="img" aria-label="Abstract still life inspired by the beauty studio">
            <div className="sun-disc" /><div className="arch-shape" /><div className="plant-stem stem-one" /><div className="plant-stem stem-two" /><div className="plant-leaf leaf-one" /><div className="plant-leaf leaf-two" /><div className="plant-leaf leaf-three" />
            <div className="bottle bottle-one"><div className="bottle-cap" /><div className="bottle-label">JUNIPER<br /><small>no. 03</small></div></div>
            <div className="bottle bottle-two"><div className="bottle-cap" /><div className="bottle-label">GLOW<br /><small>ritual oil</small></div></div>
            <div className="art-caption"><span>01 / 04</span><span>Objects of ritual</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Studio values"><div>Hair <span>✳</span> Skin <span>✳</span> Beauty <span>✳</span> Good energy <span>✳</span> Local love <span>✳</span></div></section>

        <Section id="services" className="services" eyebrow="The menu" title="Beauty, but make it" titleEmphasis="personal." description="No one-size-fits-all packages here. We’ll talk through what you want, what you need, and create a visit around it.">
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span><ArrowUpRight size={19} aria-hidden="true" /></div><h3>{service.title}</h3><p>{service.copy}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><a href={site.phoneHref}>Call for details <ArrowUpRight size={15} aria-hidden="true" /></a></article>)}</div>
        </Section>

        <section className="approach" id="approach"><div className="approach-image" role="img" aria-label="Abstract Juniper and Co. studio artwork"><div className="image-mark">J<span>&amp;</span>C</div><div className="image-label">The art of<br /><em>taking your time</em></div></div><div className="approach-copy"><p className="eyebrow">Our approach</p><h2>A little more <em>human.</em></h2><p>We believe beauty appointments should feel like a reset, not another thing on your calendar. Our studio is intentionally small, our work is considered, and your time here is entirely yours.</p><p>Come in for the hair, stay for the conversation. Leave with a little more ease than you arrived with.</p><a className="text-link" href={site.phoneHref}>Meet us over the phone <ArrowUpRight size={16} aria-hidden="true" /></a></div></section>

        <Section id="visit" className="visit" eyebrow="Find your way here" title="Make a little room" titleEmphasis="for yourself.">
          <div className="visit-details"><div><span className="detail-label">Studio</span><p>{site.location}<br />By appointment only</p></div><div><span className="detail-label">Hours</span><p>Tuesday–Saturday<br />Hours vary by service</p></div><Button href={site.phoneHref} variant="secondary" icon="phone">{site.phone}</Button></div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default App
