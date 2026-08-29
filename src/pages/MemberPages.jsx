import { useState } from 'react'
import { ArrowRight, Bell, BookOpen, CheckCircle2, ChevronRight, Code2, ExternalLink, FileText, LayoutDashboard, ListChecks, Menu, PanelLeftClose, Pin, Settings, Sparkles, Vote, WalletCards, X } from 'lucide-react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import { Eyebrow, StatusChip } from '../components/UI'
import { ResourcesPage, TaskboardPage, TreasuryPage } from './PublicPages'
import { tasks } from '../data/content'

const memberLinks = [
  [LayoutDashboard, 'Dashboard', '/app/dashboard'],
  [Vote, 'Voting / Snapshot', '/app/voting'],
  [FileText, 'Proposals', '/app/proposals'],
  [WalletCards, 'Treasury', '/app/treasury'],
  [ListChecks, 'Taskboard', '/app/taskboard'],
  [Sparkles, 'Community Showcase', '/app/showcase'],
  [BookOpen, 'Resources', '/app/resources'],
  [Code2, 'Developers', '/developers'],
  [Bell, 'Notifications', '/app/notifications'],
]

function MemberNav({ wallet, pinned, onPin, mobileOpen, onClose }) {
  return <aside className={`member-sidebar ${pinned ? 'is-pinned' : ''} ${mobileOpen ? 'is-mobile-open' : ''}`}>
    <div className="member-id"><span>{wallet.address?.slice(2,4).toUpperCase()}</span><div className="member-nav-copy"><b>DAO member</b><small className="mono">{wallet.address?.slice(0,7)}…{wallet.address?.slice(-5)}</small></div><button className="sidebar-pin" onClick={onPin} aria-label={pinned ? 'Collapse sidebar' : 'Pin sidebar'}>{pinned ? <PanelLeftClose/> : <Pin/>}</button><button className="sidebar-mobile-close" onClick={onClose} aria-label="Close member navigation"><X/></button></div>
    <nav>{memberLinks.map(([Icon,label,to]) => <NavLink to={to} key={to} onClick={onClose}><Icon/><span className="member-nav-copy">{label}</span>{label === 'Notifications' && <em className="member-nav-copy">3</em>}</NavLink>)}</nav>
    <div className="member-sidebar__foot"><CheckCircle2/><div className="member-nav-copy"><span>Connected</span><b>{wallet.networkName || 'Redbelly network'}</b></div></div>
  </aside>
}

export function MemberLayout({ wallet, registered, children }) {
  const [pinned, setPinned] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  if (!wallet.address || !registered) return <Navigate to="/" replace />
  return <div className={`member-shell ${pinned ? 'sidebar-pinned' : ''}`}><MemberNav wallet={wallet} pinned={pinned} onPin={() => setPinned(value => !value)} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)}/>{mobileOpen && <button className="member-sidebar-backdrop" onClick={() => setMobileOpen(false)} aria-label="Close navigation"/>}<div className="member-content"><header className="member-mobile-head"><button className="icon-button" onClick={() => setMobileOpen(true)}><Menu/></button><span>DAO member space</span><span className="mono">{wallet.address.slice(0,5)}…{wallet.address.slice(-4)}</span></header>{children}</div></div>
}

