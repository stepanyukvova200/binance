import { Button } from "@mui/material"
import './style.css'

export const Home = () => {
  return (
    <div className='home'>
      <div className='home-img'>
        <img src='/home-img.png' alt='home' />
      </div>
      <div className='home-content'>
        <h4>Partial <span className='home-content-title-highlight'>refund of losses</span> for Binance Futures users</h4>
        <h1>Futures Liquidation <br /> Compensation Program</h1>
        <span className="text-m">
          If you traded on Binance Futures and experienced <br/> 
          unexpected liquidations or system-related issues, you may <br/> 
          be eligible for compensation in BNB or USDT (TRC-20).
        </span>
        <Button className='home-content-button button-primary'>
          Connect Wallet
        </Button>
      </div>
    </div>
  )
}