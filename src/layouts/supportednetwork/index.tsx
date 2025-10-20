import { Button } from '@mui/material'
import './style.css'
import { getAssetPath } from '../../utils/assets'

export const SupportedNetworks = () => {
  return (
    <div className='supported-network'>
      <h2>Supported Networks</h2>
      <span className='text-m'>
        Connect your wallet via WalletConnect to securely receive your payment.
      </span>
      <div className='supported-network-list'>
        <img className='supported-network-list-pc-img' src={getAssetPath('/supported-network-list-1.png')} alt='supported-network-list-1' />
        <img className='supported-network-list-pc-img' src={getAssetPath('/supported-network-list-2.png')} alt='supported-network-list-2' />
        <div className='supported-network-list-mobile-item'>
          <img src={getAssetPath("supported-network-list-1-mobile.png")} alt="supported-network-list-1-mobile" />
          <h3>BNB Smart Chain (BEP-20)</h3>
        </div>
        <div className='supported-network-list-mobile-item'>
          <img src={getAssetPath("supported-network-list-2-mobile.png")} alt="supported-network-list-2-mobile" />
          <h3>TRON Network (TRC-20)</h3>
        </div>

      </div>

      <div className="supported-network-program-duration">
        <img className='supported-network-program-duration-background' src={getAssetPath('/program-duration-background.svg')} alt='supported-network-program-duration' />
        
        <img className='supported-network-program-duration-icon' src={getAssetPath('/program-duration-icon.svg')} alt='supported-network-program-duration-icon' />
        <div className="supported-network-program-duration-content">          
          <h4>
            Program Duration
          </h4>
          <span className='text-m'>
            The compensation program is active until <span className='supported-network-program-duration-content-highlight'>November 30, 2025</span>. <br />
            After this date, claims will no longer be accepted.
          </span>
        </div>

        <Button className='supported-network-program-duration-button button-primary'>
          Connect Wallet
        </Button>
      </div>
    </div>
  )
}