import { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { JoinModal, SiteLayout, WalletModal } from './components/Layout'
import Home from './pages/Home'
import { AboutPage, DevelopersPage, DigestPage, GovernancePage, ResourcesPage, ShowcasePage, TaskboardPage, TreasuryPage } from './pages/PublicPages'
import { CommunityShowcasePage, DashboardPage, MemberResourcesPage, MemberTaskboardPage, MemberTreasuryPage, MyTasksPage, NotificationsPage, ProfilePage, ProposalsPage, VotingPage } from './pages/MemberPages'

const networks = {
  mainnet: {
    chainId: '0x97',
    chainName: 'Redbelly Mainnet',
    nativeCurrency: { name: 'Redbelly Token', symbol: 'RBNT', decimals: 18 },
    rpcUrls: ['https://governors.mainnet.redbelly.network'],
    blockExplorerUrls: ['https://redbelly.routescan.io'],
  },
  testnet: {
    chainId: '0x99',
    chainName: 'Redbelly Testnet',
    nativeCurrency: { name: 'Redbelly Token', symbol: 'RBNT', decimals: 18 },
    rpcUrls: ['https://governors.testnet.redbelly.network'],
    blockExplorerUrls: ['https://redbelly.testnet.routescan.io'],
  },
}

const demoWallet = { address: '0x71C4aB58F29D63c408eB18390A2c77D89F20', chainId: '0x97', correctNetwork: true, networkName: 'Redbelly Mainnet' }

export default function App() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get('theme')
    if (requested === 'light' || requested === 'dark') return requested
    return localStorage.getItem('rb-theme') || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
  const [walletOpen, setWalletOpen] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)
  const [wallet, setWallet] = useState(() => new URLSearchParams(window.location.search).has('preview') ? demoWallet : { address: '', chainId: '', correctNetwork: false, networkName: '' })
  const [members, setMembers] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('rb-dao-members') || '[]')
    return saved.some(member => member.wallet?.toLowerCase() === demoWallet.address.toLowerCase()) ? saved : [...saved, { wallet: demoWallet.address, name: 'Demo member', preview: true }]
  })
  const isKnownMember = Boolean(wallet.address && members.some(member => member.wallet?.toLowerCase() === wallet.address.toLowerCase()))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('rb-theme', theme)
  }, [theme])

  const updateWallet = useCallback((address, chainId) => {
    const numeric = typeof chainId === 'string' ? parseInt(chainId, 16) : Number(chainId)
    const correctNetwork = numeric === 151 || numeric === 153
    setWallet({ address, chainId, correctNetwork, networkName: numeric === 151 ? 'Redbelly Mainnet' : numeric === 153 ? 'Redbelly Testnet' : `Chain ${numeric}` })
  }, [])

  useEffect(() => {
    if (!window.ethereum) return
    if (localStorage.getItem('rb-wallet-disconnected') === 'true') return
    window.ethereum.request({ method: 'eth_accounts' }).then(accounts => {
      if (accounts[0]) window.ethereum.request({ method: 'eth_chainId' }).then(chain => updateWallet(accounts[0], chain))
    }).catch(() => {})
    const accountHandler = accounts => localStorage.getItem('rb-wallet-disconnected') === 'true' ? null : accounts[0] ? window.ethereum.request({ method: 'eth_chainId' }).then(chain => updateWallet(accounts[0], chain)) : setWallet({address:'',chainId:'',correctNetwork:false,networkName:''})
    const chainHandler = chain => localStorage.getItem('rb-wallet-disconnected') !== 'true' && wallet.address && updateWallet(wallet.address, chain)
    window.ethereum.on?.('accountsChanged', accountHandler)
    window.ethereum.on?.('chainChanged', chainHandler)
    return () => { window.ethereum.removeListener?.('accountsChanged', accountHandler); window.ethereum.removeListener?.('chainChanged', chainHandler) }
  }, [updateWallet, wallet.address])

  const connect = async () => {
    if (!window.ethereum) return false
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const chain = await window.ethereum.request({ method: 'eth_chainId' })
      localStorage.removeItem('rb-wallet-disconnected')
      updateWallet(accounts[0], chain)
      return true
    } catch (error) {
      console.warn('Wallet connection cancelled', error)
      return false
    }
  }

  const demoConnect = () => { localStorage.removeItem('rb-wallet-disconnected'); setWallet(demoWallet) }

  const switchNetwork = async (target = 'mainnet') => {
    if (!window.ethereum) { demoConnect(); return }
    const network = networks[target]
    try {
      await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: network.chainId }] })
    } catch (error) {
      if (error.code === 4902) await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [network] })
    }
    const chain = await window.ethereum.request({ method: 'eth_chainId' })
    updateWallet(wallet.address, chain)
  }

  const openMemberSpace = () => {
    if (!wallet.address) { setWalletOpen(true); return }
    if (isKnownMember) navigate('/app/dashboard')
    else setJoinOpen(true)
  }

  const openJoin = () => {
    if (isKnownMember) { navigate('/app/dashboard'); return }
    setJoinOpen(true)
  }

  const registerMember = details => {
    if (!wallet.address) return
    const next = [...members.filter(member => member.wallet?.toLowerCase() !== wallet.address.toLowerCase()), { ...details, wallet: wallet.address, joinedAt: new Date().toISOString() }]
    localStorage.setItem('rb-dao-members', JSON.stringify(next))
    setMembers(next)
    setJoinOpen(false)
    navigate('/app/dashboard')
  }

  const disconnect = async () => {
    try { await window.ethereum?.request?.({ method: 'wallet_revokePermissions', params: [{ eth_accounts: {} }] }) } catch { /* Not every wallet supports permission revocation. */ }
    localStorage.setItem('rb-wallet-disconnected', 'true')
    setWallet({ address: '', chainId: '', correctNetwork: false, networkName: '' })
    setWalletOpen(false)
    setJoinOpen(false)
    navigate('/')
  }

  return <>
    <SiteLayout theme={theme} onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} wallet={wallet} onConnect={openMemberSpace} onJoin={openJoin} onDisconnect={disconnect}>
      <Routes>
        <Route path="/" element={<Home onJoin={openJoin}/>} />
        <Route path="/digest" element={<DigestPage/>} />
        <Route path="/showcase" element={<ShowcasePage/>} />
        <Route path="/taskboard" element={<TaskboardPage/>} />
        <Route path="/treasury" element={<TreasuryPage/>} />
        <Route path="/governance" element={<GovernancePage/>} />
        <Route path="/developers" element={<DevelopersPage/>} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/about" element={<AboutPage onJoin={openJoin}/>} />
        <Route path="/app/dashboard" element={<DashboardPage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/voting" element={<VotingPage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/proposals" element={<ProposalsPage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/treasury" element={<MemberTreasuryPage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/taskboard" element={<MemberTaskboardPage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/showcase" element={<CommunityShowcasePage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/resources" element={<MemberResourcesPage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/tasks" element={<MyTasksPage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/profile" element={<ProfilePage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="/app/notifications" element={<NotificationsPage wallet={wallet} registered={isKnownMember}/>} />
        <Route path="*" element={<Home onJoin={openJoin}/>} />
      </Routes>
    </SiteLayout>
    <WalletModal open={walletOpen} onClose={() => setWalletOpen(false)} wallet={wallet} onConnect={connect} onDemo={demoConnect} onSwitchNetwork={switchNetwork} onContinue={openMemberSpace} knownMember={isKnownMember}/>
    <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} wallet={wallet} onConnect={connect} onDemo={demoConnect} knownMember={isKnownMember} onRegister={registerMember} onEnter={() => navigate('/app/dashboard')}/>
  </>
}
