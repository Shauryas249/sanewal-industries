import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle } from 'lucide-react';

const EthicsOverview: React.FC = () => {
  const ethicsPoints = [
    "Upholding the highest standards of business ethics and integrity",
    "Compliance with all applicable laws and regulations",
    "Promoting a culture of ethical decision-making",
    "Transparency in all business operations",
    "Accountability at all levels of the organization",
    "Continuous improvement of our ethics and compliance program"
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Ethics</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg mb-6">
              At Sanewal Auto Engineers, we believe that ethical business practices are the foundation of long-term success. 
              Our ethics and compliance program is designed to ensure that we conduct business with integrity, 
              transparency, and in accordance with all applicable laws and regulations.
            </p>
            
            <ul className="space-y-3">
              {ethicsPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Shield className="h-20 w-20 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">Ethics & Compliance Program</h3>
              <p className="text-center mb-6">
                Our comprehensive ethics and compliance program is designed to prevent, detect, and address potential ethical issues.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-lg text-center">
                  <p className="font-semibold">IATF 16949:2016</p>
                  <p className="text-sm text-muted-foreground">Certified</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center">
                  <p className="font-semibold">ISO 14001:2015</p>
                  <p className="text-sm text-muted-foreground">Certified</p>
                </div>
                <div className="bg-background p-4 rounded-lg text-center col-span-2">
                  <p className="font-semibold">40+ Years</p>
                  <p className="text-sm text-muted-foreground">of Ethical Business Practices</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EthicsOverview;