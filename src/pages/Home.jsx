import { ArrowRight, Blocks, BookOpen, CalendarDays, FileText, Landmark, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, SectionHeading, StatusChip, TextLink } from '../components/UI'
import { projects, tasks } from '../data/content'

export default function Home({ onJoin, onConnect }) {
  return <>
    <section className="home-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />
      <div className="container home-hero__inner">
        <div className="hero-copy">
          <Eyebrow tone="light"><span className="live-dot" /> The Redbelly ecosystem, in motion</Eyebrow>
          <h1>Explore what’s being built on <span>Redbelly.</span></h1>
          <p>Discover products, people, initiatives and activity across a network built for real-world value.</p>
          <div className="hero-actions"><Link className="button button--light" to="/showcase">Explore the ecosystem <ArrowRight size={17}/></Link><button className="button button--dark-outline" onClick={onJoin}>Find a way to participate</button></div>
          <div className="hero-proof"><span>Products in progress</span><span>Builders in the open</span><span>Community-led activity</span></div>
        </div>
        <div className="ecosystem-map">
          <div className="ecosystem-map__head"><span>A living network</span><span className="live-badge"><i/> Live now</span></div>
          <div className="ecosystem-map__canvas">
            <svg className="ecosystem-lines" viewBox="0 0 540 440" aria-hidden="true">
              <path d="M118 80 C204 70 191 186 271 216 S386 166 444 104" />
              <path d="M81 323 C166 280 190 330 271 216 S390 236 467 338" />
              <path d="M271 216 C317 292 279 344 290 405" />
            </svg>
            <div className="ecosystem-core"><span className="ecosystem-core__halo"/><img src="/assets/Redbelly-Community-DAO logo-dark.png" alt=""/><b>Redbelly</b><small>One connected ecosystem</small></div>
            <Link to="/showcase" className="ecosystem-node ecosystem-node--products"><small>Discover</small><strong>24 products</strong><span>7 active this cycle</span></Link>
            <Link to="/developers" className="ecosystem-node ecosystem-node--build"><small>Build</small><strong>Tools & guides</strong><span>For the next idea</span></Link>
            <Link to="/about" className="ecosystem-node ecosystem-node--community"><small>Connect</small><strong>147 people</strong><span>Across 23 regions</span></Link>
            <Link to="/governance" className="ecosystem-node ecosystem-node--governance"><small>Shape</small><strong>RCDP-07</strong><span>Voting is open</span></Link>
          </div>
          <button className="ecosystem-map__foot" onClick={onConnect}><span>Make this view yours</span><span>Connect wallet <ArrowRight size={15}/></span></button>
        </div>
      </div>
      <div className="hero-ticker"><div className="container"><span>Currently building</span><p>Developer onboarding</p><i/><p>Products & projects</p><i/><p>Opportunities cycle 2</p><i/><p>Redbelly Digest</p></div></div>
    </section>

    <section className="section pathways-section"><div className="container">
      <SectionHeading eyebrow="Find your way around" title="One ecosystem. Many ways in." description="Browse what’s live, learn how Redbelly works, or join the people moving it forward." />
      <div className="pathway-grid" aria-label="Ways to explore Redbelly">
        <Link to="/showcase" className="pathway-card"><span className="pathway-number">01</span><h3>Explore products</h3><p>See the tools, protocols and experiments taking shape across Redbelly.</p><span className="card-link">Browse products <ArrowRight size={16}/></span></Link>
        <Link to="/developers" className="pathway-card pathway-card--feature"><span className="pathway-number">02</span><h3>Build on Redbelly</h3><p>Find the technical context and resources to turn an idea into a product.</p><span className="card-link">Start building <ArrowRight size={16}/></span></Link>
        <Link to="/taskboard" className="pathway-card"><span className="pathway-number">03</span><h3>Find opportunities</h3><p>Discover clear, practical ways to support work already moving the ecosystem forward.</p><span className="card-link">View opportunities <ArrowRight size={16}/></span></Link>
        <Link to="/governance" className="pathway-card"><span className="pathway-number">04</span><h3>Follow decisions</h3><p>Understand the proposals, funding and choices shaping what comes next.</p><span className="card-link">Explore governance <ArrowRight size={16}/></span></Link>
      </div>
    </div></section>

    <section className="section section--tint opportunities-section"><div className="container">
      <SectionHeading eyebrow="Open opportunities" title="Work worth doing." description="Real ecosystem needs, clear scopes and transparent rewards." action={<TextLink to="/taskboard">View all opportunities</TextLink>}/>
      <div className="task-preview">
        {tasks.slice(0,3).map((task, i) => <Link className="task-row" to="/taskboard" key={task.id}><span className="task-index">0{i+1}</span><div className="task-main"><div><span className="mono task-id">{task.id}</span><StatusChip>{task.status}</StatusChip></div><h3>{task.title}</h3><p>{task.category}</p></div><div className="task-meta"><span>Reward</span><b>{task.reward}</b></div><ArrowRight className="task-arrow" size={20}/></Link>)}
      </div>
    </div></section>

    <section className="section showcase-preview"><div className="container showcase-layout">
      <div className="showcase-intro"><Eyebrow>Products & projects</Eyebrow><h2>Built here.<br/>Shared with everyone.</h2><p>Tools, protocols and stories created by builders across the Redbelly ecosystem.</p><TextLink to="/showcase">Explore the ecosystem</TextLink></div>
      <div className="showcase-stack">{projects.slice(0,3).map((project, i) => <Link to="/showcase" className={`project-mini project-mini--${project.accent}`} key={project.title}><span className="project-mark">{project.mark}</span><div><small>{project.type}</small><h3>{project.title}</h3><p>{project.maker}</p></div><span className="project-count">0{i+1}</span></Link>)}</div>
    </div></section>

    <section className="section digest-preview"><div className="container digest-card">
      <div className="digest-visual"><span>REDBELLY<br/>DIGEST</span><strong>04</strong><small>AUG · 2026</small></div>
      <div className="digest-content"><Eyebrow>Latest ecosystem update</Eyebrow><h2>The ecosystem keeps moving.</h2><p>New products, developer resources, community decisions and opportunities are taking shape. Catch up on the month across Redbelly.</p><div className="digest-meta"><span><CalendarDays size={15}/> 6 min read</span><span><BookOpen size={15}/> August edition</span></div><TextLink to="/digest">Read the latest update</TextLink></div>
    </div></section>

    <section className="section values-section"><div className="container">
      <SectionHeading eyebrow="How we work" title="Useful beats loud." description="A few durable principles guide how this community builds together." align="center" />
      <div className="value-grid"><div><span className="icon-box"><Blocks/></span><h3>Lead by building</h3><p>Trust is earned through action, craft and follow-through.</p></div><div><span className="icon-box"><MessageSquare/></span><h3>Share what you learn</h3><p>Knowledge compounds when the whole community can use it.</p></div><div><span className="icon-box"><Landmark/></span><h3>Design for the long term</h3><p>We favour reusable systems over temporary attention.</p></div><div><span className="icon-box"><FileText/></span><h3>Keep work transparent</h3><p>Decisions, rewards and outcomes should be easy to understand.</p></div></div>
    </div></section>
  </>
}
