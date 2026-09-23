import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/Button'
import { DemoImage } from '../components/DemoImage'
import { PageLayout } from '../components/PageLayout'
import { Section } from '../components/Section'
import { site } from '../lib/site'

export function About() {
  return (
    <PageLayout><main className="page-shell about-page">
      <section className="about-hero section-pad"><div className="about-hero-copy"><p className="eyebrow">A little more about us</p><h1>Beauty should feel<br /><em>like a good idea.</em></h1><p className="page-lede">Juniper &amp; Co. is a fictional Farmington studio created for the Forge CT demo. The story below is intentionally simple: a welcoming local place for thoughtful beauty services and a little time to reset.</p><Button href={site.phoneHref} icon="phone">Call to book</Button></div><figure className="about-hero-image"><DemoImage src="/demo/IMG_9876.JPEG" alt="Hand holding a small glass bottle with glossy black and white nail art" className="about-photo about-photo-hero" /><figcaption>Licensed demo photography · Detail study</figcaption></figure></section>

      <Section className="about-story" eyebrow="The idea behind Juniper & Co." title="Made for the" titleEmphasis="in-between.">
        <div className="about-story-grid"><p>Not a rushed errand. Not a grand occasion either. Just a warm studio in Farmington where a haircut, facial, manicure, or fresh set of brows can be a small, practical way to make the week feel better.</p><p>The fictional studio is built around clear conversations, personal attention, and services that fit real routines. Come in with a plan or come in needing one. Either way, the welcome is easy.</p></div>
      </Section>

      <section className="about-photo-split section-pad"><div className="about-photo-column"><DemoImage src="/demo/IMG_9872.JPEG" alt="Hand with softly rounded green manicure against leafy greenery" className="about-photo about-photo-detail" /><span className="photo-role">Service detail</span></div><div className="about-photo-copy"><p className="eyebrow">The Juniper point of view</p><h2>Small details<br /><em>matter.</em></h2><p>We like the little things: a color that feels right in the window light, a shape that makes sense for your week, and enough time to talk through what you actually want.</p><a className="text-link" href="/services">See the service menu <ArrowUpRight size={16} aria-hidden="true" /></a></div></section>

      <section className="about-detail-grid section-pad"><div><DemoImage src="/demo/IMG_9869.JPEG" alt="Close-up of a hand with long glittery lavender nails" className="about-photo about-photo-small" /><span className="photo-role">Detail and texture</span></div><div><DemoImage src="/demo/IMG_9873.JPEG" alt="Close-up of a hand with bright green French-tip nail design" className="about-photo about-photo-small" /><span className="photo-role">Service detail</span></div></section>

      <section className="about-close section-pad"><div><p className="eyebrow">A fictional studio, made local</p><h2>Come as you are.<br /><em>We’ll take it from there.</em></h2></div><Button href={site.phoneHref} variant="secondary" icon="phone">Call {site.phone}</Button></section>
    </main></PageLayout>
  )
}
