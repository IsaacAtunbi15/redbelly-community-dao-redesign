export const tasks = [
  { id: 'TASK-15', title: 'DAO website redesign', category: 'Design & strategy', reward: '$150', status: 'In progress', progress: 72, applicants: 4 },
  { id: 'TASK-14', title: 'EligibilitySDK integration guide', category: 'Developer education', reward: '$100', status: 'Open', progress: 0, applicants: 2 },
  { id: 'TASK-13', title: 'Zero-to-hero developer onboarding kit', category: 'Developer education', reward: '$120', status: 'Open', progress: 0, applicants: 3 },
  { id: 'TASK-11', title: 'RBNT utility & ecosystem visibility', category: 'Research', reward: '$150', status: 'Review', progress: 100, applicants: 5 },
  { id: 'TASK-08', title: 'Existing bridge integration guide', category: 'Developer docs', reward: '$100', status: 'Completed', progress: 100, applicants: 4 },
]

export const projects = [
  { title: 'Community Taskboard', maker: 'DAO Operations Guild', type: 'Platform', mark: 'TB', description: 'A transparent contribution marketplace connecting meaningful work with community talent.', accent: 'ruby' },
  { title: 'Redbelly Troubleshooting Wiki', maker: 'Developer Guild', type: 'Developer tool', mark: '</>', description: 'Field-tested answers to the problems builders hit while shipping on Redbelly.', accent: 'blue' },
  { title: 'CAT Vault', maker: 'Aisha O. + contributors', type: 'Protocol', mark: 'CV', description: 'A compliant ERC-4626 vault prototype with on-chain jurisdiction controls.', accent: 'gold' },
  { title: 'DAO Digest', maker: 'Communications Guild', type: 'Publication', mark: 'DD', description: 'A concise monthly record of decisions, shipped work and opportunities across the DAO.', accent: 'violet' },
]

export const proposals = [
  { id: 'RCDP-07', title: 'Adopt Cycle 2 taskboard rules', status: 'Active', ends: '2d 14h', yes: 78, votes: '1.28M RBNT' },
  { id: 'RCDP-06', title: 'Fund the Community Showcase pilot', status: 'Passed', ends: 'Executed', yes: 91, votes: '1.74M RBNT' },
  { id: 'RCDP-05', title: 'Ratify contributor Code of Conduct', status: 'Passed', ends: 'Executed', yes: 96, votes: '2.08M RBNT' },
]

export const transactions = [
  { type: 'Contributor rewards', date: '26 Aug 2026', amount: '-18,400 RBNT', status: 'Confirmed' },
  { type: 'Taskboard allocation', date: '20 Aug 2026', amount: '-7,250 RBNT', status: 'Confirmed' },
  { type: 'Treasury inflow', date: '15 Aug 2026', amount: '+42,000 RBNT', status: 'Confirmed' },
  { type: 'Community tooling', date: '09 Aug 2026', amount: '-3,100 RBNT', status: 'Confirmed' },
]

export const resources = [
  { title: 'DAO Constitution v1.2', category: 'Governance', description: 'The ratified framework for community governance and member responsibilities.', format: 'PDF' },
  { title: 'Code of Conduct', category: 'DAO essentials', description: 'Shared expectations for respectful, productive participation.', format: 'PDF' },
  { title: 'Proposal submission flow', category: 'Governance', description: 'From an early idea to community discussion, Snapshot vote and execution.', format: 'Guide' },
  { title: 'Redbelly developer portal', category: 'Developers', description: 'Network architecture, SDKs, APIs and technical references.', format: 'External' },
  { title: 'Taskboard rulebook', category: 'Contributors', description: 'How cycles, submissions, reviews, rewards and appeals work.', format: 'Web' },
  { title: 'Community leadership structure', category: 'DAO essentials', description: 'An overview of guilds, working groups and community stewards.', format: 'PDF' },
]

export const digestEditions = [
  { month: 'August 2026', number: 'Edition 04', title: 'The contribution layer comes alive', summary: 'Cycle 2 opens, the Taskboard evolves and three community-built developer resources ship.', featured: true },
  { month: 'July 2026', number: 'Edition 03', title: 'From proposals to products', summary: 'A month of governance decisions, working prototypes and a clearer contributor path.' },
  { month: 'June 2026', number: 'Edition 02', title: 'Builders take the lead', summary: 'New technical guild initiatives and the first community showcase nominations.' },
]
