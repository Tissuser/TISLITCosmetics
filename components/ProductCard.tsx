import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Remember to replace this with your actual WhatsApp number
  const whatsappNumber = '+212 609-139950';
  const message = `أهلاً TisalitCosmetics، أرغب في طلب منتج: ${product.name}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <article className="product-card" aria-labelledby={`product-title-${product.id}`}>
      {product.isBestseller && <div className="bestseller-badge" aria-label="الأكثر مبيعًا">الأكثر مبيعًا</div>}
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 id={`product-title-${product.id}`}>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="buy-button">
            <i className="fab fa-whatsapp"></i> اطلبي الآن
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;