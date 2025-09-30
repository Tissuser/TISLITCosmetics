import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h2 id="hero-heading">اكتشفي سر الجمال الطبيعي</h2>
        <p>مجموعة حصرية من مستحضرات التجميل لتعزيز جمالك الفريد.</p>
        <a href="#products" className="cta-button">تسوقي الآن</a>
      </div>
    </section>
  );
};

export default Hero;
