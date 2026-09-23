import { X } from 'lucide-react'
import { Button } from './Button'
import { navItems, site } from '../lib/site'

export function MobileNav({ open, onClose }) {
  if (!open) return null

  return (
    <div className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div className="mobile-nav-header">
        <span className="mobile-nav-title">Menu</span>
        <button className="mobile-nav-close" type="button" aria-label="Close navigation" onClick={onClose}><X size={21} /></button>
      </div>
      <nav aria-label="Mobile navigation">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={onClose}>{item.label}</a>)}
      </nav>
      <Button href={site.phoneHref} variant="primary" icon="phone" onClick={onClose}>Call to book</Button>
    </div>
  )
}
