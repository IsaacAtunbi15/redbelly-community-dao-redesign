import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Eyebrow({ children, tone = 'default' }) {
  return <span className={`eyebrow eyebrow--${tone}`}>{children}</span>
}

export function PageHero({ eyebrow, title, description, children, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}>
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, action, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action}
    </div>
  )
}

export function TextLink({ to, children, external = false }) {
  const inner = <>{children}<ArrowRight size={16} /></>
  return external
    ? <a className="text-link" href={to} target="_blank" rel="noreferrer">{inner}</a>
    : <Link className="text-link" to={to}>{inner}</Link>
}

export function Stat({ label, value, detail }) {
  return <div className="stat"><span>{label}</span><strong>{value}</strong>{detail && <small>{detail}</small>}</div>
}

export function StatusChip({ children, tone }) {
  const derived = tone || children.toLowerCase().replaceAll(' ', '-')
  return <span className={`status status--${derived}`}>{children}</span>
}

export function Breadcrumbs({ items }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, i) => <span key={item}>{i > 0 && <ChevronRight size={13} />}{item}</span>)}</nav>
}

export function EmptyState({ icon: Icon, title, description, action }) {
  return <div className="empty-state"><span className="icon-box"><Icon size={22} /></span><h3>{title}</h3><p>{description}</p>{action}</div>
}
