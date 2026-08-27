import { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { JoinModal, SiteLayout, WalletModal } from './components/Layout'
import Home from './pages/Home'
import { AboutPage, DevelopersPage, DigestPage, GovernancePage, ResourcesPage, ShowcasePage, TaskboardPage, TreasuryPage } from './pages/PublicPages'
import { DashboardPage, MyTasksPage, NotificationsPage, ProfilePage } from './pages/MemberPages'

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
  const [theme, setTheme] = useState(() => localStorage.getItem('rb-theme') || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [walletOpen, setWalletOpen] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)
  const [wallet, setWallet] = useState(() => new URLSearchParams(window.location.search).has('preview') ? demoWallet : { address: '', chainId: '', correctNetwork: false, networkName: '' })

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
    window.ethereum.request({ method: 'eth_accounts' }).then(accounts => {
      if (accounts[0]) window.ethereum.request({ method: 'eth_chainId' }).then(chain => updateWallet(accounts[0], chain))
    }).catch(() => {})
    const accountHandler = accounts => accounts[0] ? window.ethereum.request({ method: 'eth_chainId' }).then(chain => updateWallet(accounts[0], chain)) : setWallet({address:'',chainId:'',correctNetwork:false,networkName:''})
    const chainHandler = chain => wallet.address && updateWallet(wallet.address, chain)
    window.ethereum.on?.('accountsChanged', accountHandler)
    window.ethereum.on?.('chainChanged', chainHandler)
    return () => { window.ethereum.removeListener?.('accountsChanged', accountHandler); window.ethereum.removeListener?.('chainChanged', chainHandler) }
  }, [updateWallet, wallet.address])

  const connect = async () => {
    setWalletOpen(true)
    if (!window.ethereum) return
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const chain = await window.ethereum.request({ method: 'eth_chainId' })
      updateWallet(accounts[0], chain)
    } catch (error) {
      console.warn('Wallet connection cancelled', error)
    }
  }

  const demoConnect = () => setWallet(demoWallet)

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

  const openMemberSpace = () => wallet.address ? navigate('/app/dashboard') : connect()

  return <>
    <SiteLayout theme={theme} onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} wallet={wallet} onConnect={openMemberSpace} onJoin={() => setJoinOpen(true)}>
      <Routes>
        <Route path="/" element={<Home onJoin={() => setJoinOpen(true)} onConnect={connect}/>} />
        <Route path="/digest" element={<DigestPage/>} />
        <Route path="/showcase" element={<ShowcasePage/>} />
        <Route path="/taskboard" element={<TaskboardPage/>} />
        <Route path="/treasury" element={<TreasuryPage/>} />
        <Route path="/governance" element={<GovernancePage/>} />
        <Route path="/developers" element={<DevelopersPage/>} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/about" element={<AboutPage onJoin={() => setJoinOpen(true)}/>} />
        <Route path="/app/dashboard" element={<DashboardPage wallet={wallet}/>} />
        <Route path="/app/tasks" element={<MyTasksPage wallet={wallet}/>} />
        <Route path="/app/profile" element={<ProfilePage wallet={wallet}/>} />
        <Route path="/app/notifications" element={<NotificationsPage wallet={wallet}/>} />
        <Route path="*" element={<Home onJoin={() => setJoinOpen(true)} onConnect={connect}/>} />
      </Routes>
    </SiteLayout>
    <WalletModal open={walletOpen} onClose={() => setWalletOpen(false)} wallet={wallet} onConnect={connect} onDemo={demoConnect} onSwitchNetwork={switchNetwork}/>
    <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)}/>
  </>
}
