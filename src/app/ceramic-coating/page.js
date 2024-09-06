'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import bannerImage from '/public/ceramic.jpg'; // Replace with your actual banner image
import Contact from '@/components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

const CeramicCoating = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
         <a href="/" style={{ position: 'absolute', top: '30px', left: '40px', fontSize: '24px', color: 'white', fontSize: '30px' }}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </a>
      {/* Banner Image */}
      <div style={{ padding: '20px' }}>
        <Image
          src={bannerImage}
          alt="Ceramic Coating"
          style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
        />
        <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: '30px' }}>Ceramic Coating Services</h1>
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
                <FontAwesomeIcon icon={faCheck} style={{ padding: '10px', marginRight: '5px' }} />
                <p>{service}</p>
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

export default CeramicCoating;
