import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const Facilities: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our state-of-the-art manufacturing facilities are equipped with the latest technology to ensure precision and quality in every component we produce.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image 
                src="https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/production-plant-32169d8.jpg"
                alt="Interior view of Sanewal Auto Engineers' main production facility with precision machining equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Production Plant</h3>
              <p className="text-muted-foreground">
                Our main production facility spans over 50,000 square feet and houses our precision machining and forging operations. The plant is designed for optimal workflow and efficiency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image 
                src="https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/qualiity-control-lab-cb622b1.png"
                alt="Advanced quality control laboratory with measurement and testing equipment for automotive components"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Quality Control Lab</h3>
              <p className="text-muted-foreground">
                Our dedicated quality control laboratory is equipped with advanced testing and measurement equipment to ensure all products meet the highest standards of precision and reliability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Facilities;