import './style.css'
import { getAssetPath } from '../../utils/assets'

export const Disclaimer = () => {
  return (
    <div className='disclaimer'>
      <img className='disclaimer-background' src={getAssetPath('/disclaimer-background.png')} alt='disclaimer-background' />
      <div className='disclaimer-content'>
        <h2>Disclaimer</h2>
        <span className='text-m disclaimer-content-text'>
          This site does not request your Binance login credentials and is not <br/> 
          connected to internal Binance systems.
        </span>
        <span className='text-m'>
          All transactions are processed securely through on-chain smart <br/>
          contracts.
        </span>
      </div>
      <img className='disclaimer-logo' src={getAssetPath('/disclaimer-logo.png')} alt='disclaimer-logo' />
    </div>
  )
}