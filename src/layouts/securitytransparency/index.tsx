import { Button } from "@mui/material"
import { Input } from "@mui/material"
import { useState } from "react"
import './style.css'
import { validateWalletAddress } from './validation'
import { getAssetPath } from '../../utils/assets'

export const SecurityTransparency = () => {
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [validationStatus, setValidationStatus] = useState<'unset' | 'correct' | 'incorrect'>('unset')

  const handleCheckStatus = () => {
    if (!walletAddress.trim()) {
      setValidationStatus('incorrect')
      console.log('Validation status: incorrect - Empty address')
      return
    }

    const result = validateWalletAddress(walletAddress)
    if (result.isValid) {
      setValidationStatus('correct')
      console.log('Validation status: correct -', result.network, result.message)
    } else {
      setValidationStatus('incorrect')
      console.log('Validation status: incorrect -', result.message)
    }
  }
  return (
    <div className='security-transparency'>
      <h2>Security & Transparency</h2>
      <span className='text-m security-transparency-content-1'>
        All payouts are processed through verified smart contracts audited by <br/> 
        independent experts.
      </span>
      <span className='text-m security-transparency-content-2'>
        We will never ask for your seed phrase, passwords, or 2FA codes.
      </span>

      <img src={getAssetPath('/security-transparency.png')} alt='security-transparency' />

      <h4>Check Your Compensation Status</h4>
      <span className='text-m security-transparency-content-3'>
        Enter your wallet address below:
      </span>
      <div className="security-transparency-form">
        <Input 
          className='security-transparency-form-input' 
          type="text" 
          placeholder="Wallet address"
          value={walletAddress}
          onChange={(e) => {
            setWalletAddress(e.target.value)
            setValidationStatus('unset')
          }}
          disableUnderline
        />
        <Button 
          className='security-transparency-form-button button-secondary'
          onClick={handleCheckStatus}
        >
          Check Status
        </Button>
      </div>
      {validationStatus === 'correct' && (
        <div className="security-transparency-result">
          <div className="security-transparency-result-field correct">
            <img src={getAssetPath('/correct-icon.svg')} alt='correct' />
            <span className="text-s correct-text">Your address has been verified.</span>
          </div>
          <span className="text-m">You are eligible to receive a compensation payout of <br/>
            <span className="text-highlight-color">1,456.22 USDT (TRC-20)</span>
          </span>
          <Button className="security-transparency-result-button button-primary">
            Connect Wallet to Claim
          </Button>
        </div>
      )}
      {validationStatus === 'incorrect' && (
        <div className="security-transparency-result">
          <div className="security-transparency-result-field incorrect">
            <img src={getAssetPath('/error-icon.svg')} alt='error' />
              <span className="text-s incorrect-text">Not Eligible for Compensation</span>
          </div>
            <span className="text-m">Your wallet address is not included in the current compensation list.</span>
        </div>
      )}
    </div>
  )
}