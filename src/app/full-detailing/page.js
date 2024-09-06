'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import bannerImage from '/public/interior.jpg'; // Replace with your actual banner image for Full Detailing
import Contact from '@/components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCheck, faCircleChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const FullDetailing = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Back to Home Icon */}
      <a href="/" style={{ position: 'absolute', top: '30px', left: '40px', fontSize: '24px', color: 'white' }}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </a>
      
      {/* Banner Image */}
      <div style={{ padding: '20px' }}>
        <Image
          src={bannerImage}
          alt="Full Detailing"
          style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
        />
        <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: '30px' }}>Full Detailing Services</h1>
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
                <FontAwesomeIcon icon={faCheck} style={{ padding: '10px', marginRight: '5px' }} />
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

export default FullDetailing;
