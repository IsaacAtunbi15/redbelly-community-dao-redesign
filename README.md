# Redbelly Community DAO: Website Redesign

A working frontend prototype for a ground-up redesign of `redbellydao.network`. The project separates a complete public DAO website from a personalised wallet-connected member experience.

## What is included

- Public homepage with a live-community product direction
- DAO Digest and edition archive
- Community Showcase with filters
- Public Taskboard with search and status filtering
- Treasury overview, allocation, history, and transactions
- Governance, active voting, history, and proposal process
- Developer onboarding and verified Redbelly network details
- Categorised resource hub
- Dedicated About the DAO page
- Redesigned Join the DAO onboarding flow
- Wallet connection, Redbelly network detection, add/switch flow
- Connected-member dashboard, tasks, profile, and notifications
- First-class light and dark themes
- Responsive desktop, tablet, and mobile layouts

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Build the production bundle:

```bash
npm run build
npm run preview
```

Run the code-quality check:

```bash
npm run lint
```

## Preview the connected experience

1. Select **Connect wallet**.
2. If an injected browser wallet is available, the prototype requests a standard EIP-1193 connection.
3. Without a wallet extension, choose **Preview member experience**.
4. Open the dashboard from the successful connection state.

The real-wallet flow detects Redbelly Mainnet (chain ID `151`) and Testnet (chain ID `153`). If the active chain is unsupported, the interface offers to add or switch to Redbelly Mainnet.

## Content and data status

This is a design-focused frontend skeleton, as permitted by the redesign brief. Task names and resource titles are based on supplied DAO materials and current public properties. Dashboard metrics, proposal vote totals, treasury balances, contributor identities, activity events, and Digest copy are representative demo data, not production DAO records.

Production integration points include:

- Taskboard API/data source
- Snapshot space and proposal API
- Treasury wallet/indexer data
- DAO publication CMS
- Community Showcase submissions
- Member identity and notification services
- Production wallet library and eligibility checks

## Research basis

The redesign was informed by:

- The live `redbellydao.network` homepage and resources page
- The current public Community Taskboard and its Cycle 2 rules
- Redbelly's official developer portal
- Official Redbelly chain configuration documentation
- The supplied DAO redesign brief, original project overview, task roster, and design tokens

Useful existing Redbelly visual assets were preserved in `public/assets`; the main interface uses lightweight CSS-native visual systems to avoid unnecessary imagery and keep the prototype fast.

## Stack

- React
- React Router
- Vite
- Lucide icons
- Plain CSS design system (no UI framework)

## Important production note

The wallet implementation is suitable for prototype demonstration. A production launch should use the DAO's selected wallet provider, validated RPC/explorer configuration, account/session handling, accessibility testing, real API error states, security review, and current approved governance/treasury data.
