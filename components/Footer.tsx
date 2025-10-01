import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="social-links">
          <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
        </div>
        <p>&copy; {new Date().getFullYear()} TISLITCosmetics. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
