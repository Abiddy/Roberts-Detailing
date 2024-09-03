// src/app/layout.js
import './globals.css';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Futura:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
   
        <Navbar />
        {children}
      </body>
    </html>
  );
}
