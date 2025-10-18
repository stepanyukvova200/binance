import './style.css'
import { getAssetPath } from '../../utils/assets'

export const HowItWork = () => {
  return (
    <div className='how-it-work'>
      <h2>How It Works</h2>
      <div className='how-it-work-steps'>
        <div className='how-it-work-step'>
          <img src={getAssetPath('/how-it-work-step-1.svg')} alt='how-it-work-step-1' />
          <h4>Eligibility Check</h4>
          <span className='text-m'>
            Our system automatically verifies whether your account qualifies for compensation.
          </span>
        </div>

        <div className='how-it-work-step'>
          <img src={getAssetPath('/how-it-work-step-2.svg')} alt='how-it-work-step-2' />
          <h4>Choose Compensation Currency</h4>
          <span className='text-m'>
            Select between BNB or USDT (TRC-20) in your personal dashboard.
          </span>
        </div>

        <div className='how-it-work-step'>
          <img src={getAssetPath('/how-it-work-step-3.svg')} alt='how-it-work-step-3' />
          <h4>Receive Your Funds</h4>
          <span className='text-m'>
            Compensation will be sent directly to your connected wallet within 24 hours after confirmation.
          </span>
        </div>
      </div>
    </div>
  )
}