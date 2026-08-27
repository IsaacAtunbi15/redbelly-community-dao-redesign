import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, BookOpen, Check, ChevronDown, CircleUserRound, ExternalLink, GitBranch, LayoutDashboard, Menu, Moon, Network, Sun, Wallet, X } from 'lucide-react'

const nav = [
  { label: 'Explore', children: [['DAO Digest', '/digest'], ['Community Showcase', '/showcase'], ['Resources', '/resources']] },
  { label: 'Participate', children: [['Taskboard', '/taskboard'], ['Governance', '/governance'], ['Treasury', '/treasury']] },
  { label: 'Developers', to: '/developers' },
  { label: 'About', to: '/about' },
]

function Brand() {
  return <Link className="brand" to="/" aria-label="Redbelly Community DAO home"><span className="brand-logo-wrap"><img className="brand-logo brand-logo--light" src="/assets/Redbelly-Community-DAO logo-transparent.png" alt="Redbelly Community DAO" /><img className="brand-logo brand-logo--dark" src="/assets/Redbelly-Community-DAO logo-dark.png" alt="" aria-hidden="true" /></span></Link>
}

function DesktopNav() {
  return <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(item => item.children ? (
    <div className="nav-menu" key={item.label}>
      <button>{item.label}<ChevronDown size={14} /></button>
      <div className="nav-dropdown">{item.children.map(([label, to]) => <NavLink key={to} to={to}>{label}<ArrowRight size={14} /></NavLink>)}</div>
    </div>
  ) : <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav>
}

function ThemeToggle({ theme, onToggle }) {
  return <button className="icon-button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={onToggle}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
}

export function SiteLayout({ children, theme, onToggleTheme, wallet, onConnect, onJoin }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const memberMode = location.pathname.startsWith('/app/')

  return <div className="site-shell">
    {!memberMode && <div className="announcement"><span>Cycle 2 is live</span><Link to="/taskboard">Explore open tasks <ArrowRight size={13} /></Link></div>}
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <DesktopNav />
        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button className="button button--ghost join-desktop" onClick={onJoin}>Join the DAO</button>
          <button className={`button button--primary wallet-button ${wallet.address ? 'is-connected' : ''}`} onClick={onConnect}>
            {wallet.address ? <CircleUserRound size={17} /> : <Wallet size={17} />}
            {wallet.address ? `${wallet.address.slice(0, 5)}…${wallet.address.slice(-4)}` : 'Connect wallet'}
          </button>
          <button className="icon-button mobile-trigger" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={21} /></button>
        </div>
      </div>
    </header>
    <div className={`mobile-drawer ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
      <div className="mobile-drawer__top"><Brand /><button className="icon-button" aria-label="Close navigation" onClick={() => setMobileOpen(false)}><X /></button></div>
      <nav>{nav.flatMap(item => item.children || [[item.label, item.to]]).map(([label, to]) => <NavLink key={to} to={to} onClick={() => setMobileOpen(false)}>{label}<ArrowRight size={16} /></NavLink>)}</nav>
      <button className="button button--secondary button--wide" onClick={onJoin}>Join the DAO</button>
      <button className="button button--primary button--wide" onClick={onConnect}><Wallet size={17} />{wallet.address ? 'Open member space' : 'Connect wallet'}</button>
    </div>
    {mobileOpen && <button className="drawer-backdrop" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
    <main>{children}</main>
    {!memberMode && <Footer onJoin={onJoin} />}
  </div>
}

function Footer({ onJoin }) {
  return <footer className="site-footer">
    <div className="container">
      <div className="footer-cta"><div><span className="eyebrow eyebrow--light">Your next contribution starts here</span><h2>Help shape what Redbelly becomes.</h2></div><button className="button button--light" onClick={onJoin}>Join the community <ArrowRight size={17} /></button></div>
      <div className="footer-grid">
        <div className="footer-brand"><Brand /><p>An open contribution layer for the people building, governing and growing the Redbelly ecosystem.</p><div className="social-row"><a href="https://discord.com/invite/redbelly" aria-label="Discord">D</a><a href="https://x.com/redbellynetwork" aria-label="X">X</a><a href="https://github.com/redbellynetwork" aria-label="GitHub"><GitBranch size={16} /></a></div></div>
        <div><h3>Explore</h3><Link to="/digest">DAO Digest</Link><Link to="/showcase">Showcase</Link><Link to="/resources">Resources</Link></div>
        <div><h3>Participate</h3><Link to="/taskboard">Taskboard</Link><Link to="/governance">Governance</Link><Link to="/treasury">Treasury</Link></div>
        <div><h3>Build</h3><Link to="/developers">Developer start</Link><a href="https://vine.redbelly.network" target="_blank" rel="noreferrer">Technical docs <ExternalLink size={12} /></a><a href="https://redbelly.network" target="_blank" rel="noreferrer">Redbelly Network <ExternalLink size={12} /></a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Redbelly Community DAO</span><div><Link to="/resources">Privacy</Link><Link to="/resources">Terms</Link><span>Built in the open</span></div></div>
    </div>
  </footer>
}

export function WalletModal({ open, onClose, wallet, onConnect, onDemo, onSwitchNetwork }) {
  const panelRef = useRef(null)
  useEffect(() => {
    if (!open) return
    const handler = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])
  if (!open) return null
  return <div className="modal-wrap" role="dialog" aria-modal="true" aria-label="Connect wallet"><button className="modal-backdrop" onClick={onClose} aria-label="Close" /><div className="modal" ref={panelRef}>
    <div className="modal-head"><div className="icon-box icon-box--red"><Wallet size={20} /></div><button className="icon-button" onClick={onClose}><X size={19} /></button></div>
    {!wallet.address ? <>
      <h2>Enter the member space</h2><p>Connect your wallet to unlock your dashboard, tasks, notifications and governance actions.</p>
      <button className="wallet-option" onClick={onConnect}><span className="wallet-symbol">◇</span><span><b>Browser wallet</b><small>MetaMask, Rabby or another injected wallet</small></span><ArrowRight size={18} /></button>
      <button className="wallet-option" onClick={onDemo}><span className="wallet-symbol wallet-symbol--demo"><LayoutDashboard size={18} /></span><span><b>Preview member experience</b><small>Explore safely with a demo wallet</small></span><ArrowRight size={18} /></button>
      <p className="legal-note">By connecting, you agree to the DAO participation terms. We never request your private key.</p>
    </> : <>
      <div className="success-mark"><Check size={26} /></div><h2>Wallet connected</h2><p className="mono">{wallet.address}</p>
      <div className={`network-check ${wallet.correctNetwork ? 'is-good' : ''}`}><Network size={18} /><div><b>{wallet.correctNetwork ? 'Redbelly network detected' : 'Network switch required'}</b><small>{wallet.correctNetwork ? wallet.networkName : 'Switch to Redbelly Mainnet to participate'}</small></div>{wallet.correctNetwork && <Check size={18} />}</div>
      {!wallet.correctNetwork && <button className="button button--primary button--wide" onClick={() => onSwitchNetwork('mainnet')}>Switch to Redbelly Mainnet</button>}
      <Link className="button button--secondary button--wide" to="/app/dashboard" onClick={onClose}>Open dashboard <ArrowRight size={17} /></Link>
    </>}
  </div></div>
}

export function JoinModal({ open, onClose }) {
  const [step, setStep] = useState(1)
  const close = () => { setStep(1); onClose() }
  if (!open) return null
  const paths = [
    { icon: BookOpen, title: 'Learn & share', text: 'Research, education and community storytelling.' },
    { icon: LayoutDashboard, title: 'Take on tasks', text: 'Ship scoped work and earn reputation and rewards.' },
    { icon: Network, title: 'Build on Redbelly', text: 'Create tools, apps and infrastructure for the ecosystem.' },
  ]
  return <div className="modal-wrap" role="dialog" aria-modal="true" aria-label="Join the DAO"><button className="modal-backdrop" onClick={close} aria-label="Close"/><div className="modal modal--join">
    <div className="modal-head"><span className="eyebrow">Join the DAO · Step {step} of 2</span><button className="icon-button" onClick={close}><X size={19}/></button></div>
    {step === 1 ? <><h2>How would you like to contribute?</h2><p>Choose a starting point. You can always explore other paths later.</p><div className="join-paths">{paths.map(({icon: Icon, title, text}) => <button key={title} onClick={() => setStep(2)}><span className="icon-box"><Icon size={19}/></span><span><b>{title}</b><small>{text}</small></span><ArrowRight size={17}/></button>)}</div></> : <><div className="success-mark"><Check size={26}/></div><h2>You’re ready to find your place.</h2><p>Start with the public Taskboard, introduce yourself in Discord, or connect your wallet for the full member experience.</p><div className="join-actions"><Link className="button button--primary button--wide" to="/taskboard" onClick={close}>Explore open tasks <ArrowRight size={17}/></Link><a className="button button--secondary button--wide" href="https://discord.com/invite/redbelly" target="_blank" rel="noreferrer">Join Discord <ExternalLink size={15}/></a></div></>}
  </div></div>
}
