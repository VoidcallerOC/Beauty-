import { ArrowUpRight, Phone } from 'lucide-react'

const icons = {
  phone: Phone,
  arrow: ArrowUpRight,
}

export function Button({ children, href, variant = 'primary', icon, className = '', ...props }) {
  const Icon = icon ? icons[icon] : null
  const classes = `button button-${variant} ${className}`.trim()
  const content = <>{Icon && <Icon size={16} aria-hidden="true" />}{children}</>

  if (href) return <a className={classes} href={href} {...props}>{content}</a>
  return <button className={classes} type="button" {...props}>{content}</button>
}
