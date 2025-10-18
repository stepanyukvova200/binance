import { Button } from "@mui/material"
import './style.css'

export const Header = () => {

  return (
    <header className='header'>
      <div className='header-navigation'>
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className='header-navigation-element header-navigation-element-logo'
        >
          <img src='/logo.svg' alt='logo' />
        </div>

        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className='text-s header-navigation-element'
        >
          Home
        </div>

        <div className='text-s header-navigation-element'>
          Help Center
        </div>

        <div 
          className='text-s header-navigation-element'
          onClick={() => window.scrollTo({ top: (document.getElementById('faq')?.offsetTop || 0) - 64, behavior: 'smooth' })}
        >
          FAQ
        </div>

        <div className='text-s header-navigation-element'>
          Contact Support
        </div>
      </div>

      <div className='header-actions'>
        <Button className='header-actions-element button-secondary'>
          Check Eligibility
        </Button>

        <Button className='header-actions-element button-primary'>
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}