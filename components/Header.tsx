import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      <div className="container">
        <h1 className="logo">TisalitCosmetics</h1>
        <p className="tagline">جمالك يبدأ من هنا</p>
        <nav className="main-nav" role="navigation">
            <a href="#">الرئيسية</a>
            <a href="#products">المنتجات</a>
            <a href="#">تواصل معنا</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;