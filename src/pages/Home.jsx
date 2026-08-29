import { ArrowRight, BookOpen, ExternalLink, Hammer, Library, Network, Newspaper, Users, Vote, WalletCards } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow } from '../components/UI'

const paths = [
  {
    number: '01',
    icon: BookOpen,
    label: 'Understand',
    title: 'See the whole DAO clearly.',
    description: 'Understand the people, structure and decisions shaping the community right now.',
    items: ['DAO structure', 'Governance guide', 'Current leadership', 'DAO Digest'],
    to: '/about',
    action: 'Explore the DAO',
  },
  {
    number: '02',
    icon: Vote,
    label: 'Decide',
    title: 'Turn your stake into a voice.',
    description: 'Follow proposals, vote through Snapshot and see how shared resources are stewarded.',
    items: ['Active voting', 'Proposal process', 'Recent decisions', 'Treasury'],
    to: '/governance',
    action: 'View governance',
  },
  {
    number: '03',
    icon: Hammer,
    label: 'Contribute',
    title: 'Make useful work matter.',
    description: 'Join initiatives, find opportunities and share what you build with the wider community.',
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
          <Eyebrow><i className="simple-live-dot"/> Community-powered · Stakeholder-led</Eyebrow>
          <h1>A shared stake in <span>what comes next.</span></h1>
          <p>Follow the decisions shaping Redbelly, add your voice and help turn community energy into meaningful progress for the blockchain ecosystem.</p>
          <div className="hero-actions"><a className="button button--primary" href="#participate">Explore the DAO <ArrowRight size={17}/></a><button className="button button--secondary" onClick={onJoin}>Join DAO</button></div>
        </div>

        <aside className="dao-overview" aria-label="Redbelly DAO at a glance">
          <header><span>DAO at a glance</span><small>Community stakeholder layer</small></header>
          <div className="dao-overview__grid">
            <article><span><Users size={15}/> Structure</span><strong>Community-led</strong><p>Members, working groups and shared initiatives.</p></article>
            <article><span><Vote size={15}/> Decisions</span><strong>Snapshot voting</strong><p>Visible proposals, votes and outcomes.</p></article>
            <article><span><Network size={15}/> Participation</span><strong>Action-oriented</strong><p>Initiatives, contributions and the Taskboard.</p></article>
            <article><span><WalletCards size={15}/> Member access</span><strong>Wallet-gated</strong><p>Personal activity and relevant DAO tools.</p></article>
          </div>
          <footer><span>Redbelly Network</span><i/><span>Community DAO</span><i/><span>RBNT</span></footer>
        </aside>
      </div>
    </section>

    <section className="section simple-paths" id="participate"><div className="container">
      <div className="simple-section-head"><div><Eyebrow>Find your place</Eyebrow><h2>Enter with purpose.</h2></div><p>Catch up, have your say or put your skills to work. Choose the path that fits what you want to do today.</p></div>
      <div className="simple-paths__grid">
        {paths.map(path => { const Icon = path.icon; return <article className="simple-path" key={path.number}><div className="simple-path__top"><span><Icon size={18}/><i>{path.number}</i></span><small>{path.label}</small></div><h3>{path.title}</h3><p>{path.description}</p><ul>{path.items.map(item => <li key={item}>{item}</li>)}</ul><Link to={path.to}>{path.action} <ArrowRight size={15}/></Link></article> })}
      </div>
    </div></section>

    <section className="section simple-connected"><div className="container simple-connected__card">
      <div><Eyebrow>One connected DAO</Eyebrow><h2>Catch up.<br/>Have your say.<br/>Move Redbelly forward.</h2><p>Everything connects: the context behind a decision, the vote that moves it forward and the community work that turns it into impact.</p></div>
      <nav aria-label="Featured DAO links"><Link to="/digest"><span><Newspaper/><small>01</small><b>Read the latest DAO Digest</b></span><ArrowRight size={17}/></Link><Link to="/governance"><span><Vote/><small>02</small><b>Browse proposals and decisions</b></span><ArrowRight size={17}/></Link><Link to="/resources"><span><Library/><small>03</small><b>Open the resource library</b></span><ArrowRight size={17}/></Link><a href="https://redbelly.network" target="_blank" rel="noreferrer"><span><Network/><small>04</small><b>Visit Redbelly Network</b></span><ExternalLink size={16}/></a></nav>
    </div></section>
  </>
}
