import { Button } from "@mui/material"
import './style.css'
import { getAssetPath } from '../../utils/assets'
import { useState } from "react"
import { Modal } from "@mui/material"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='header'>
      <div className='header-navigation'>
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className='header-navigation-element-logo'
        >
          <img src={getAssetPath('/logo.svg')} alt='logo' />
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
        <Button 
          className='header-actions-element button-secondary'
          onClick={() => window.scrollTo({ top: (document.getElementById('security-transparency')?.offsetTop || 0) - 64, behavior: 'smooth' })}
        >
          Check Eligibility
        </Button>

        <Button className='header-actions-element button-primary'>
          Connect Wallet
        </Button>

        <div className="header-actions-element-mobile" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <img src={getAssetPath('/burger-menu.svg')} alt='burger-menu' />
        </div>
      </div>

      <Modal open={menuOpen} onClose={() => setMenuOpen(false)}>
        <div className="modal-menu">
          <header className='header'>
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='header-navigation-element-logo'
            >
              <img src={getAssetPath('/logo.svg')} alt='logo' />
            </div>
            <div className='header-actions'>
              <Button className='header-actions-element button-secondary'>
                Check Eligibility
              </Button>

              <Button className='header-actions-element button-primary'>
                Connect Wallet
              </Button>

              <div className="header-actions-element-mobile" onClick={() => {
                setMenuOpen(!menuOpen);
              }}>
                <img src={getAssetPath('/close-menu.svg')} alt='close-menu' />
              </div>
            </div>
          </header>
          <div className='header-navigation'>
            <div
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className='text-s header-navigation-element'
            >
              Home
            </div>

            <div className='text-s header-navigation-element'>
              Help Center
            </div>

            <div
              className='text-s header-navigation-element'
              onClick={() => {
                setMenuOpen(false)
                window.scrollTo({ top: (document.getElementById('security-transparency')?.offsetTop || 0) - 64, behavior: 'smooth' })
              }}
            >
              Check Eligibility
            </div>

            <div
              className='text-s header-navigation-element'
              onClick={() => {
                setMenuOpen(false)
                window.scrollTo({ top: (document.getElementById('faq')?.offsetTop || 0) - 64, behavior: 'smooth' })
              }}
            >
              FAQ
            </div>

            <div className='text-s header-navigation-element'>
              Contact Support
            </div>
          </div>
        </div>
      </Modal>
    </header>
  )
}