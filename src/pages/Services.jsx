import { ArrowUpRight } from 'lucide-react'
import { Button } from '../components/Button'
import { PageLayout } from '../components/PageLayout'
import { Section } from '../components/Section'
import { site } from '../lib/site'

const categories = [
  {
    name: 'Hair',
    intro: 'Easy, wearable hair with a little room for change.',
    services: [
      ['Signature cut', 'A thoughtful cut, finish, and a few tips for styling at home.', '$75 demo pricing'],
      ['Dimensional color', 'Natural-looking brightness and tone tailored to your starting point.', '$185 demo pricing'],
      ['Studio blowout', 'A polished wash and finish for a night out or a good reset.', '$55 demo pricing'],
    ],
  },
  {
    name: 'Skin',
    intro: 'Focused treatments that leave your skin feeling cared for.',
    services: [
      ['Custom facial', 'A calm, tailored facial built around how your skin is feeling today.', '$115 demo pricing'],
      ['Dermaplane glow', 'Gentle exfoliation and hydration for a smooth, fresh finish.', '$95 demo pricing'],
      ['Back treatment', 'A clarifying and soothing treatment for hard-to-reach skin.', '$90 demo pricing'],
    ],
  },
  {
    name: 'Beauty',
    intro: 'The finishing touches for regular days and special plans.',
    services: [
      ['Brow shaping', 'A simple shape and tidy finish that keeps your features feeling like yours.', '$32 demo pricing'],
      ['Lash lift', 'A low-maintenance lift for a brighter-looking eye area.', '$85 demo pricing'],
      ['Event makeup', 'Soft, comfortable makeup for a celebration, photo day, or dinner out.', '$125 demo pricing'],
    ],
  },
]

export function Services() {
  return (
    <PageLayout><main className="page-shell services-page">
      <Section className="page-intro" eyebrow="The service menu" title="A little time" titleEmphasis="for you.">
        <p className="page-lede">Thoughtful hair, skin, and beauty services in one warm Farmington studio. Start with what sounds good, and we can talk through the rest.</p>
        <Button href={site.phoneHref} icon="phone">Call to book</Button>
      </Section>
      <div className="service-menu section-pad">{categories.map((category) => <section className="menu-category" key={category.name}><div className="menu-category-heading"><h2>{category.name}</h2><p>{category.intro}</p></div><div className="menu-list">{category.services.map(([name, copy, price]) => <article className="menu-item" key={name}><div><h3>{name}</h3><p>{copy}</p></div><div className="menu-item-meta"><span>{price}</span><a href={site.phoneHref} aria-label={`Call to ask about ${name}`}>Ask about this <ArrowUpRight size={15} aria-hidden="true" /></a></div></article>)}</div></section>)}</div>
      <section className="page-callout section-pad"><div><p className="eyebrow">Not sure where to start?</p><h2>We can make a plan<br /><em>together.</em></h2></div><Button href={site.phoneHref} variant="secondary" icon="phone">Call {site.phone}</Button></section>
    </main></PageLayout>
  )
}
