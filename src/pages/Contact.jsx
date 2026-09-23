import { useState } from 'react'
import { Button } from '../components/Button'
import { PageLayout } from '../components/PageLayout'
import { Section } from '../components/Section'
import { site } from '../lib/site'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageLayout><main className="page-shell contact-page">
      <Section className="page-intro" eyebrow="Get in touch" title="Let’s talk" titleEmphasis="beauty.">
        <p className="page-lede">Have a question about a service or want help finding a place to start? Call the studio or send a note below.</p>
        <div className="contact-quick-links"><a href={site.phoneHref}><span>Call to book</span>{site.phone}</a><a href="mailto:hello@juniper-demo.example"><span>Email placeholder</span>hello@juniper-demo.example</a></div>
      </Section>
      <section className="contact-layout section-pad"><div className="contact-form-wrap"><div className="form-heading"><p className="eyebrow">A quick note</p><h2>What can we help<br /><em>with?</em></h2></div>{submitted ? <div className="form-success" role="status"><strong>Thanks for the note.</strong><p>This is a demo form, so no message was sent. In a live build, this is where the studio’s chosen contact workflow would begin.</p><button className="button button-text" type="button" onClick={() => setSubmitted(false)}>Send another demo note</button></div> : <form onSubmit={handleSubmit}><label>Name<input name="name" type="text" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" /></label><label>Message<textarea name="message" rows="5" required /></label><p className="form-hint">Demo only. This form does not send or store messages.</p><Button type="submit" icon="arrow">Send demo note</Button></form>}</div><aside className="contact-aside"><div><p className="eyebrow">Prefer a real conversation?</p><h2>Call us<br /><em>directly.</em></h2><p>Booking is by phone for now. We can talk through what you have in mind and point you in the right direction.</p><Button href={site.phoneHref} variant="secondary" icon="phone">Call {site.phone}</Button></div></aside></section>
    </main></PageLayout>
  )
}
