import { ArrowRight, Blocks, BookOpen, CalendarDays, CheckCircle2, Code2, FileText, Landmark, MessageSquare, Sparkles, Users, Vote, WalletCards } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, SectionHeading, Stat, StatusChip, TextLink } from '../components/UI'
import { projects, tasks } from '../data/content'

export default function Home({ onJoin, onConnect }) {
  return <>
    <section className="home-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />
      <div className="container home-hero__inner">
        <div className="hero-copy">
          <Eyebrow tone="light"><span className="live-dot" /> Community-owned. Contribution-led.</Eyebrow>
          <h1>The community layer of <span>Redbelly Network.</span></h1>
          <p>Discover the work, people and decisions moving Redbelly forward—and find a meaningful way to contribute.</p>
          <div className="hero-actions"><button className="button button--light" onClick={onJoin}>Find your place <ArrowRight size={17}/></button><Link className="button button--dark-outline" to="/taskboard">Explore the Taskboard</Link></div>
          <div className="hero-proof"><span><CheckCircle2 size={16}/> Public by default</span><span><CheckCircle2 size={16}/> Built in the open</span><span><CheckCircle2 size={16}/> Rewards in RBNT</span></div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel__head"><span>DAO pulse</span><span className="live-badge"><i/> Live</span></div>
          <div className="pulse-stats"><Stat label="Active tasks" value="12" detail="4 added this cycle"/><Stat label="Proposals" value="03" detail="1 closing soon"/><Stat label="Contributors" value="147" detail="Across 23 regions"/><Stat label="Treasury" value="$284k" detail="Publicly tracked"/></div>
          <div className="pulse-activity"><div><span className="activity-icon"><Vote size={16}/></span><p><b>RCDP-07</b> is now open for voting<small>12 minutes ago</small></p></div><div><span className="activity-icon"><Blocks size={16}/></span><p><b>EligibilitySDK guide</b> moved to review<small>2 hours ago</small></p></div></div>
          <button className="panel-connect" onClick={onConnect}><WalletCards size={17}/> Connect to personalise your pulse <ArrowRight size={16}/></button>
        </div>
      </div>
      <div className="hero-ticker"><div className="container"><span>Currently building</span><p>Developer onboarding</p><i/><p>Community showcase</p><i/><p>Taskboard cycle 2</p><i/><p>DAO Digest</p></div></div>
    </section>

    <section className="section pathways-section"><div className="container">
      <SectionHeading eyebrow="Start here" title="One community. Many ways in." description="You don’t need a title or permission. Follow the path that matches what you want to do." />
      <div className="pathway-grid">
        <Link to="/governance" className="pathway-card"><span className="pathway-number">01</span><span className="icon-box"><Vote/></span><h3>Shape decisions</h3><p>Follow proposals, understand the process and make your voice count.</p><span className="card-link">Explore governance <ArrowRight size={16}/></span></Link>
        <Link to="/taskboard" className="pathway-card pathway-card--feature"><span className="pathway-number">02</span><span className="icon-box"><Sparkles/></span><h3>Contribute skills</h3><p>Take on scoped work, ship useful outcomes and earn reputation.</p><span className="card-link">Find open work <ArrowRight size={16}/></span></Link>
        <Link to="/developers" className="pathway-card"><span className="pathway-number">03</span><span className="icon-box"><Code2/></span><h3>Build products</h3><p>Start developing on a compliant, high-performance network.</p><span className="card-link">Start building <ArrowRight size={16}/></span></Link>
        <Link to="/showcase" className="pathway-card"><span className="pathway-number">04</span><span className="icon-box"><Users/></span><h3>Meet the builders</h3><p>Discover community-made tools, research and experiments.</p><span className="card-link">See the showcase <ArrowRight size={16}/></span></Link>
      </div>
    </div></section>

    <section className="section section--tint"><div className="container">
      <SectionHeading eyebrow="Open opportunities" title="Work worth doing." description="Real ecosystem needs, clear scopes and transparent rewards." action={<TextLink to="/taskboard">View all tasks</TextLink>}/>
      <div className="task-preview">
        {tasks.slice(0,3).map((task, i) => <Link className="task-row" to="/taskboard" key={task.id}><span className="task-index">0{i+1}</span><div className="task-main"><div><span className="mono task-id">{task.id}</span><StatusChip>{task.status}</StatusChip></div><h3>{task.title}</h3><p>{task.category}</p></div><div className="task-meta"><span>Reward</span><b>{task.reward}</b></div><ArrowRight className="task-arrow" size={20}/></Link>)}
      </div>
    </div></section>

    <section className="section showcase-preview"><div className="container showcase-layout">
      <div className="showcase-intro"><Eyebrow>Community showcase</Eyebrow><h2>Built here.<br/>Shared with everyone.</h2><p>Tools, protocols and stories created by contributors across the Redbelly ecosystem.</p><TextLink to="/showcase">Explore all projects</TextLink></div>
      <div className="showcase-stack">{projects.slice(0,3).map((project, i) => <Link to="/showcase" className={`project-mini project-mini--${project.accent}`} key={project.title}><span className="project-mark">{project.mark}</span><div><small>{project.type}</small><h3>{project.title}</h3><p>{project.maker}</p></div><span className="project-count">0{i+1}</span></Link>)}</div>
    </div></section>

    <section className="section digest-preview"><div className="container digest-card">
      <div className="digest-visual"><span>DAO<br/>DIGEST</span><strong>04</strong><small>AUG · 2026</small></div>
      <div className="digest-content"><Eyebrow>Latest publication</Eyebrow><h2>The contribution layer comes alive.</h2><p>Cycle 2 opens. The Taskboard evolves. Three community-built developer resources ship. Catch up on the month across the DAO.</p><div className="digest-meta"><span><CalendarDays size={15}/> 6 min read</span><span><BookOpen size={15}/> August edition</span></div><TextLink to="/digest">Read the latest Digest</TextLink></div>
    </div></section>

    <section className="section values-section"><div className="container">
      <SectionHeading eyebrow="How we work" title="Useful beats loud." description="A few durable principles guide how this community builds together." align="center" />
      <div className="value-grid"><div><span className="icon-box"><Blocks/></span><h3>Lead by building</h3><p>Trust is earned through action, craft and follow-through.</p></div><div><span className="icon-box"><MessageSquare/></span><h3>Share what you learn</h3><p>Knowledge compounds when the whole community can use it.</p></div><div><span className="icon-box"><Landmark/></span><h3>Design for the long term</h3><p>We favour reusable systems over temporary attention.</p></div><div><span className="icon-box"><FileText/></span><h3>Keep work transparent</h3><p>Decisions, rewards and outcomes should be easy to understand.</p></div></div>
    </div></section>
  </>
}
