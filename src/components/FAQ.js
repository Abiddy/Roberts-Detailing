import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div style={{ 
        backgroundColor: '#000', 
        padding: '40px', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white' 
    }}>
      <div style={{ 
          maxWidth: '800px', 
          width: '100%', 
          margin: '0 auto' 
      }}>
        <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '30px', 
            fontSize: '2rem',
            fontFamily: 'Montserrat, sans-serif' 
        }}>
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible>
          {/* FAQ 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>What is paint correction, and how does it help?</AccordionTrigger>
            <AccordionContent>
              Paint correction is a process of removing imperfections from a vehicles paint, such as swirls, scratches, and oxidation, by polishing. It helps restore the shine and clarity of your cars paint, making it look like new again.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>What is the difference between ceramic coating and waxing?</AccordionTrigger>
            <AccordionContent>
              Ceramic coating provides long-lasting protection for your vehicles paint, lasting up to several years, whereas waxing offers temporary protection (typically 1-3 months). Ceramic coatings also provide better resistance to dirt, water, and UV rays.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>How often should I get my car detailed?</AccordionTrigger>
            <AccordionContent>
              We recommend getting a full detail every 6-12 months, depending on your driving conditions. However, regular washes and maintenance are essential to preserve the finish between details.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer mobile services?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer mobile car detailing services. Our team will come to your location fully equipped to provide the best detailing services without you having to leave your home or office.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>What is included in a full detail package?</AccordionTrigger>
            <AccordionContent>
              Our full detail package includes vacuuming the interior, cleaning and conditioning leather seats, shampooing carpets, cleaning door jambs, polishing and waxing the exterior, and more. Its a comprehensive cleaning inside and out.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger>How long does a ceramic coating last?</AccordionTrigger>
            <AccordionContent>
              A professionally applied ceramic coating can last anywhere from 2 to 5 years, depending on how well the vehicle is maintained. It provides excellent protection from environmental damage and keeps the car looking shiny and clean.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ 7 */}
          <AccordionItem value="item-7">
            <AccordionTrigger>Can paint correction remove deep scratches?</AccordionTrigger>
            <AccordionContent>
              Paint correction can remove minor to moderate scratches, but deep scratches that penetrate the clear coat may require more extensive repair. Our technicians will assess the damage and recommend the best solution.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
