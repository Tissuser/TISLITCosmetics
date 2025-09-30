import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <section id="products" className="products-section">
          <div className="container">
            <h2 className="section-title">إبداعاتنا المميزة</h2>
            <div className="products-grid">
              {PRODUCTS.map((product, index) => (
                <div className="animated-card" key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;