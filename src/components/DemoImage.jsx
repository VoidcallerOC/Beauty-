import { useState } from 'react'

export function DemoImage({ src, alt, className = '', fallback = 'Approved demo photo will appear here.', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)

  if (failed) return <div className={`demo-image-fallback ${className}`} role="img" aria-label={fallback}><span>{fallback}</span></div>

  return <img className={`demo-image ${className}`} src={src} alt={alt} loading={loading} onError={() => setFailed(true)} />
}
