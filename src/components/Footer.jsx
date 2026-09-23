import { Camera } from 'lucide-react'
import { navItems, site } from '../lib/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark footer-mark" href="#top"><span>{site.shortName}</span><small>&amp; CO. BEAUTY STUDIO</small></a>
      <p>Rooted in {site.location} · Made for feeling good.</p>
      <div className="footer-links">
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        <a href={site.phoneHref}>Call to book</a>
        <a href="#top" aria-label="Back to top"><Camera size={17} aria-hidden="true" /></a>
      </div>
      <span className="forge-badge">Demo by Forge CT</span>
    </footer>
  )
}
