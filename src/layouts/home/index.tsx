import { Button } from "@mui/material"
import './style.css'
import { getAssetPath } from '../../utils/assets'

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-content'>
        <h4>Partial <span className='home-content-title-highlight'>refund of losses</span> for Binance Futures users</h4>
        <h1>Futures Liquidation <br /> Compensation Program</h1>
        <span className="text-m">
          If you traded on Binance Futures and experienced <br/> 
          unexpected liquidations or system-related issues, you may <br/> 
          be eligible for compensation in BNB or USDT (TRC-20).
        </span>
        <div className='home-img'>
          <img className="home-img-pc" src={getAssetPath('/home-img.png')} alt='home' />
          <img className="home-img-mobile" src={getAssetPath('/home-img-mobile.png')} alt='home' />
        </div>
        <Button className='home-content-button button-primary'>
          Connect Wallet
        </Button>
      </div>
    </div>
  )
}