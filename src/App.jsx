import { useEffect, useState } from 'react'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import Home from './pages/Home'
import { Services } from './pages/Services'
import { Visit } from './pages/Visit'

function routeFor(pathname) {
  if (pathname === '/about') return 'about'
  if (pathname === '/services') return 'services'
  if (pathname === '/visit') return 'visit'
  if (pathname === '/contact') return 'contact'
  return 'home'
}

const pageMetadata = {
  home: {
    title: 'Juniper & Co. Beauty Studio | Farmington, CT',
    description: 'A warm, straightforward beauty studio demo for hair, skin, and beauty services in Farmington, Connecticut.',
  },
  about: {
    title: 'About | Juniper & Co. Beauty Studio',
    description: 'The fictional local story behind Juniper & Co. Beauty Studio in Farmington, Connecticut.',
  },
  services: {
    title: 'Services | Juniper & Co. Beauty Studio',
    description: 'Explore the fictional hair, skin, and beauty service menu for Juniper & Co. in Farmington, Connecticut.',
  },
  visit: {
    title: 'Visit | Juniper & Co. Beauty Studio',
    description: 'Find the fictional Juniper & Co. studio details, demo hours, phone number, and arrival notes in Farmington, Connecticut.',
  },
  contact: {
    title: 'Contact | Juniper & Co. Beauty Studio',
    description: 'Call or send a demo note to Juniper & Co. Beauty Studio in Farmington, Connecticut.',
  },
}

function setMeta(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function App() {
  const [route, setRoute] = useState(() => routeFor(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setRoute(routeFor(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const metadata = pageMetadata[route] || pageMetadata.home
    document.title = metadata.title
    setMeta('name', 'description', metadata.description)
    setMeta('property', 'og:title', metadata.title)
    setMeta('property', 'og:description', metadata.description)
    setMeta('property', 'og:image', '/og-placeholder.svg')
  }, [route])

  if (route === 'services') return <><Services /></>
  if (route === 'about') return <><About /></>
  if (route === 'visit') return <><Visit /></>
  if (route === 'contact') return <><Contact /></>
  return <Home />
}

export default App
