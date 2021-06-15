import React from 'react';
import facebook from '../../assets/book.png';
import twitter from '../../assets/tweet.png';

function Footer() {
    return <div className="footer-container">
      <div className="footer-logo">BlueBridge</div>
        <div className="footer-items">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Support</p>
            <p>Pricing</p>
      </div>
        <div className="footer-icons">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" className="h-12" />
      </div>
    </div>;
}

export default Footer
