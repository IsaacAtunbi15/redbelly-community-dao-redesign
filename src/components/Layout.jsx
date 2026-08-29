import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Check, ChevronDown, ExternalLink, GitBranch, LayoutDashboard, LogOut, Menu, Moon, Network, Sun, Wallet, X } from 'lucide-react'

function Brand() {
  return <Link className="brand" to="/" aria-label="Redbelly Community DAO home"><span className="brand-logo-wrap"><img className="brand-logo brand-logo--light" src="/assets/Redbelly-Community-DAO logo-transparent.png" alt="Redbelly Community DAO" /><img className="brand-logo brand-logo--dark" src="/assets/Redbelly-Community-DAO logo-dark.png" alt="" aria-hidden="true" /></span></Link>
}

function ThemeToggle({ theme, onToggle }) {
  return <button className="icon-button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={onToggle}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
}

function WalletControl({ wallet, onConnect, onDisconnect }) {
  const [open, setOpen] = useState(false)
  if (!wallet.address) return <button className="button button--primary wallet-button" onClick={onConnect}><Wallet size={17}/> Connect Wallet</button>
  return <div className="wallet-control">
    <button className="wallet-account" onClick={() => setOpen(value => !value)} aria-expanded={open}><span className="wallet-account__dot"/><span className="mono">{wallet.address.slice(0,6)}…{wallet.address.slice(-4)}</span><ChevronDown size={14}/></button>
    {open && <div className="wallet-menu"><div><span>Connected account</span><strong className="mono">{wallet.address.slice(0,8)}…{wallet.address.slice(-6)}</strong><small>{wallet.networkName || 'Wallet connected'}</small></div><Link to="/app/dashboard" onClick={() => setOpen(false)}><LayoutDashboard size={16}/> Member dashboard</Link><button onClick={() => { setOpen(false); onDisconnect() }}><LogOut size={16}/> Disconnect Wallet</button></div>}
  </div>
}

export function SiteLayout({ children, theme, onToggleTheme, wallet, onConnect, onJoin, onDisconnect }) {
  const location = useLocation()
  const memberMode = location.pathname.startsWith('/app/')
  const [publicMenuOpen, setPublicMenuOpen] = useState(false)

  return <div className="site-shell">
    <header className={`site-header ${memberMode ? 'site-header--member' : 'site-header--public'}`}>
      <div className="container header-inner">
        <Brand />
        {memberMode ? <span className="member-space-label">DAO member space</span> : <nav className="public-nav" aria-label="Primary navigation"><NavLink to="/about">About DAO</NavLink><NavLink to="/governance">Governance</NavLink><NavLink to="/digest">DAO Digest</NavLink><NavLink to="/resources">Resources</NavLink></nav>}
        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <WalletControl wallet={wallet} onConnect={onConnect} onDisconnect={onDisconnect}/>
          {!memberMode && <button className="public-menu-trigger icon-button" onClick={() => setPublicMenuOpen(value => !value)} aria-expanded={publicMenuOpen} aria-label="Open navigation">{publicMenuOpen ? <X size={18}/> : <Menu size={18}/>}</button>}
        </div>
      </div>
      {!memberMode && publicMenuOpen && <div className="public-mobile-menu"><nav aria-label="Mobile navigation"><Link to="/about" onClick={() => setPublicMenuOpen(false)}>About DAO <ArrowRight size={15}/></Link><Link to="/governance" onClick={() => setPublicMenuOpen(false)}>Governance <ArrowRight size={15}/></Link><Link to="/digest" onClick={() => setPublicMenuOpen(false)}>DAO Digest <ArrowRight size={15}/></Link><Link to="/resources" onClick={() => setPublicMenuOpen(false)}>Resources <ArrowRight size={15}/></Link></nav><button className="button button--primary" onClick={() => { setPublicMenuOpen(false); onJoin() }}>Join Redbelly DAO <ArrowRight size={16}/></button></div>}
    </header>
    <main>{children}</main>
    {!memberMode && <Footer onJoin={onJoin} />}
  </div>
}

