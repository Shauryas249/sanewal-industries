import React from 'react';
import { Button } from '@/components/ui/button';
import Container from './ui/container';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8">
            Contact us today to discuss how our precision-engineered components can meet your specific requirements.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;