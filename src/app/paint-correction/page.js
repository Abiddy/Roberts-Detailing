'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import bannerImage from '/public/paint2.jpg'; // Replace with your actual banner image
import Contact from '@/components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCheck, faXmark, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons

const PaintCorrection = () => {
  const [selectedStage, setSelectedStage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Back to Home Icon */}
      <a href="/" style={{ position: 'absolute', top: '30px', left: '40px', fontSize: '24px', color: 'white', fontSize: '30px' }}>
        <FontAwesomeIcon icon={faCircleChevronLeft} /> {/* Back to home */}
      </a>

      {/* Banner Image */}
      <div style={{ padding: '20px' }}>
        <Image
          src={bannerImage}
          alt="Paint Correction"
          style={{
            borderRadius: '20px',
            width: '100%',
            height: 'auto',
            maxHeight: '600px',
            objectFit: 'cover', // Ensures the image fills its container while maintaining aspect ratio
            objectPosition: 'center' // Centers the image inside the container
          }}
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
          {stages[selectedStage].badge && (
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
              {stages[selectedStage].badge.toUpperCase()}
            </span>
          )}
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px', marginBottom: '20px' }}>
            {stages[selectedStage].title}
          </h2>
          <ul style={{ listStyle: 'none', paddingLeft: '0', marginBottom: '20px' }}>
            {stages[selectedStage].services.map((service, index) => (
              <li key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faCheck} style={{ padding: '10px', marginRight: '5px' }} />
                <p>{service}</p>
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
              onClick={() => setIsModalOpen(true)} // Open modal on click
            >
              Get Quote →
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dimmed background
            zIndex: 1000
          }}
          onClick={() => setIsModalOpen(false)} // Close modal on background click
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              maxWidth: '100vw',
              maxHeight: '100vh',
              overflowY: 'scroll', // Scrollable content
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <button
              style={{
                color: 'black',
                border: 'none',
                borderRadius: '30px',
                float: 'right',
                cursor: 'pointer',
              }}
              onClick={() => setIsModalOpen(false)} // Close modal on button click
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaintCorrection;
