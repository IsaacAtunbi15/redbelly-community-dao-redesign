import { ArrowRight, BookOpen, CalendarDays, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, SectionHeading, TextLink } from '../components/UI'

export default function Home({ onJoin }) {
  return <>
    <section className="dao-hero dao-hero--simple">
      <div className="container dao-hero__inner">
        <div className="dao-hero__copy">
          <Eyebrow>Redbelly Community DAO</Eyebrow>
          <h1>A community with a stake in <span>what comes next.</span></h1>
          <p>Redbelly DAO gives community members a clear way to help shape, support and strengthen the Redbelly blockchain ecosystem.</p>
          <div className="hero-actions"><button className="button button--primary" onClick={onJoin}>Join DAO <ArrowRight size={17}/></button><Link className="button button--secondary" to="/resources">Explore resources</Link></div>
          <div className="dao-hero__statement"><span>In one line</span><p>Community stakeholders turn ideas, expertise and participation into accountable ecosystem impact.</p></div>
        </div>
        <div className="dao-hero__visual" aria-label="Redbelly DAO stakeholder layer">
          <div className="dao-poster__top"><span>The stakeholder layer</span><small>Open · Community-led</small></div>
          <div className="dao-poster__body"><img src="/assets/Redbelly-Community-DAO logo-dark.png" alt=""/><div className="dao-poster__words"><span>Shape</span><span>Support</span><span>Build</span></div></div>
          <div className="dao-poster__foot"><strong>Participation with purpose.</strong><span>Redbelly DAO · 2026</span></div>
        </div>
      </div>
    </section>

    <section className="section public-brief"><div className="container">
      <SectionHeading eyebrow="The DAO, briefly" title="A simple layer for collective impact." description="The network provides the infrastructure. The DAO gives its community a structured way to take part."/>
      <div className="public-brief__grid">
        <article><span>01</span><h3>What it does</h3><p>Supports initiatives, shared decisions, useful community work and long-term ecosystem growth.</p></article>
        <article><span>02</span><h3>How it operates</h3><p>Members discuss openly, organise work, submit proposals and report outcomes transparently.</p></article>
        <article><span>03</span><h3>How community is structured</h3><p>Stakeholders contribute through leadership, working groups, governance and practical initiatives.</p></article>
      </div>
    </div></section>

    <section className="section public-governance"><div className="container public-governance__grid">
      <div><Eyebrow>Governance & voting</Eyebrow><h2>From community voice to accountable action.</h2><p>Ideas are discussed, shaped into proposals and voted on through Snapshot. Approved decisions move into delivery with visible outcomes.</p><TextLink to="/resources">Read how governance works</TextLink></div>
      <ol><li><span>01</span><div><strong>Discuss</strong><p>Test the need with the community.</p></div></li><li><span>02</span><div><strong>Propose</strong><p>Define the decision and expected impact.</p></div></li><li><span>03</span><div><strong>Vote</strong><p>Eligible members decide through Snapshot.</p></div></li><li><span>04</span><div><strong>Act & report</strong><p>Deliver the outcome in the open.</p></div></li></ol>
    </div></section>

    <section className="section digest-preview"><div className="container digest-card">
      <div className="digest-visual"><span>DAO<br/>DIGEST</span><strong>04</strong><small>AUG · 2026</small></div>
      <div className="digest-content"><Eyebrow>Current state of the DAO</Eyebrow><h2>One clear place to catch up.</h2><p>A concise summary of proposals, decisions, community activity, projects and important updates.</p><div className="digest-meta"><span><CalendarDays size={15}/> August edition</span><span><BookOpen size={15}/> 6 min read</span></div><TextLink to="/digest">Read the DAO Digest</TextLink></div>
    </div></section>

    <section className="section public-close"><div className="container public-close__grid">
      <div><Eyebrow>Go deeper</Eyebrow><h2>Details live in Resources.</h2><p>Find the DAO structure, leadership information, governance documents, proposal guidance and operational references in one place.</p><TextLink to="/resources">Open Resources</TextLink></div>
      <div className="public-join"><span>Ready to participate?</span><h2>Join the DAO.</h2><p>Connect your wallet, complete a short registration if you are new, and enter the member space.</p><button className="button button--light" onClick={onJoin}>Start with your wallet <ArrowRight size={17}/></button></div>
      <div className="official-links"><span>Official channels</span><a href="https://discord.com/invite/redbelly" target="_blank" rel="noreferrer">Discord <ExternalLink size={14}/></a><a href="https://x.com/redbellynetwork" target="_blank" rel="noreferrer">X / Twitter <ExternalLink size={14}/></a><a href="https://github.com/redbellynetwork" target="_blank" rel="noreferrer">GitHub <ExternalLink size={14}/></a></div>
    </div></section>
  </>
}
