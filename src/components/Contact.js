import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  // Initialize EmailJS
  emailjs.init('1va8BaSoAju1oNHVD');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('contact_service', 'contact_form', form.current)
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        },
      );

    e.target.reset();
  };

  return (
    <div style={{ 
      position: 'relative', 
      backgroundColor: 'black', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      color: 'white' 
    }}>
      {/* Contact Form */}
      <div style={{ 
        position: 'relative', 
        zIndex: '3', 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '20px', 
        backgroundColor: '#000', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' 
      }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', marginBottom: '20px' }}>Ask A Question</h2>
        <form ref={form} onSubmit={sendEmail}>
          {/* Name Fields */}
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '48%' }}>
              <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px' }}>First Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="First Name"
                required
                style={inputStyle}
              />
            </div>
            <div style={{ width: '48%' }}>
              <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px' }}>Last Name</label>
              <input
                type="text"
                name="user_lastname"
                placeholder="Last Name"
                required
                style={inputStyle}
              />
            </div>
          </div>

          {/* Email and Phone Fields */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px' }}>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px' }}>Phone</label>
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone"
              required
              style={inputStyle}
            />
          </div>

          {/* Vehicle Information Fields */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px' }}>Vehicle Year, Make and Model</label>
            <input
              type="text"
              name="vehicle_info"
              placeholder="Vehicle Year, Make and Model"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px' }}>Vehicle Paint Color</label>
            <input
              type="text"
              name="vehicle_color"
              placeholder="Vehicle Paint Color"
              style={inputStyle}
            />
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '1rem', marginBottom: '4px' }}>Message</label>
            <textarea
              name="message"
              placeholder="Message"
              required
              style={{
                ...inputStyle,
                height: '100px',
                resize: 'none',
              }}
            />
          </div>

          {/* Services Requested Checkboxes */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '1.25rem', marginBottom: '8px' }}>Services Requested</label>
            <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '12px' }}>Please select services you are interested in.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>
                <input type="checkbox" name="service" value="Paint Correction" style={{ marginRight: '8px' }} />
                Paint Correction
              </label>
              <label>
                <input type="checkbox" name="service" value="Ceramic Coatings" style={{ marginRight: '8px' }} />
                Ceramic Coatings
              </label>
              <label>
                <input type="checkbox" name="service" value="Interior Exterior" style={{ marginRight: '8px' }} />
                Interior Exterior
              </label>
              <label>
                <input type="checkbox" name="service" value="Mobile Services" style={{ marginRight: '8px' }} />
                Mobile Services
              </label>
              <label>
                <input type="checkbox" name="service" value="Vendor Services" style={{ marginRight: '8px' }} />
                Vendor Services
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            value="Send"
            style={{
              padding: '10px 16px',
              fontSize: '1rem',
              color: '#fff',
              backgroundColor: '#D32F2F', // Red color
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b71c1c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#D32F2F'}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

// Shared Input Style
const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  color: '#333',
  backgroundColor: '#f9f9f9',
  outline: 'none',
  transition: 'border-color 0.3s',
  marginBottom: '8px',
};
 