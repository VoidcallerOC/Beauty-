import { ArrowUpRight, CalendarDays, MapPin, Phone, Sparkles } from 'lucide-react'
import { Button } from '../components/Button'
import { DemoImage } from '../components/DemoImage'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { site } from '../lib/site'

const services = [
  { title: 'Hair', copy: 'Cuts, color, and styling shaped around your routine.' },
  { title: 'Skin', copy: 'Focused facials and skin rituals for a fresh, rested glow.' },
  { title: 'Beauty', copy: 'Brows, lashes, and makeup for everyday or an occasion.' },
]

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main id="top" className="home">
        <section className="home-hero section-pad">
          <div className="home-hero-copy">
            <p className="eyebrow">Juniper &amp; Co. Beauty Studio <span aria-hidden="true">✳</span></p>
            <h1>Good hair days.<br /><em>Good skin days.</em><br />Good days.</h1>
            <p className="home-hero-intro">A warm, straightforward beauty studio for hair, skin, and the finishing touches, right here in Farmington, Connecticut.</p>
            <div className="hero-actions"><Button href={site.phoneHref} icon="phone">Call to book</Button><a className="text-link" href="#services">Explore services <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            <div className="hero-location"><MapPin size={15} aria-hidden="true" /><span>Farmington, CT · By appointment</span></div>
          </div>
          <figure className="hero-placeholder">
            <DemoImage src="/demo/IMG_9876.JPEG" alt="Hand holding a small glass bottle with glossy black and white nail art" className="home-hero-photo" loading="eager" />
            <figcaption>Licensed demo photography · Detail study</figcaption>
          </figure>
        </section>

        <Section id="services" className="services-preview" eyebrow="A considered menu" title="Start with what" titleEmphasis="you need.">
          <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-top"><span>0{index + 1}</span><ArrowUpRight size={19} aria-hidden="true" /></div><h3>{service.title}</h3><p>{service.copy}</p><a href={site.phoneHref}>Call for details <ArrowUpRight size={15} aria-hidden="true" /></a></article>)}</div>
        </Section>

        <section className="why-here section-pad" id="why-here">
          <div className="why-here-mark" aria-hidden="true"><Sparkles size={25} /><span>J&amp;C</span></div>
          <div className="why-here-copy"><p className="eyebrow">Why here</p><h2>Beauty that fits<br /><em>real life.</em></h2><p>Come for the service, stay for the ease. Juniper &amp; Co. is a small local studio built around personal attention, clear recommendations, and a visit that feels welcoming from the start.</p><p>No overcomplication. No hard sell. Just thoughtful work close to home.</p></div>
          <div className="why-here-points"><div><strong>01</strong><span>Personal attention</span><p>A visit shaped around you, not a menu of fixed packages.</p></div><div><strong>02</strong><span>Straightforward service</span><p>Clear conversations and practical beauty advice.</p></div><div><strong>03</strong><span>Local and welcoming</span><p>Easy to find in Farmington, with time to settle in.</p></div></div>
        </section>

        <section className="visit-strip section-pad" id="visit"><div className="visit-strip-heading"><p className="eyebrow">Plan your visit</p><h2>Close to home.<br /><em>Easy to find.</em></h2><a className="text-link" href={site.phoneHref}>Call to book <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="visit-info"><div className="visit-detail"><MapPin size={18} aria-hidden="true" /><div><span>Location</span><p>Farmington, CT<br /><small>[COPY] Address coming soon</small></p></div></div><div className="visit-detail"><CalendarDays size={18} aria-hidden="true" /><div><span>Hours</span><p>Tuesday to Saturday<br /><small>[COPY] Hours vary by service</small></p></div></div><div className="visit-detail"><Phone size={18} aria-hidden="true" /><div><span>Call to book</span><p><a href={site.phoneHref}>{site.phone}</a><br /><small>Phone booking only for now</small></p></div></div></div><div className="map-placeholder" role="img" aria-label="Map placeholder for Juniper and Co. in Farmington, Connecticut"><MapPin size={25} aria-hidden="true" /><span>Farmington, CT</span><small>Map placeholder</small></div></section>

        <section className="final-cta section-pad"><div><p className="eyebrow">Your next good day</p><h2>Ready when<br /><em>you are.</em></h2></div><div className="final-cta-copy"><p>Tell us what you have in mind and we’ll find the right place to start.</p><Button href={site.phoneHref} icon="phone">Call to book</Button></div></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
