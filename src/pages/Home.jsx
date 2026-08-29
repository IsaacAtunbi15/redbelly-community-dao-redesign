import { ArrowDownRight, ArrowRight, BookOpen, CalendarDays, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, TextLink } from '../components/UI'

export default function Home({ onJoin }) {
  return <>
    <section className="rb-hero">
      <div className="container rb-hero__grid">
        <div className="rb-hero__copy">
          <Eyebrow>Redbelly Community DAO</Eyebrow>
          <h1>The people around the network, <span>moving it forward.</span></h1>
          <p>A decentralized organization where Redbelly stakeholders turn community knowledge into shared decisions, useful initiatives and accountable impact.</p>
          <div className="hero-actions"><button className="button button--primary" onClick={onJoin}>Join the DAO <ArrowRight size={17}/></button><a className="button button--dark-outline" href="#how-it-works">See how it works <ArrowDownRight size={17}/></a></div>
          <div className="rb-hero__note"><span>Community-owned context</span><span>Transparent decisions</span><span>Practical participation</span></div>
        </div>

        <div className="rb-field" aria-label="From community voice to ecosystem impact">
          <div className="rb-field__head"><span>Stakeholder interface</span><small>RED / DAO · 01</small></div>
          <div className="rb-field__brand"><img src="/assets/Redbelly-Community-DAO logo-dark.png" alt=""/><span>VOICE</span></div>
          <div className="rb-field__sequence"><div><small>01</small><strong>Listen</strong></div><div><small>02</small><strong>Decide</strong></div><div><small>03</small><strong>Deliver</strong></div></div>
          <div className="rb-field__foot"><strong>Participation becomes progress.</strong><span>Open · Community-led</span></div>
        </div>
      </div>
      <div className="container rb-hero__rail"><span>Decentralized Autonomous Organization</span><p>One public home. One wallet-gated member space. One clear view of the DAO.</p><a href="#about" aria-label="Continue to about the DAO"><ArrowDownRight size={18}/></a></div>
    </section>

    <section className="section rb-context" id="about"><div className="container">
      <div className="rb-section-intro"><Eyebrow>What Redbelly DAO is</Eyebrow><h2>A stake is more than a token. It is a role in what comes next.</h2><p>The DAO is the community stakeholder layer around Redbelly. It creates a shared structure for understanding priorities, making decisions and supporting work that strengthens the wider blockchain ecosystem.</p></div>
      <div className="rb-context__relationship">
        <article><span>01 · The network</span><h3>Infrastructure for the real world.</h3><p>Redbelly provides the blockchain, technology and wider ecosystem where products and builders operate.</p><a href="https://redbelly.network" target="_blank" rel="noreferrer">Explore Redbelly Network <ExternalLink size={14}/></a></article>
        <div className="rb-context__bridge"><span>Stakeholders connect both</span><i/></div>
        <article className="rb-context__dao"><span>02 · The DAO</span><h3>Community direction and action.</h3><p>Members bring context, govern shared priorities and contribute to initiatives through one accountable organization.</p><Link to="/resources">Understand the DAO <ArrowRight size={14}/></Link></article>
      </div>
    </div></section>

    <section className="section rb-loop" id="how-it-works"><div className="container rb-loop__grid">
      <div className="rb-loop__lead"><Eyebrow>How it works</Eyebrow><h2>From a community signal to visible impact.</h2><p>Each stage has a purpose. Members always know where an idea sits, what happens next and where to find the outcome.</p><TextLink to="/resources">Read the governance guide</TextLink></div>
      <ol className="rb-loop__steps">
        <li><span>01</span><div><small>Community</small><h3>Surface the signal.</h3><p>Members raise needs, opportunities and useful context through open discussion.</p></div></li>
        <li><span>02</span><div><small>Proposals</small><h3>Shape the decision.</h3><p>A clear proposal defines what is being decided, why it matters and what success means.</p></div></li>
        <li><span>03</span><div><small>Snapshot</small><h3>Make the call.</h3><p>Eligible stakeholders vote, with the decision and participation record kept visible.</p></div></li>
        <li><span>04</span><div><small>Initiatives & Taskboard</small><h3>Deliver in the open.</h3><p>Approved priorities become coordinated work, followed by progress and outcome reporting.</p></div></li>
      </ol>
    </div></section>

    <section className="section rb-access"><div className="container">
      <div className="rb-access__head"><div><Eyebrow>One DAO · Two layers</Eyebrow><h2>Simple outside.<br/>Powerful inside.</h2></div><p>The public website explains the DAO without overwhelming visitors. Connecting a registered wallet opens the richer member experience only when it is relevant.</p></div>
      <div className="rb-access__grid">
        <article className="rb-access__public"><div><span>Public website</span><small>No wallet required</small></div><h3>Understand the organization.</h3><ul><li>What the DAO is and how it operates</li><li>DAO Digest and official updates</li><li>Governance, leadership and resources</li><li>Official channels and onboarding</li></ul><Link className="text-link" to="/resources">Explore public resources <ArrowRight size={15}/></Link></article>
        <article className="rb-access__member"><div><span>Member space</span><small>Wallet-gated</small></div><h3>Participate with context.</h3><ul><li>Personal overview and DAO activity feed</li><li>Snapshot voting and proposals</li><li>Treasury, Taskboard and opportunities</li><li>Community builds and notifications</li></ul><button className="button button--light" onClick={onJoin}>Connect and enter <ArrowRight size={16}/></button></article>
      </div>
    </div></section>

    <section className="section rb-digest" id="digest"><div className="container rb-digest__frame">
      <div className="rb-digest__cover"><div><span>RED<br/>BELLY</span><small>DAO DIGEST</small></div><strong>04</strong><span>AUG / 2026</span></div>
      <div className="rb-digest__copy"><Eyebrow>The DAO, edited</Eyebrow><h2>Missed a week?<br/>Start here.</h2><p>One concise briefing for proposals, decisions, community activity, projects and the context behind them. Designed to replace information overload with a useful signal.</p><div className="digest-meta"><span><CalendarDays size={15}/> August edition</span><span><BookOpen size={15}/> 6 min read</span></div><TextLink to="/digest">Read the latest Digest</TextLink></div>
      <div className="rb-digest__index"><span>Inside 04</span><ol><li><b>01</b>Governance</li><li><b>02</b>Community</li><li><b>03</b>Initiatives</li><li><b>04</b>Taskboard</li></ol></div>
    </div></section>

    <section className="rb-finale"><div className="container rb-finale__grid">
      <div><Eyebrow>Take the next step</Eyebrow><h2>Know the DAO.<br/>Then help shape it.</h2></div>
      <div><p>Explore the reference library or connect your wallet to join the member experience. New wallets complete one short registration; recognised members go straight in.</p><div><Link className="button button--secondary" to="/resources">Open Resources</Link><button className="button button--primary" onClick={onJoin}>Join Redbelly DAO <ArrowRight size={16}/></button></div></div>
    </div></section>
  </>
}
