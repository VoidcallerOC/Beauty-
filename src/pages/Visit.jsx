import { CalendarDays, Car, MapPin, Phone } from 'lucide-react'
import { Button } from '../components/Button'
import { PageLayout } from '../components/PageLayout'
import { Section } from '../components/Section'
import { site } from '../lib/site'

const hours = [
  ['Monday', 'Closed'],
  ['Tuesday to Friday', '9:00 am to 6:00 pm'],
  ['Saturday', '9:00 am to 3:00 pm'],
  ['Sunday', 'Closed'],
]

export function Visit() {
  return (
    <PageLayout><main className="page-shell visit-page">
      <Section className="page-intro" eyebrow="Find your way here" title="Close to home." titleEmphasis="Easy to find.">
        <p className="page-lede">Juniper &amp; Co. is a fictional neighborhood studio in Farmington, Connecticut. Details below are demo placeholders for Forge CT.</p>
        <Button href={site.phoneHref} icon="phone">Call to book</Button>
      </Section>
      <section className="visit-details-page section-pad"><div className="visit-card"><div className="visit-card-heading"><MapPin size={19} aria-hidden="true" /><span>Studio address</span></div><h2>Farmington, CT</h2><p><strong>Fictional demo address</strong><br />123 Demo Lane<br />Farmington, CT 06032</p><p className="detail-note">The address above is placeholder copy and does not represent a real business location.</p></div><div className="visit-card"><div className="visit-card-heading"><CalendarDays size={19} aria-hidden="true" /><span>Studio hours</span></div><table><tbody>{hours.map(([day, time]) => <tr key={day}><th scope="row">{day}</th><td>{time}</td></tr>)}</tbody></table><p className="detail-note">Demo hours shown for layout only. Call ahead to confirm availability.</p></div><div className="visit-card"><div className="visit-card-heading"><Car size={19} aria-hidden="true" /><span>Arrival notes</span></div><p><strong>Parking and access</strong><br />[COPY] Parking and accessibility details will be added once the fictional studio location is finalized.</p><p className="detail-note">For now, use this space to communicate the easiest way to arrive.</p></div><div className="visit-card"><div className="visit-card-heading"><Phone size={19} aria-hidden="true" /><span>Call to book</span></div><h2><a href={site.phoneHref}>{site.phone}</a></h2><p>Phone booking only for now. We will help you find the right service and timing.</p></div></section>
      <section className="map-panel section-pad"><div className="map-placeholder map-placeholder-large" role="img" aria-label="Map placeholder showing the fictional Farmington location"><MapPin size={28} aria-hidden="true" /><strong>Farmington, CT</strong><span>Map placeholder for demo content</span></div></section>
    </main></PageLayout>
  )
}
