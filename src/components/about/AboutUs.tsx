import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Users, Building, CheckCircle, Shield } from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Quality Excellence",
      description: "ISO 9001:2015 and IATF 16949:2016 certified manufacturing processes"
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "35+ Years Experience",
      description: "Decades of expertise in precision manufacturing since 1985"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Team",
      description: "Skilled workforce with specialized technical knowledge"
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Modern Facility",
      description: "25,000 sq. ft. state-of-the-art manufacturing facility"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Precision Engineering",
      description: "High-precision components with exacting specifications"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Ethical Business",
      description: "Commitment to ethical practices and professional standards"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Excellence in Precision Since 1985</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg mb-6">
              Founded in 1985, Sanewal Auto Engineers (SAE) has established itself as a leading manufacturer of premium Machined and Forged Components & Fasteners. Our journey of continuous innovation and quality excellence spans more than three decades, building a legacy of trust and reliability.
            </p>
            <p className="text-lg mb-6">
              SAE proudly maintains ISO 9001:2015 certification and has achieved the prestigious IATF 16949:2016 certification—a globally recognized standard for automotive quality management systems. Our state-of-the-art manufacturing facility spans 25,000 square feet of meticulously organized production space.
            </p>
            <p className="text-lg mb-6">
              At the heart of our success lies our unwavering commitment to ethical business practices and exceptional quality standards. We've cultivated a professional, clean working environment that empowers our skilled workforce to deliver precision-engineered components that meet the most exacting specifications.
            </p>
            <p className="text-lg">
              With professional management and decades of manufacturing expertise, SAE continues to set industry benchmarks for innovation, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border border-muted">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg max-w-3xl mx-auto">
            To be the preferred global partner for precision-engineered automotive components, recognized for our unwavering commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;