function Footer({ onJoin }) {
  return <footer className="site-footer">
    <div className="container">
      <div className="footer-compact"><div className="footer-brand"><Brand /><p>The community stakeholder layer supporting the Redbelly blockchain ecosystem.</p><button className="text-link" onClick={onJoin}>Enter the DAO <ArrowRight size={14}/></button></div><div><span>Explore</span><Link to="/about">About DAO</Link><Link to="/digest">DAO Digest</Link><Link to="/resources">Resources</Link></div><div><span>Participate</span><Link to="/governance">Governance</Link><Link to="/taskboard">Taskboard</Link><Link to="/treasury">Treasury</Link></div><div><span>Official</span><a href="https://discord.com/invite/redbelly" target="_blank" rel="noreferrer">Discord <ExternalLink size={12}/></a><a href="https://x.com/redbellynetwork" target="_blank" rel="noreferrer">X <ExternalLink size={12}/></a><a href="https://github.com/redbellynetwork" target="_blank" rel="noreferrer">GitHub <GitBranch size={12}/></a></div></div>
      <div className="footer-bottom"><span>© 2026 Redbelly Community DAO</span><div><Link to="/resources">Privacy</Link><Link to="/resources">Terms</Link><span>Built in the open</span></div></div>
    </div>
  </footer>
}

export function WalletModal({ open, onClose, wallet, onConnect, onDemo, onSwitchNetwork, onContinue, knownMember }) {
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
      <button className="button button--primary button--wide" onClick={() => { onClose(); onContinue() }}>{knownMember ? 'Enter DAO member space' : 'Continue to registration'} <ArrowRight size={17}/></button>
    </>}
  </div></div>
}

export function JoinModal({ open, onClose, wallet, onConnect, onDemo, knownMember, onRegister, onEnter }) {
  const [form, setForm] = useState({ name: '', email: '', region: '', interest: 'Community initiatives' })
  const close = () => { setForm({ name: '', email: '', region: '', interest: 'Community initiatives' }); onClose() }
  if (!open) return null
  const update = event => setForm(current => ({ ...current, [event.target.name]: event.target.value }))
  const submit = event => { event.preventDefault(); onRegister(form) }
  return <div className="modal-wrap" role="dialog" aria-modal="true" aria-label="Join the DAO"><button className="modal-backdrop" onClick={close} aria-label="Close"/><div className="modal modal--join onboarding-modal">
    <div className="modal-head"><span className="eyebrow">Join Redbelly DAO</span><button className="icon-button" onClick={close}><X size={19}/></button></div>
    {!wallet.address ? <><div className="onboarding-step"><span>01</span><small>Connect wallet</small><i/><span>02</span><small>Member details</small></div><h2>Start with your wallet.</h2><p>Your wallet identifies your DAO membership. Existing members go straight in; new members complete one short registration.</p><button className="wallet-option" onClick={onConnect}><span className="wallet-symbol">◇</span><span><b>Connect browser wallet</b><small>MetaMask, Rabby or another injected wallet</small></span><ArrowRight size={18}/></button><button className="wallet-option" onClick={onDemo}><span className="wallet-symbol wallet-symbol--demo"><LayoutDashboard size={18}/></span><span><b>Preview member experience</b><small>Use the registered demo member</small></span><ArrowRight size={18}/></button></> : knownMember ? <><div className="success-mark"><Check size={26}/></div><h2>Welcome back.</h2><p>This wallet is already registered with the DAO.</p><div className="registered-wallet mono">{wallet.address}</div><button className="button button--primary button--wide" onClick={() => { close(); onEnter() }}>Enter DAO member space <ArrowRight size={17}/></button></> : <><div className="onboarding-step"><span className="is-done"><Check size={12}/></span><small>Wallet connected</small><i/><span>02</span><small>Member details</small></div><h2>Complete your member profile.</h2><p>This is registration, not an application. It helps the DAO understand who is participating.</p><form className="onboarding-form" onSubmit={submit}><label><span>Name</span><input name="name" value={form.name} onChange={update} placeholder="Your name" required/></label><label><span>Email</span><input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label><label><span>Region</span><input name="region" value={form.region} onChange={update} placeholder="Country or region" required/></label><label><span>Primary interest</span><select name="interest" value={form.interest} onChange={update}><option>Community initiatives</option><option>Governance</option><option>Developer activity</option><option>Education & resources</option><option>Taskboard opportunities</option></select></label><button className="button button--primary button--wide" type="submit">Register and enter DAO <ArrowRight size={17}/></button></form></>}
  </div></div>
}
