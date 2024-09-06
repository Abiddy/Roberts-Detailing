import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Checkbox } from "@/components/ui/checkbox";

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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      // backgroundColor: '#f8f8f8', // White background
      padding: '5px',
    }}>
      {/* Contact Form */}
      <div style={{
        maxWidth: '600px', // Max width to center and contain the form
        width: '100%',
        padding: '30px',
        backgroundColor: 'white', // Form card
        borderRadius: '30px',
        // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        color: 'black', // Text inside form
      }}>
        <h2 style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '1.8rem',
          marginBottom: '20px',
          textAlign: 'center',
        }}>Get Quote</h2>

        <form ref={form} onSubmit={sendEmail}>
          {/* Name Fields */}
          <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '48%' }}>
              <label style={labelStyle}>First Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="First Name"
                required
                style={inputStyle}
              />
            </div>
            <div style={{ width: '48%' }}>
              <label style={labelStyle}>Last Name</label>
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
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Phone</label>
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
            <label style={labelStyle}>Vehicle Year, Make and Model</label>
            <input
              type="text"
              name="vehicle_info"
              placeholder="Vehicle Year, Make and Model"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Vehicle Paint Color</label>
            <input
              type="text"
              name="vehicle_color"
              placeholder="Vehicle Paint Color"
              style={inputStyle}
            />
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Message</label>
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
            <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '12px' }}>Please select services you are interested in</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Paint Correction', 'Ceramic Coatings', 'Full Detailing'].map((service, index) => (
                <label key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Checkbox name="service" value={service} /> {/* Use shadcn Checkbox here */}
                  {service}
                </label>
              ))}
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

// Shared Input and Label Styles
const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  borderRadius: '6px',
  // border: '1px solid #ccc',
  fontSize: '1rem',
  color: '#333',
  backgroundColor: '#f9f9f9',
  outline: 'none',
  transition: 'border-color 0.3s',
  marginBottom: '8px',
};

const labelStyle = {
  display: 'block',
  fontSize: '1rem',
  marginBottom: '4px',
};
