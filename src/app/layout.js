// src/app/layout.js
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: "Rob's Detailing & Polishing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Futura:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
