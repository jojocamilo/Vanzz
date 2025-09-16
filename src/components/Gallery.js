
import React, { useState } from 'react';
import galleryIcon from '../image/produk.png';
import ProductCard from './ProductCard';
const Gallery = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const addToCart = (product) => {
    setCart(prevCart => {
      const found = prevCart.find(item => item.id === product.id);
      if (found) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const changeQuantity = (productId, delta) => {
    setCart(prevCart => prevCart
      .map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  // Dummy filter options (can be customized)
  const filterOptions = [
    { value: 'all', label: 'Semua Produk' },
    { value: 'arabika', label: 'Arabika' },
    { value: 'robusta', label: 'Robusta' },
    { value: 'liberika', label: 'Liberika' },
    { value: 'excelsa', label: 'Excelsa' },
  ];

  // Filter and search logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());
    let matchesFilter = false;
    switch (filter) {
      case 'all':
        matchesFilter = true;
        break;
      case 'arabika':
        matchesFilter = product.name.toLowerCase().includes('arabika');
        break;
      case 'robusta':
        matchesFilter = product.name.toLowerCase().includes('robusta');
        break;
      case 'liberika':
        matchesFilter = product.name.toLowerCase().includes('liberika');
        break;
      case 'excelsa':
        matchesFilter = product.name.toLowerCase().includes('excelsa');
        break;
      default:
        matchesFilter = true;
    }
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
          <img src={galleryIcon} alt="Icon" style={{ width: '40px', height: '40px' }} />
          <h2 style={{ margin: 0 }}>Produk Kami</h2>
        </div>
        <div className="gallery-filter-bar">
          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            {filterOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <button
            onClick={() => setSearch('')}
          >
            Reset
          </button>
        </div>
        <div className="product-grid">
          {filteredProducts.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#a1887f', fontSize: '1.2rem' }}>Produk tidak ditemukan.</div>
          ) : (
            filteredProducts.map(product => (
              <ProductCard product={product} addToCart={addToCart} key={product.id} />
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-summary" style={{
            marginTop: '2rem',
            padding: '1.5rem',
            border: '2px solid #f7a048',
            borderRadius: '12px',
            background: '#fff8ee',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <h3 style={{ color: '#e28a36', marginBottom: '1rem', textAlign: 'center' }}>🛒 Cart Summary</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
              {cart.map((item, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: idx < cart.length - 1 ? '1px solid #f7a048' : 'none',
                  fontSize: '1rem',
                }}>
                  <span>
                    {item.name} <span style={{ color: '#6d4c41', fontWeight: 'normal' }}>x{item.quantity}</span>
                    <button
                      onClick={() => changeQuantity(item.id, -1)}
                      style={{
                        background: '#e57373',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '28px',
                        height: '28px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginLeft: '8px',
                        marginRight: '2px',
                        transition: 'background 0.2s',
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => changeQuantity(item.id, 1)}
                      style={{
                        background: '#81c784',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '28px',
                        height: '28px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginLeft: '2px',
                        transition: 'background 0.2s',
                      }}
                    >
                      +
                    </button>
                  </span>
                  <span style={{ color: '#2e7d32', fontWeight: 'bold', marginRight: '10px' }}>IDR {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#6d4c41', marginBottom: '1rem', textAlign: 'right' }}>
              Total Price: IDR {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString('id-ID')}
            </p>
            <button
              style={{
                backgroundColor: '#f7a048',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 24px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                width: '100%',
                transition: 'background-color 0.3s',
              }}
              onClick={() => alert('Checkout is not implemented in this demo.')}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;