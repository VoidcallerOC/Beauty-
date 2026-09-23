import { Footer } from './Footer'
import { Header } from './Header'

export function PageLayout({ children }) {
  return <div className="site-shell"><Header />{children}<Footer /></div>
}
