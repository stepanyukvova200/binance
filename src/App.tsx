import { useState } from 'react';
import './App.css';
import { Header } from './layouts/header';
import { Home } from './layouts/home';
import { HowItWork } from './layouts/howitwork';
import { SupportedNetworks } from './layouts/supportednetwork';
import { SecurityTransparency } from './layouts/securitytransparency';
import { FAQ } from './layouts/FAQ';
import { Disclaimer } from './layouts/disclaimer';
import { Footer } from './layouts/footer';
import { Button, Modal } from '@mui/material';

function App() {
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [openFailedModal, setOpenFailedModal] = useState<boolean>(false);
  const [openConnectingModal, setOpenConnectingModal] = useState<boolean>(false);
  
  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <Home />
        <HowItWork />
        <SupportedNetworks />
        <SecurityTransparency />
        <FAQ />
        <Disclaimer />
        <Footer />
      </main>

      <Modal open={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <div className='modal'>
          <div className='modal-top'>
            <img src='/success-modal.svg' alt='success-modal' />
            <img className='modal-top-close' src='/modal-close.svg' alt='modal-close' onClick={() => setOpenSuccessModal(false)}/>
          </div>

          <h3>Wallet connected successfully</h3>
          <span className="text-m modal-content-text-1">
            Your wallet has been securely linked to the <br/> 
            compensation program.
          </span>
          <span className="text-m modal-content-text-2">
            You can now check your eligibility and claim <br/> 
            your payout.
          </span>
          <Button className='modal-content-button button-primary'>
            Continue
          </Button>
        </div>
      </Modal>

      <Modal open={openFailedModal} onClose={() => setOpenFailedModal(false)}>
        <div className='modal'>
          <div className='modal-top'>
            <img src='/failed-modal.svg' alt='failed-modal' />
            <img className='modal-top-close' src='/modal-close.svg' alt='modal-close' onClick={() => setOpenFailedModal(false)} />
          </div>

          <h3>Connection failed</h3>
          <span className="text-m modal-content-text-1">
            We couldn’t connect your wallet. <br/> 
            Please check your network and try again.
          </span>
          <span className="text-m modal-content-text-2">
            If the issue persists, make sure you’re using a supported network (BNB Smart Chain or TRON TRC-20).
          </span>
          <Button className='modal-content-button button-primary'>
            Try again
          </Button>
        </div>
      </Modal>

      <Modal open={openConnectingModal} onClose={() => setOpenConnectingModal(false)}>
        <div className='modal'>
          <div className='modal-top'>
            <img src='/connecting-modal.svg' alt='connecting-modal' />
            <img className='modal-top-close' src='/modal-close.svg' alt='modal-close' onClick={() => setOpenConnectingModal(false)} />
          </div>

          <h3>Connecting wallet…</h3>
          <span className="text-m modal-content-text-1">
            Please confirm the connection request in <br/> 
            your wallet app.
          </span>
          <span className="text-m">
            Do not close this window until the process is <br/> 
            complete.
          </span>
        </div>
      </Modal>
    </div>
  );
}

export default App
