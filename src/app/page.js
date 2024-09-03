'use client'
import React, { useRef } from 'react';
import FeaturedServices from '../components/FeaturedServices'
import Contact from '../components/Contact'

export default function Home() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#fff', 
      color: 'white', 
      position: 'relative', 
      overflow: 'hidden',
      textAlign: 'center',
      padding: '20px',
      border: 'none',
      margin: '0 auto',
    }}>
      <style jsx>{`
       @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@300..700&display=swap');
      `}</style>
      
      {/* Header Section */}


      {/* Video Background */}
      <video 
        playsInline 
        autoPlay 
        loop 
        muted 
        style={{ 
          padding: '5px 5px 5px 5px',
          position: 'absolute', 
          // top: '80px', // Adjust to leave space for the header
          left: 0, 
          width: '100%', 
          height: '100%', // Adjust to leave space for the header
          objectFit: 'cover', 
          zIndex: 1,
          borderRadius: '30px 30px 30px 30px', // Rounded corners only at the bottom
        }}
      >
        <source src="/carwash2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Text Content */}
      <div style={{ zIndex: 2, marginTop: '400px' }}> {/* Adjust margin-top to account for header */}
        <h1 style={{ 
          fontSize: '2rem', 
          fontFamily: 'Cabin, sans-serif', 
          padding: '0 40px', 
          fontWeight: 'bold', 
          marginBottom: '10px',
          lineHeight: '1.2', 
        }}>
          Your car<br />
          Your pride<br />
          spotless everytime
        </h1>
        <p style={{ fontSize: '1rem', fontFamily: 'Cabin, sans-serif', marginBottom: '20px', marginTop: '40px' }}>Mobile Services</p>
        <button
          style={{
            padding: '20px 40px',
            fontSize: '1.2rem',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: '70px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: 'Cabin'
          }}
          onClick={scrollToServices}
        >
          Explore Plans
        </button>
      </div>
    </div>
    <div ref={servicesRef}>
      <FeaturedServices />
      <Contact/>
    </div>
    </>
  );
}