export function DashboardPage({ wallet, registered }) {
  return <MemberLayout wallet={wallet} registered={registered}><div className="member-page member-dashboard"><section className="member-welcome member-welcome--editorial"><div><Eyebrow>Member overview</Eyebrow><h1>The DAO,<br/><span>without the noise.</span></h1><p>Your personal context and the state of the community in one deliberate view.</p></div><div className="member-account-summary"><span><i/> Registered member</span><strong className="mono">{wallet.address.slice(0,8)}…{wallet.address.slice(-6)}</strong><small>{wallet.networkName || 'Redbelly network'} · Wallet connected</small></div></section>
    <section className="member-priority"><div><span>For you</span><h2>Your next action belongs here.</h2><p>Relevant votes, assigned work and account notices will appear in this focused area.</p></div><div><span>Participation</span><h2>Your contribution record belongs here.</h2><p>Member-specific governance and contribution activity will appear after integrations are connected.</p></div></section>
    <div className="feed-heading feed-heading--editorial"><div><Eyebrow>DAO activity</Eyebrow><h2>What changed while you were away.</h2></div><span>One feed · Connected DAO sources</span></div>
    <section className="member-stream-layout"><div className="member-stream">
      <article><span>01</span><div><small>Snapshot</small><h3>Current voting activity</h3><p>Active proposals, voting windows and your participation status go here.</p></div><Link to="/app/voting">Open voting <ArrowRight/></Link></article>
      <article><span>02</span><div><small>Decisions</small><h3>Recently approved proposals</h3><p>The latest decisions and their implementation status go here.</p></div><Link to="/app/voting">View decisions <ArrowRight/></Link></article>
      <article><span>03</span><div><small>Treasury</small><h3>Budget and treasury movement</h3><p>Current RBNT position, approved budgets and recent activity go here.</p></div><Link to="/app/treasury">Open treasury <ArrowRight/></Link></article>
      <article><span>04</span><div><small>Community</small><h3>Updates across the DAO</h3><p>Working-group notes, announcements and community activity go here.</p></div><Link to="/app/showcase">View community <ArrowRight/></Link></article>
      <article><span>05</span><div><small>Taskboard</small><h3>Contribution activity</h3><p>New opportunities, active tasks and completed community work go here.</p></div><Link to="/app/taskboard">Open Taskboard <ArrowRight/></Link></article>
    </div><aside className="member-feed-rail"><div className="member-digest-card"><span>DAO DIGEST · 04</span><h3>Missed a week?<br/>Start here.</h3><p>The editorial summary of proposals, projects and community activity.</p><Link to="/digest">Read the Digest <ArrowRight/></Link></div><div className="member-identity-card"><span>Membership</span><strong>Registration complete</strong><p>Your wallet is recognised in this local prototype.</p><Link to="/app/profile">View member profile <ArrowRight/></Link></div></aside></section>
  </div></MemberLayout>
}

export function VotingPage({ wallet, registered }) {
  return <MemberLayout wallet={wallet} registered={registered}><div className="member-page"><MemberPageHead eyebrow="Voting / Snapshot" title="Community decisions" description="Active votes and recent outcomes in one focused view." action={<a className="button button--primary" href="https://snapshot.org" target="_blank" rel="noreferrer">Open Snapshot <ExternalLink size={15}/></a>}/><div className="voting-layout"><section className="member-panel voting-current"><Eyebrow>Active votes</Eyebrow><h2>Snapshot proposals go here</h2><p>Connected proposal titles, voting windows and participation status will appear in this area.</p><div className="content-placeholder"><span>Active proposal</span><i/><i/><i/></div></section><section className="member-panel"><Eyebrow>Recent decisions</Eyebrow><h2>Approved proposals</h2><p>Latest approved proposals go here.</p><div className="decision-placeholder"><CheckCircle2/><span>Decision record</span></div><div className="decision-placeholder"><CheckCircle2/><span>Decision record</span></div></section></div></div></MemberLayout>
}

export function ProposalsPage({ wallet, registered }) {
  return <MemberLayout wallet={wallet} registered={registered}><div className="member-page"><MemberPageHead eyebrow="Proposals" title="Bring an idea forward" description="A clear structure for turning a community need into a reviewable proposal."/><div className="proposal-submit-layout"><form className="proposal-form" onSubmit={event => event.preventDefault()}><label><span>Proposal title</span><input placeholder="A concise title for the proposal"/></label><label><span>Summary</span><textarea placeholder="What decision or support are you asking for?" rows="5"/></label><div><label><span>Requested budget</span><input placeholder="Amount in RBNT"/></label><label><span>Proposal category</span><select defaultValue=""><option value="" disabled>Select category</option><option>Community initiative</option><option>Governance</option><option>Ecosystem support</option></select></label></div><label><span>Expected impact</span><textarea placeholder="How will this benefit the DAO or wider ecosystem?" rows="4"/></label><button className="button button--primary" type="submit">Submission flow placeholder</button></form><aside className="proposal-flow"><Eyebrow>Submission flow</Eyebrow><ol><li><span>01</span><div><b>Draft</b><p>Describe the need and intended impact.</p></div></li><li><span>02</span><div><b>Community review</b><p>Gather context and refine the proposal.</p></div></li><li><span>03</span><div><b>Snapshot vote</b><p>Eligible members make the decision.</p></div></li><li><span>04</span><div><b>Deliver & report</b><p>Approved work is tracked transparently.</p></div></li></ol><small>The actual submission integration can be connected later.</small></aside></div></div></MemberLayout>
}

