import React from 'react';
import { Separator } from '@/components/ui/separator';
import Container from './ui/container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/50 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sanewal Auto Engineers Pvt. Ltd.</h3>
            <p className="text-muted-foreground">
              IATF 16949:2016 & ISO 14001:2015 certified company engaged in manufacturing of Machined/Forged Components.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>Plot no. 253 HSIIDC,</p>
              <p>Rohtak-124001 (Haryana) India</p>
              <p>Pin Code: 124001, HARYANA (INDIA)</p>
              <p className="mt-2">Phone: <a href="tel:+911262249535" className="hover:text-primary transition-colors">+91-1262-249535</a></p>
              <p>Email: <a href="mailto:info@sanewalauto.com" className="hover:text-primary transition-colors">info@sanewalauto.com</a></p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="/manufacturing" className="text-muted-foreground hover:text-primary transition-colors">Manufacturing</a></li>
              <li><a href="/quality" className="text-muted-foreground hover:text-primary transition-colors">Quality</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sanewal Auto Engineers Private Ltd. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;