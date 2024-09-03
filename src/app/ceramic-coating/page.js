'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import bannerImage from '/public/ceramic.jpg'; // Replace with your actual banner image

const CeramicCoating = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);

  const packages = [
    {
      title: 'Silver',
      price: '$750',
      details: 'Turnaround: Less than a day',
      services: [
        'Two bucket hand wash',
        'Hand wash wheels and tires',
        'Decontaminate paint to remove minor bugs/tar/grime',
        'Decontaminate remaining impurities with clay-bar',
        '1 step (or stage) polishing',
        'Single application of ceramic to paint and body work',
        'Wheels and calipers coated',
        'Headlights and taillights coated'
      ],
    },
    {
      title: 'Gold',
      price: '$1,500',
      details: 'Turnaround: Approx. 1 day',
      services: [
        'Two bucket hand wash',
        'Hand wash wheels and tires',
        'Decontaminate paint to remove minor bugs/tar/grime',
        'Decontaminate remaining impurities with clay-bar',
        '2 step (or stage) compound and polish',
        'Double application of ceramic to paint and body work',
        'Wheel faces only coated',
        'Headlights and taillights coated'
      ],
    },
    {
      title: 'Deluxe',
      price: '$2,000',
      details: 'Turnaround: Approx. 1 day',
      services: [
        'Two bucket hand wash',
        'Hand wash wheels and tires',
        'Decontaminate paint to remove minor bugs/tar/grime',
        'Decontaminate remaining impurities with clay-bar',
        '3 step (or stage) cutting, polishing, and jeweling',
        'Double applications of ceramic to paint and body work',
        'Wheel barrels coated',
        'Wheel faces coated',
        'Interior vinyl coated',
        'Headlights and taillights coated'
      ],
    }
  ];

  return (
    <div>
      {/* Banner Image */}
      <div style={{ padding: '20px' }}>
        <Image
          src={bannerImage}
          alt="Ceramic Coating"
          style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
        />
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Ceramic Coating Services</h1>
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
            maxWidth: '600px',
            textAlign: 'left',
            color: '#333'
          }}
        >
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#ddd',
              borderRadius: '12px',
              padding: '5px 10px',
              fontSize: '0.75rem',
              color: '#666',
              marginBottom: '10px'
            }}
          >
            {packages[selectedPackage].title.toUpperCase()}
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px' }}>
            {packages[selectedPackage].title}
          </h2>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{packages[selectedPackage].details}</p>
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

export default CeramicCoating;
