'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import bannerImage from '/public/paint2.jpg'; // Replace with your actual banner image

const PaintCorrection = () => {
  const [selectedStage, setSelectedStage] = useState(0);

  const stages = [
    {
      badge: 'basic',
      title: 'Stage 1',
      price: '$400',
      services: [
        'Two bucket hand wash',
        'Hand wash wheels and tires',
        'Decontaminate paint to remove minor bugs/tar/grime',
        'Decontaminate remaining impurities with clay-bar',
        '1 step (or stage) polishing',
        'Apply trim dressing',
        'Apply no-sling tire dressing',
        'Apply coating to wheels',
        'Apply paint sealant',
        'Apply wax'
      ],
    },
    {
      badge: 'popular',
      title: 'Stage 2',
      price: '$650',
      services: [
        'Two bucket hand wash',
        'Hand wash wheels and tires',
        'Decontaminate paint to remove minor bugs/tar/grime',
        'Decontaminate remaining impurities with clay-bar',
        '2 step (or stage) compound and polish',
        'Apply trim dressing',
        'Apply no-sling tire dressing',
        'Apply coating to wheels',
        'Apply paint sealant',
        'Apply wax'
      ],
    },
    {
      badge: '',
      title: 'Stage 3',
      price: '$900',
      services: [
        'Two bucket hand wash',
        'Hand wash wheels and tires',
        'Decontaminate paint to remove minor bugs/tar/grime',
        'Decontaminate remaining impurities with clay-bar',
        '2 step (or stage) compound and polish',
        '3 step (or stage) cutting, polishing, and jeweling',
        'Apply trim dressing',
        'Apply no-sling tire dressing',
        'Apply coating to wheels',
        'Apply paint sealant',
        'Apply wax'
      ],
    }
  ];

  return (
    <div>
      {/* Banner Image */}
      <div style={{ padding: '20px' }}>
        <Image
          src={bannerImage}
          alt="Paint Correction"
          style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
        />
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Paint Correction Services</h1>
      </div>

      {/* Menu Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        {stages.map((stage, index) => (
          <div
            key={index}
            onClick={() => setSelectedStage(index)}
            style={{
              cursor: 'pointer',
              padding: '10px 20px',
              margin: '0 10px',
              borderRadius: '50px',
              border: selectedStage === index ? '1px solid #000' : '1px solid #ccc',
              textAlign: 'center',
            }}
          >
            {stage.title}
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
            {stages[selectedStage].badge ?
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
             {stages[selectedStage].badge.toUpperCase() }
          </span>
          : ''}
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px' }}>
            {stages[selectedStage].title}
          </h2>
          <ul style={{ listStyle: 'none', paddingLeft: '0', marginBottom: '20px' }}>
            {stages[selectedStage].services.map((service, index) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px' }}>✔️</span>
                {service}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0' }}>{stages[selectedStage].price}</p>
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

export default PaintCorrection;
