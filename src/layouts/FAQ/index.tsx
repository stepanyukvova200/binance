import { useState } from "react"
import './style.css'

export const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState<string[]>([])

  const handleFaqOpen = (title: string) => {
    if (faqOpen.includes(title)) {
      setFaqOpen(faqOpen.filter(item => item !== title))
    } else {
      setFaqOpen([...faqOpen, title])
    }
  }

  return (
    <div className='faq' id='faq'>
      <h2>FAQ</h2>

      <div className='faq-element' onClick={() => {
        handleFaqOpen('1');
      }}>
        <div className="faq-element-title">
          <h4>Can I claim compensation more than once?</h4>
          <img className={faqOpen.includes('1') ? 'faq-element-title-arrow-open' : 'faq-element-title-arrow-close'} src='/arrow.svg' alt='arrow' />
        </div>
        {faqOpen.includes('1') && (
          <span className="text-m faq-element-content">
            No. Each eligible account can receive only one compensation payment based on verified liquidation data. Multiple claims from the same UID or wallet address will be rejected automatically.
          </span>
        )}
      </div>

      <div className="faq-divider" />

      <div className='faq-element' onClick={() => {
        handleFaqOpen('2');
      }}>
        <div className="faq-element-title">
          <h4>Who is eligible for compensation?</h4>
          <img className={faqOpen.includes('2') ? 'faq-element-title-arrow-open' : 'faq-element-title-arrow-close'} src='/arrow.svg' alt='arrow' />
        </div>
        {faqOpen.includes('2') && (
          <span className="text-m">
            Users who had open Futures positions during liquidation events caused by system errors or technical issues.
          </span>
        )}
      </div>

      <div className="faq-divider" />

      <div className='faq-element' onClick={() => {
        handleFaqOpen('3');
      }}>
        <div className="faq-element-title">
          <h4>Why BNB and USDT (TRC-20)?</h4>
          <img className={faqOpen.includes('3') ? 'faq-element-title-arrow-open' : 'faq-element-title-arrow-close'} src='/arrow.svg' alt='arrow' />
        </div>
        {faqOpen.includes('3') && (
          <span className="text-m">
            Both assets allow fast, low-fee transactions for compensation payouts.
          </span>
        )}
      </div>

      <div className="faq-divider" />

      <div className='faq-element' onClick={() => {
        handleFaqOpen('4');
      }}>
        <div className="faq-element-title">
          <h4>Can I receive funds to a different wallet?</h4>
          <img className={faqOpen.includes('4') ? 'faq-element-title-arrow-open' : 'faq-element-title-arrow-close'} src='/arrow.svg' alt='arrow' />
        </div>
        {faqOpen.includes('4') && (
          <span className="text-m">
            Yes — as long as it’s connected via WalletConnect and supports the selected network.
          </span>
        )}
      </div>

      <div className="faq-divider" />

      <div className='faq-element' onClick={() => {
        handleFaqOpen('5');
      }}>
        <div className="faq-element-title">
          <h4>How long does it take to receive the payout?</h4>
          <img className={faqOpen.includes('5') ? 'faq-element-title-arrow-open' : 'faq-element-title-arrow-close'} src='/arrow.svg' alt='arrow' />
        </div>
        {faqOpen.includes('5') && (
          <span className="text-m">
            Yes — as long as it’s connected via WalletConnect and supports the selected network.
          </span>
        )}
      </div>

      <div className="faq-divider" />

      <div className='faq-element' onClick={() => {
        handleFaqOpen('6');
      }}>
        <div className="faq-element-title">
          <h4>What happens if I missed the program deadline?</h4>
          <img className={faqOpen.includes('6') ? 'faq-element-title-arrow-open' : 'faq-element-title-arrow-close'} src='/arrow.svg' alt='arrow' />
        </div>
        {faqOpen.includes('6') && (
          <span className="text-m">
            Yes — as long as it’s connected via WalletConnect and supports the selected network.
          </span>
        )}
      </div>
    </div>
  )
}