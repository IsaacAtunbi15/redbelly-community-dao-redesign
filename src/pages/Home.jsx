import { ArrowRight, BookOpen, CalendarDays, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, TextLink } from '../components/UI'

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

    <section className="section dao-foundation"><div className="container dao-foundation__grid">
      <div className="dao-foundation__lead"><Eyebrow>The relationship</Eyebrow><h2>The blockchain is the infrastructure. The DAO is its stakeholder layer.</h2><p>It gives the people around Redbelly a clear structure for turning community knowledge into decisions, initiatives and useful work.</p><TextLink to="/resources">Understand the DAO</TextLink></div>
      <div className="dao-foundation__roles">
        <article><span>Community voice</span><h3>Surface what matters.</h3><p>Members discuss needs, share context and identify opportunities across the ecosystem.</p></article>
        <article><span>Collective governance</span><h3>Make decisions in the open.</h3><p>Ideas become proposals, eligible members vote through Snapshot, and outcomes remain visible.</p></article>
        <article><span>Accountable delivery</span><h3>Turn decisions into impact.</h3><p>Working groups, contributors and community initiatives carry approved priorities forward.</p></article>
      </div>
    </div></section>

    <section className="section dao-motion"><div className="container">
      <div className="dao-motion__head"><div><Eyebrow>How the DAO operates</Eyebrow><h2>One clear route from idea to impact.</h2></div><p>The process stays understandable at every stage, so participation never disappears into a black box.</p></div>
      <ol className="dao-motion__track">
        <li><span>01</span><strong>Discuss</strong><p>Test the need with the community.</p></li>
        <li><span>02</span><strong>Propose</strong><p>Define the decision and expected outcome.</p></li>
        <li><span>03</span><strong>Vote</strong><p>Eligible members decide through Snapshot.</p></li>
        <li><span>04</span><strong>Deliver</strong><p>Act on the decision and report progress.</p></li>
      </ol>
      <div className="dao-motion__foot"><span>Open by design</span><p>Discussion, decisions and delivery each have their own place—without making the public website feel like a dashboard.</p><TextLink to="/resources">Explore governance resources</TextLink></div>
    </div></section>

    <section className="section dao-entry"><div className="container">
      <div className="dao-entry__head"><Eyebrow>Participation</Eyebrow><h2>There is more than one way to have a stake.</h2><p>Start with the level of involvement that makes sense for you. The member space connects the rest.</p></div>
      <div className="dao-entry__grid">
        <article><span>01 · Stay informed</span><h3>Know what is happening.</h3><p>Catch up on proposals, projects and community activity through the DAO Digest.</p><TextLink to="/digest">Read the Digest</TextLink></article>
        <article><span>02 · Help decide</span><h3>Bring context to governance.</h3><p>Connect as a member to follow Snapshot activity, proposals and recent decisions.</p><button className="text-link" onClick={onJoin}>Enter the member space <ArrowRight size={15}/></button></article>
        <article className="dao-entry__feature"><span>03 · Make an impact</span><h3>Move useful work forward.</h3><p>Join initiatives, contribute through the Taskboard and showcase what the community builds.</p><button className="text-link" onClick={onJoin}>Join Redbelly DAO <ArrowRight size={15}/></button></article>
      </div>
    </div></section>

    <section className="section digest-preview"><div className="container digest-card">
      <div className="digest-visual"><span>DAO<br/>DIGEST</span><strong>04</strong><small>AUG · 2026</small></div>
      <div className="digest-content"><Eyebrow>Current state of the DAO</Eyebrow><h2>Missed a week? Start here.</h2><p>A concise editorial summary of proposals, decisions, community activity, projects and important updates—without the Discord scroll.</p><div className="digest-meta"><span><CalendarDays size={15}/> August edition</span><span><BookOpen size={15}/> 6 min read</span></div><TextLink to="/digest">Read the DAO Digest</TextLink></div>
    </div></section>

    <section className="section public-close"><div className="container public-close__grid">
      <div><Eyebrow>Go deeper</Eyebrow><h2>Details live in Resources.</h2><p>Find the DAO structure, leadership information, governance documents, proposal guidance and operational references in one place.</p><TextLink to="/resources">Open Resources</TextLink></div>
      <div className="public-join"><span>Ready to participate?</span><h2>Join the DAO.</h2><p>Connect your wallet, complete a short registration if you are new, and enter the member space.</p><button className="button button--light" onClick={onJoin}>Start with your wallet <ArrowRight size={17}/></button></div>
      <div className="official-links"><span>Official channels</span><a href="https://discord.com/invite/redbelly" target="_blank" rel="noreferrer">Discord <ExternalLink size={14}/></a><a href="https://x.com/redbellynetwork" target="_blank" rel="noreferrer">X / Twitter <ExternalLink size={14}/></a><a href="https://github.com/redbellynetwork" target="_blank" rel="noreferrer">GitHub <ExternalLink size={14}/></a></div>
    </div></section>
  </>
}
