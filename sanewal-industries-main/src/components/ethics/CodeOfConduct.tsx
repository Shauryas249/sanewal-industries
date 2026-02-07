import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CodeOfConduct: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Code of Conduct</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our Code of Conduct establishes the ethical framework that guides all our business operations and relationships.
          </p>
        </div>
        
        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                At Sanewal Auto Engineers, we are committed to conducting business with the highest standards of integrity, 
                honesty, and ethical conduct. Our Code of Conduct serves as a guide for all employees, officers, and 
                directors to make ethical decisions in their day-to-day activities.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Our Commitments</h3>
              
              <ul className="space-y-2">
                <li>
                  <strong>Legal Compliance:</strong> We comply with all applicable laws, regulations, and company policies in every jurisdiction where we operate.
                </li>
                <li>
                  <strong>Ethical Business Practices:</strong> We conduct our business with integrity, avoiding any unfair or deceptive practices.
                </li>
                <li>
                  <strong>Respect for Individuals:</strong> We treat all individuals with dignity and respect, valuing diversity and inclusion.
                </li>
                <li>
                  <strong>Quality and Excellence:</strong> We are committed to delivering high-quality products that meet or exceed customer expectations.
                </li>
                <li>
                  <strong>Environmental Stewardship:</strong> We strive to minimize our environmental impact and promote sustainable practices.
                </li>
                <li>
                  <strong>Health and Safety:</strong> We prioritize the health and safety of our employees, customers, and communities.
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Applicability</h3>
              
              <p>
                This Code of Conduct applies to all employees, officers, directors, contractors, and representatives of 
                Sanewal Auto Engineers. We expect our suppliers, vendors, and business partners to adhere to similar 
                ethical standards.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Responsibility</h3>
              
              <p>
                Each individual is responsible for understanding and complying with this Code of Conduct. Managers and 
                supervisors have an additional responsibility to lead by example and foster an environment where ethical 
                conduct is recognized, valued, and exemplified.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CodeOfConduct;