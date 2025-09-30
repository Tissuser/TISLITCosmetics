import React from 'react';

const Header: React.FC = () => {
  const whatsappNumber = '212609139950';
  const message = 'أهلاً TisalitCosmetics، لدي استفسار.';
  const contactLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="header" role="banner">
      <div className="container">
        <h1 className="logo">TisalitCosmetics</h1>
        <p className="tagline">جمالك يبدأ من هنا</p>
        <nav className="main-nav" role="navigation">
            <a href="#">الرئيسية</a>
            <a href="#products">المنتجات</a>
            <a href={contactLink} target="_blank" rel="noopener noreferrer">تواصل معنا</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;