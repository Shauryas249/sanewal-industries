import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CoreValues: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      description: "Upholding honesty, fairness, and ethical conduct in every aspect of business."
    },
    {
      title: "Quality Excellence",
      description: "Commitment to producing high-precision machined and forged components."
    },
    {
      title: "Workplace Safety",
      description: "Ensuring a hazard-free, clean, and professional environment."
    },
    {
      title: "Transparency",
      description: "Encouraging open and honest communication within the company."
    },
    {
      title: "Respect",
      description: "Fostering an inclusive culture with equal opportunities for all."
    },
    {
      title: "Environmental Responsibility",
      description: "Striving for sustainable and eco-friendly operations."
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            These principles guide our operations and define our company culture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;