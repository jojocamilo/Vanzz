import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const images = product.images || [];
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="product-card">
      <div style={{ position: 'relative', height: '180px', marginBottom: '10px' }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={product.name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '180px',
              objectFit: 'cover',
              borderRadius: '8px',
              opacity: current === idx && fade ? 1 : 0,
              transition: 'opacity 2s',
            }}
          />
        ))}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ fontWeight: 'bold', color: '#2e7d32', margin: '0.5rem 0' }}>Harga: IDR {product.price ? product.price.toLocaleString('id-ID') : '-'}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
