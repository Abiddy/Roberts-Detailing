'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import bannerImage from '/public/interior.jpg'; // Replace with your actual banner image for Full Detailing

const FullDetailing = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);

  const packages = [
    {
      badge: 'basic',
      title: 'Basic',
      price: '$150',
      services: [
        'Vacuum floors and trunk area',
        'Wipe down vinyl or plastic floor mats',
        'Vacuum cloth seats',
        'Wipe leather seats down',
        'Clean door jambs',
        'Clean glass inside and out'
      ],
    },
    {
      badge: 'popular',
      title: 'Advanced',
      price: '$300',
      services: [
        'Vacuum floors and trunk area',
        'Wipe down vinyl or plastic floor mats',
        'Vacuum cloth seats',
        'Wipe leather seats down',
        'Clean door jambs',
        'Clean console, cup holders, crevices and vents',
        'Clean dash and UV protect',
        'Clean and condition door panels and pockets',
        'Clean vehicle headliner',
        'Clean glass inside and out',
        'Shampoo cloth floor mats',
        'Shampoo carpeting in cabin and trunk',
        'Shampoo cloth seats'
      ],
    },
    {
      badge: '',
      title: 'Deluxe',
      price: '$425',
      services: [
        'Vacuum floors and trunk area',
        'Wipe down vinyl or plastic floor mats',
        'Vacuum cloth seats',
        'Wipe leather seats down',
        'Clean door jambs',
        'Clean console, cup holders, crevices and vents',
        'Clean dash and UV protect',
        'Clean and condition door panels and pockets',
        'Clean vehicle headliner',
        'Clean all interior trim and plastics',
        'Clean glass inside and out',
        'Shampoo cloth floor mats',
        'Shampoo carpeting in cabin and trunk',
        'Shampoo cloth seats',
        'Deep clean and condition leather seats'
      ],
    }
  ];

  return (
    <div>
      {/* Banner Image */}
      <div style={{ padding: '20px' }}>
        <Image
          src={bannerImage}
          alt="Full Detailing"
          style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
        />
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Full Detailing Services</h1>
      </div>

      {/* Menu Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        {packages.map((pkg, index) => (
          <div
            key={index}
            onClick={() => setSelectedPackage(index)}
            style={{
              cursor: 'pointer',
              padding: '10px 20px',
              margin: '0 10px',
              borderRadius: '50px',
              border: selectedPackage === index ? '1px solid #000' : '1px solid #ccc',
              textAlign: 'center',
            }}
          >
            {pkg.title}
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            backgroundColor: '#f8f8f8',
            padding: '20px',
            borderRadius: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            textAlign: 'left',
            color: '#333'
          }}
        >
          {packages[selectedPackage].badge && (
            <span
              style={{
                display: 'inline-block',
                border: '1px solid black',
                borderRadius: '12px',
                padding: '5px 10px',
                fontSize: '0.75rem',
                color: '#666',
                marginBottom: '10px'
              }}
            >
              {packages[selectedPackage].badge.toUpperCase()}
            </span>
          )}
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px' }}>
            {packages[selectedPackage].title}
          </h2>
          <ul style={{ listStyle: 'none', paddingLeft: '0', marginBottom: '20px' }}>
            {packages[selectedPackage].services.map((service, index) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px' }}>✔️</span>
                {service}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0' }}>{packages[selectedPackage].price}</p>
            <button
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
                border: 'none',
                fontSize: '1rem'
              }}
            >
              Get Quote →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullDetailing;
