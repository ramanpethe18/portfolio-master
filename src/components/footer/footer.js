// Footer.js
import React, { useState } from 'react';
import './footer.css';
import rInstagram from '../../images/rInstagram.png';
import rTwitter from '../../images/rTwitter.png';
import rLinkedin from '../../images/rLinkedin.png';
import rGithub from '../../images/rGithub.png';

const Footer = () => {
  const [selectedQR, setSelectedQR] = useState(rInstagram); // Set default QR code

  const handleButtonClick = (qr) => {
    setSelectedQR(qr);
  };

  return (
    <div className="footer-container">
        <div className='footer-redirect-container'>
            
        </div>
        <div className='button-qr-container'>
            <div className="button-container">
                <button className={`button ${selectedQR === rInstagram ? 'active' : ''}`} onClick={() => handleButtonClick(rInstagram)}>Instagram</button>
                <button className={`button ${selectedQR === rTwitter ? 'active' : ''}`} onClick={() => handleButtonClick(rTwitter)}>Twitter</button>
                <button className={`button ${selectedQR === rLinkedin ? 'active' : ''}`} onClick={() => handleButtonClick(rLinkedin)}>LinkedIn</button>
                <button className={`button ${selectedQR === rGithub ? 'active' : ''}`} onClick={() => handleButtonClick(rGithub)}>GitHub</button>
            </div>
        </div>
        {selectedQR && <img className="qr-code" src={selectedQR} alt="QR Code" />}
    </div>
  );
};

export default Footer;
