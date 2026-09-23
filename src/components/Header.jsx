import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './Button'
import { MobileNav } from './MobileNav'
import { navItems, site } from '../lib/site'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  return (
    <>
      <div className="announcement"><span className="announcement-dot" aria-hidden="true" /> Now welcoming new guests in Farmington <a href={site.phoneHref}>Call to book <span aria-hidden="true">↗</span></a></div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={`${site.name} home`}><span>{site.shortName}</span><small>&amp; CO. BEAUTY STUDIO</small></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu size={22} /></button>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <Button href={site.phoneHref} variant="secondary" icon="phone">Call to book</Button>
        </nav>
      </header>
      <div id="mobile-navigation"><MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} /></div>
    </>
  )
}
