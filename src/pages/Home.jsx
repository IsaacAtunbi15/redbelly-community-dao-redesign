import { ArrowRight, BookOpen, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, SectionHeading, TextLink } from '../components/UI'
import { projects, tasks } from '../data/content'

export default function Home({ onJoin }) {
  return <>
    <section className="dao-hero">
      <div className="container dao-hero__inner">
        <div className="dao-hero__copy">
          <Eyebrow>Redbelly Community DAO</Eyebrow>
          <h1>A community with a stake in <span>what comes next.</span></h1>
          <p>Redbelly DAO is where community stakeholders help the network move forward—through ideas, expertise, initiatives and shared decisions.</p>
          <div className="hero-actions"><Link className="button button--primary" to="/about">Discover the DAO <ArrowRight size={17}/></Link><button className="button button--secondary" onClick={onJoin}>Find your place</button></div>
          <div className="dao-hero__statement"><span>Our role</span><p>Turn community participation into meaningful, long-term impact across the Redbelly blockchain ecosystem.</p></div>
        </div>
        <div className="dao-hero__visual" aria-label="Redbelly DAO stakeholder layer">
          <div className="dao-poster__top"><span>The stakeholder layer</span><small>Open · Community-led</small></div>
          <div className="dao-poster__body"><img src="/assets/Redbelly-Community-DAO logo-dark.png" alt=""/><div className="dao-poster__words"><span>Shape</span><span>Support</span><span>Build</span></div></div>
          <div className="dao-poster__foot"><strong>Participation with purpose.</strong><span>Redbelly DAO · 2026</span></div>
        </div>
      </div>
      <div className="dao-focus-line"><div className="container"><span>DAO activity spans</span><p>Governance</p><i/><p>Products & tools</p><i/><p>Community initiatives</p><i/><p>Knowledge & resources</p><i/><p>Open opportunities</p></div></div>
    </section>

    <section className="section dao-definition" id="dao"><div className="container dao-definition__grid">
      <div className="dao-definition__intro"><Eyebrow>What the DAO is</Eyebrow><h2>A shared foundation for community impact.</h2><p>The blockchain is the infrastructure. The DAO is the stakeholder layer around it: people coming together to guide priorities, support adoption and create value for the ecosystem.</p><TextLink to="/about">How the DAO works</TextLink></div>
      <div className="dao-scope-list">
        <article><span>Govern</span><div><h3>Shape collective decisions</h3><p>Discuss proposals, steward resources and make ecosystem choices in the open.</p></div></article>
        <article><span>Build</span><div><h3>Strengthen the network</h3><p>Create products, tools, documentation and infrastructure people can use.</p></div></article>
        <article><span>Connect</span><div><h3>Grow community knowledge</h3><p>Teach, organise, share context and help more stakeholders participate well.</p></div></article>
        <article><span>Support</span><div><h3>Move initiatives forward</h3><p>Bring time, experience and resources to work that creates lasting impact.</p></div></article>
      </div>
    </div></section>

    <section className="section participation-section"><div className="container">
      <SectionHeading eyebrow="Participate" title="There is more than one way to make an impact." description="Start with what you know, what you care about, or what you are ready to learn."/>
      <div className="participation-list">
        <Link to="/resources"><span>01</span><h3>Learn and share</h3><p>Understand the DAO, make knowledge easier to access and help others find their way.</p><ArrowRight/></Link>
        <Link to="/developers"><span>02</span><h3>Build and improve</h3><p>Create useful products, tools and technical resources for the Redbelly ecosystem.</p><ArrowRight/></Link>
        <Link to="/governance"><span>03</span><h3>Propose and decide</h3><p>Bring ideas forward, join discussions and take part in transparent governance.</p><ArrowRight/></Link>
        <Link to="/taskboard"><span>04</span><h3>Take on an opportunity</h3><p>Find defined pieces of work where your contribution can have an immediate effect.</p><ArrowRight/></Link>
      </div>
    </div></section>

    <section className="section showcase-preview"><div className="container showcase-layout">
      <div className="showcase-intro"><Eyebrow>Across the ecosystem</Eyebrow><h2>Products with real-world purpose.</h2><p>Explore the platforms and infrastructure creating new possibilities on Redbelly—and the community supporting their growth.</p><TextLink to="/showcase">Explore products & projects</TextLink></div>
      <div className="showcase-stack">{projects.slice(0,3).map((project, i) => <Link to="/showcase" className={`project-mini project-mini--${project.accent}`} key={project.title}><span className="project-mark">{project.mark}</span><div><small>{project.type}</small><h3>{project.title}</h3><p>{project.maker}</p></div><span className="project-count">0{i+1}</span></Link>)}</div>
    </div></section>

    <section className="section digest-preview"><div className="container digest-card">
      <div className="digest-visual"><span>REDBELLY<br/>DIGEST</span><strong>04</strong><small>AUG · 2026</small></div>
      <div className="digest-content"><Eyebrow>Latest DAO update</Eyebrow><h2>See what the community is moving forward.</h2><p>Catch up on proposals, ecosystem initiatives, developer resources, community activity and opportunities across Redbelly.</p><div className="digest-meta"><span><CalendarDays size={15}/> August edition</span><span><BookOpen size={15}/> 6 min read</span></div><TextLink to="/digest">Read the latest update</TextLink></div>
    </div></section>

    <section className="section dao-now"><div className="container">
      <SectionHeading eyebrow="DAO activity" title="What’s happening now." description="Follow the work, decisions and opportunities currently moving through the community."/>
      <div className="dao-now__grid">
        <article className="dao-now__lead"><span>Governance</span><h3>Community decisions, made in the open.</h3><p>See active proposals, understand the process and follow decisions from discussion through execution.</p><TextLink to="/governance">View governance</TextLink></article>
        <article><span>Resources</span><h3>The public record is growing.</h3><p>Read the Constitution, Code of Conduct, leadership structure and proposal process.</p><TextLink to="/resources">Browse resources</TextLink></article>
        <article><span>Opportunities</span><h3>{tasks.filter(task => task.status === 'Open').length} ways to contribute now.</h3><p>The Taskboard turns specific ecosystem needs into clear, supported community work.</p><Link className="text-link" to="/taskboard">Open the Taskboard <ArrowRight size={16}/></Link></article>
      </div>
    </div></section>

    <section className="section values-section"><div className="container">
      <SectionHeading eyebrow="Community principles" title="Useful work. Shared progress." description="The values that help Redbelly stakeholders turn participation into lasting impact." align="center" />
      <div className="value-grid"><div><h3>Lead by building</h3><p>Trust and influence are earned through action, craft and follow-through.</p></div><div><h3>Share what you learn</h3><p>Knowledge creates more value when the whole community can use it.</p></div><div><h3>Design for the long term</h3><p>We favour reusable systems and sustainable outcomes over temporary attention.</p></div><div><h3>Win by being useful</h3><p>Our work should create value for Redbelly, its partners and real-world users.</p></div></div>
    </div></section>
  </>
}
