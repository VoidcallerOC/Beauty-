export function Section({ id, className = '', eyebrow, title, titleEmphasis, description, children }) {
  return (
    <section id={id} className={`section section-pad ${className}`.trim()}>
      {(eyebrow || title || description) && (
        <div className="section-heading">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}{titleEmphasis && <> <em>{titleEmphasis}</em></>}</h2>}
          </div>
          {description && <p className="heading-note">{description}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
