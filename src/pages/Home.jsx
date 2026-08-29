import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow } from '../components/UI'

const paths = [
  {
    number: '01',
    label: 'Understand',
    title: 'Learn how the DAO works.',
    description: 'Start with the organization, its governance model and the context behind current activity.',
    items: ['DAO structure', 'Governance guide', 'Current leadership', 'DAO Digest'],
    to: '/about',
    action: 'Explore the DAO',
  },
  {
    number: '02',
    label: 'Decide',
    title: 'Take part in governance.',
    description: 'Follow proposals, vote through Snapshot and understand how shared resources are stewarded.',
    items: ['Active voting', 'Proposal process', 'Recent decisions', 'Treasury'],
    to: '/governance',
    action: 'View governance',
  },
  {
    number: '03',
    label: 'Contribute',
    title: 'Help move work forward.',
    description: 'Join initiatives, find opportunities and share useful work with the wider DAO community.',
    items: ['Community Taskboard', 'Member initiatives', 'Community Showcase', 'Developer resources'],
    to: '/taskboard',
    action: 'Find opportunities',
  },
]

export default function Home({ onJoin }) {
  return <>
    <section className="simple-hero">
      <div className="container simple-hero__grid">
        <div className="simple-hero__copy">
          <Eyebrow><i className="simple-live-dot"/> Redbelly Community DAO</Eyebrow>
          <h1>A shared stake in <span>what comes next.</span></h1>
          <p>Redbelly DAO is where community stakeholders understand what is happening, make collective decisions and support work that strengthens the blockchain ecosystem.</p>
          <div className="hero-actions"><a className="button button--primary" href="#participate">Explore the DAO <ArrowRight size={17}/></a><button className="button button--secondary" onClick={onJoin}>Join DAO</button></div>
        </div>

        <aside className="dao-overview" aria-label="Redbelly DAO at a glance">
          <header><span>DAO at a glance</span><small>Community stakeholder layer</small></header>
          <div className="dao-overview__grid">
            <article><span>Structure</span><strong>Community-led</strong><p>Members, working groups and shared initiatives.</p></article>
            <article><span>Decisions</span><strong>Snapshot voting</strong><p>Visible proposals, votes and outcomes.</p></article>
            <article><span>Participation</span><strong>Action-oriented</strong><p>Initiatives, contributions and the Taskboard.</p></article>
            <article><span>Member access</span><strong>Wallet-gated</strong><p>Personal activity and relevant DAO tools.</p></article>
          </div>
          <footer><span>Redbelly Network</span><i/><span>Community DAO</span><i/><span>RBNT</span></footer>
        </aside>
      </div>
    </section>

    <section className="section simple-paths" id="participate"><div className="container">
      <div className="simple-section-head"><div><Eyebrow>Find your place</Eyebrow><h2>Three clear ways into the DAO.</h2></div><p>Start with information, decisions or practical contribution. Everything else lives one level deeper.</p></div>
      <div className="simple-paths__grid">
        {paths.map(path => <article className="simple-path" key={path.number}><div className="simple-path__top"><span>{path.number}</span><small>{path.label}</small></div><h3>{path.title}</h3><p>{path.description}</p><ul>{path.items.map(item => <li key={item}>{item}</li>)}</ul><Link to={path.to}>{path.action} <ArrowRight size={15}/></Link></article>)}
      </div>
    </div></section>

    <section className="section simple-connected"><div className="container simple-connected__card">
      <div><Eyebrow>One connected DAO</Eyebrow><h2>Understand what happened.<br/>Decide what matters.<br/>Contribute where it counts.</h2><p>Each area leads to the next useful step, so a first-time visitor can learn about the DAO and a returning member can quickly get back into the work.</p></div>
      <nav aria-label="Featured DAO links"><Link to="/digest"><span><small>01</small><b>Read the latest DAO Digest</b></span><ArrowRight size={17}/></Link><Link to="/governance"><span><small>02</small><b>Browse proposals and decisions</b></span><ArrowRight size={17}/></Link><Link to="/resources"><span><small>03</small><b>Open the resource library</b></span><ArrowRight size={17}/></Link><a href="https://redbelly.network" target="_blank" rel="noreferrer"><span><small>04</small><b>Visit Redbelly Network</b></span><ExternalLink size={16}/></a></nav>
    </div></section>
  </>
}
