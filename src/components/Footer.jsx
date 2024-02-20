// Footer.js
import React from 'react';

function Footer() {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px'
  }
  return (
    <footer style={footerStyle}>
      <p className="copyright">&copy; 2023 Rashid. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
