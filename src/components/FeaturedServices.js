import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      title: 'Paint Correction',
      image: '/paint.jpg', // Replace with your image path
      link: '/paint-correction' // Placeholder URL
    },
    {
      title: 'Ceramic Coating',
      image: '/ceramic.jpg', // Replace with your image path
      link: '/ceramic-coating' // Placeholder URL
    },
    {
      title: 'Interior Detailing',
      image: '/interior.jpg', // Replace with your image path
      link: '/full-detailing' // Placeholder URL
    },
  ];

  return (
    <div style={{ padding: '40px 5px', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ fontFamily: 'Cabin, sans-serif', fontSize: '2rem', textAlign: 'center', marginBottom: '30px',  color: '#333' }}>
        Special Services
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {services.map((service, index) => (
          <div 
            key={index} 
            style={{
              position: 'relative', 
              borderRadius: '30px', 
              overflow: 'hidden', 
              cursor: 'pointer', 
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
            }}
            onClick={() => window.location.href = service.link}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={service.image} 
              alt={service.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div 
              style={{
                position: 'absolute', 
                bottom: '20px', 
                left: '20px', 
                color: 'white', 
                fontFamily: 'Cabin, sans-serif', 
                fontSize: '1.5rem',
              }}
            >
              {service.title}
            </div>
            <div 
              style={{
                position: 'absolute', 
                bottom: '20px', 
                right: '20px', 
                color: 'white'
              }}
            >
              <ChevronRight size={32} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
