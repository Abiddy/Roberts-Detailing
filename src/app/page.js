'use client';
import React, { useRef } from 'react';
import Navbar from '../components/Navbar'; // Import your Navbar component
import FeaturedServices from '../components/FeaturedServices';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFaq = () => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToServices={scrollToServices} scrollToContact={scrollToContact} scrollToFaq={scrollToFaq} />
      
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
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            zIndex: 1,
            borderRadius: '30px 30px 30px 30px', 
          }}
        >
          <source src="/carwash2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Text Content */}
        <div style={{ zIndex: 2, marginTop: '400px' }}> 
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
          Spotless every time
        </h1>
        <p style={{ fontSize: '1rem', fontFamily: 'Cabin, sans-serif', marginBottom: '20px', marginTop: '40px' }}>
          Mobile Services
        </p>
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

    {/* Services Section */}
    <div ref={servicesRef}>
      <FeaturedServices />
    </div>

    {/* Contact Section */}
    <div ref={contactRef}>
      <Contact />
    </div>

    <div ref={faqRef}>
      <FAQ />
    </div>

    <div>
      <Footer/>
    </div>
  </>
);
}

         
