import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const FeaturedServices = () => {
  const services = [
    {
      title: 'Paint Correction',
      image: '/paint.jpg', // Replace with your image path
      link: '/paint-correction', // Placeholder URL
      description: 'Restore your cars paint to its original brilliance by eliminating swirl marks, scratches, and oxidation.'
    },
    {
      title: 'Ceramic Coating',
      image: '/ceramic.jpg', // Replace with your image path
      link: '/ceramic-coating', // Placeholder URL
      description: 'Protect vehicles exterior from environmental contaminants, UV rays, a glossy finish that makes maintenance a breeze.'
    },
    {
      title: 'Interior Detailing',
      image: '/interior.jpg', // Replace with your image path
      link: '/full-detailing', // Placeholder URL
      description: 'From deep cleaning and conditioning of seats and carpets to sanitizing surfaces, we ensure every inch of your cars interior feels fresh, clean, and luxurious.'
    },
  ];

  return (
    <div style={{ padding: '40px 5px', backgroundColor: 'white' }}>
      <h2 style={{ fontFamily: 'Cabin, sans-serif', fontSize: '2rem', textAlign: 'center', marginBottom: '60px', color: 'black' , marginTop:'60px'}}>
        Featured Services
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {services.map((service, index) => (
    <Card className="w-[350px]" key={index}>
    <CardHeader>
      <CardTitle>{service.title}</CardTitle>
      <CardDescription>{service.description}</CardDescription>
    </CardHeader>
    <CardContent>
            <Image 
              src={service.image} 
              alt={service.title} 
              width={300} 
              height={180} // Landscape size
              style={{ borderRadius: '20px 20px 20px 20px', objectFit: 'cover' }} 
            />
             
            </CardContent>
            
            <CardFooter className="flex justify-between">
            <Link href={service.link}>
            <Button variant="outline">Learn More</Button>
                </Link>
                </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
