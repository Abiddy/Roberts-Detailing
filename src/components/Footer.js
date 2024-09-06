import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      padding: '40px 20px', 
      textAlign: 'center', 
      fontFamily: 'Montserrat, sans-serif', 
      fontSize: '14px' 
    }}>

<style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playwrite+AU+QLD:wght@100..400&display=swap');
      `}</style>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        {/* Brand Name */}
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          marginBottom: '20px' ,
          fontFamily: 'Playwrite AU QLD, sans-serif', fontWeight: 'bold'
        }}>
          Roberts Detailing & Polishing
        </h2>

        {/* Copyright Section */}
        <div style={{ fontSize: '14px', color: '#ccc' }}>
          © {new Date().getFullYear()} Roberts Detailing & Polishing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
