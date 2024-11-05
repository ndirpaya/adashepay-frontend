import React, { Children } from 'react'
import Navbar from './components/Navbar'
import { useWallet } from '@txnlab/use-wallet'
import ConnectWallet from '../components/web3/ConnectWallet'

type ILayout = {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const { activeAddress } = useWallet()
  const [connect, connectSet] = React.useState<boolean>(false)
  return (
    <div>
      <Navbar address={activeAddress || ""} setAddress={() => connectSet(!connect)} />
      <main>
        {children}
      </main>
      <ConnectWallet openModal={connect} closeModal={() => connectSet(!connect)} />
    </div>
  )
}

export default Layout