export function MemberTreasuryPage({ wallet, registered }) { return <MemberLayout wallet={wallet} registered={registered}><div className="member-embedded"><TreasuryPage/></div></MemberLayout> }
export function MemberTaskboardPage({ wallet, registered }) { return <MemberLayout wallet={wallet} registered={registered}><div className="member-embedded"><TaskboardPage/></div></MemberLayout> }
export function MemberResourcesPage({ wallet, registered }) { return <MemberLayout wallet={wallet} registered={registered}><div className="member-embedded"><ResourcesPage/></div></MemberLayout> }

export function CommunityShowcasePage({ wallet, registered }) {
  return <MemberLayout wallet={wallet} registered={registered}><div className="member-page"><MemberPageHead eyebrow="Community Showcase" title="Built by DAO members" description="A home for community side projects, experiments, tools and useful builds."/><div className="showcase-member-grid"><article className="showcase-intro-card"><span>Community submissions</span><h2>Member projects go here.</h2><p>Projects appear after their builders submit verified information and ownership context.</p><button className="button button--secondary">Submit a community build</button></article><article className="showcase-placeholder"><Sparkles/><span>Community project</span><h3>Project details placeholder</h3></article><article className="showcase-placeholder"><Sparkles/><span>Community experiment</span><h3>Project details placeholder</h3></article></div><div className="ecosystem-route"><p>Looking for products across the wider Redbelly ecosystem?</p><a href="https://redbelly.network/ecosystem" target="_blank" rel="noreferrer">Visit the official Redbelly ecosystem <ExternalLink size={14}/></a></div></div></MemberLayout>
}

function MemberPageHead({ eyebrow, title, description, action }) { return <div className="member-page-head"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></div>{action}</div> }

export function MyTasksPage({ wallet, registered }) {
  return <MemberLayout wallet={wallet} registered={registered}><div className="member-page"><MemberPageHead eyebrow="Taskboard" title="My tasks" description="Your assigned work and submissions." action={<Link className="button button--primary" to="/app/taskboard">Find work <ArrowRight size={16}/></Link>}/><section className="member-panel task-timeline">{tasks.slice(0,3).map((task,index)=><article key={task.id}><span className={`timeline-dot ${index===1?'is-review':''}`}/><div><span className="mono">{task.id}</span><StatusChip>{index===1?'Review':'In progress'}</StatusChip><h3>{task.title}</h3><p>Task details and the next milestone appear here.</p></div><div><strong>{index===1?'Submitted':'Active'}</strong><small>Status</small></div><ChevronRight/></article>)}</section></div></MemberLayout>
}

export function ProfilePage({ wallet, registered }) {
  return <MemberLayout wallet={wallet} registered={registered}><div className="member-page"><div className="profile-banner"><div className="profile-avatar">RM</div><div><span className="eyebrow eyebrow--light">DAO member</span><h1>Member profile</h1><p className="mono">{wallet.address}</p></div><button className="button button--dark-outline"><Settings size={16}/> Edit profile</button></div><div className="member-panel"><Eyebrow>Member identity</Eyebrow><p>Your registration details, participation preferences and public contribution record appear here.</p></div></div></MemberLayout>
}

export function NotificationsPage({ wallet, registered }) {
  return <MemberLayout wallet={wallet} registered={registered}><div className="member-page"><MemberPageHead eyebrow="Notifications" title="Relevant to you" description="Wallet, governance and community updates connected to your membership." action={<button className="button button--secondary">Mark all as read</button>}/><section className="member-panel notification-placeholder"><Bell/><h2>Member notifications go here.</h2><p>Notifications will appear when connected DAO services provide activity relevant to this wallet.</p></section></div></MemberLayout>
}
