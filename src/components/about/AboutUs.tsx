import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, 
  Calendar, 
  Users, 
  Building, 
  Target, 
  Heart, 
  CheckCircle, 
  Shield, 
  Zap, 
  BarChart, 
  Lightbulb,
  Settings,
  Star
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const keyStats = [
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      value: "1985",
      label: "Founded"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      value: "100+",
      label: "Team Members"
    },
    {
      icon: <Building className="h-12 w-12 text-primary" />,
      value: "25,000",
      label: "Sq. Ft. Facility"
    }
  ];

  const coreValues = [
    { label: "Quality" },
    { label: "Innovation" },
    { label: "Integrity" },
    { label: "Reliability" },
    { label: "Excellence" }
  ];

  const strengths = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description: "ISO 9001:2015 and IATF 16949:2016 certified"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Industry Certifications",
      description: "Meeting global automotive standards"
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "Continuous improvement in processes and products"
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Team",
      description: "Skilled professionals with technical expertise"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        {/* Main Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Sanewal Industries</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Established in 1985, Sanewal Industries is a leading manufacturer of premium Machined and Forged Components & Fasteners for the automotive industry, specializing in precision-engineered parts that meet the highest quality standards.
          </p>
        </div>

        {/* Key Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {keyStats.map((stat, index) => (
            <Card key={index} className="border border-muted">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold mb-6">Our Journey</h2>
            <p className="text-lg mb-6">
              Founded in 1985, Sanewal Auto Engineers (SAE) has established itself as a leading manufacturer of premium Machined and Forged Components & Fasteners. Our journey of continuous innovation and quality excellence spans more than three decades, building a legacy of trust and reliability.
            </p>
            <p className="text-lg mb-6">
              SAE proudly maintains ISO 9001:2015 certification and has achieved the prestigious IATF 16949:2016 certification—a globally recognized standard for automotive quality management systems. Our state-of-the-art manufacturing facility spans 25,000 square feet of meticulously organized production space.
            </p>
            <p className="text-lg">
              At the heart of our success lies our unwavering commitment to ethical business practices and exceptional quality standards. We've cultivated a professional, clean working environment that empowers our skilled workforce to deliver precision-engineered components that meet the most exacting specifications.
            </p>
          </div>
          <div className="lg:col-span-4">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Company Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>ISO 9001:2015 certified quality management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>IATF 16949:2016 automotive certification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>25,000 sq. ft. manufacturing facility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced CNC machining capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Precision forging technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive quality testing lab</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-muted">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be the preferred global partner for precision-engineered automotive components, recognized for our unwavering commitment to quality, innovation, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-muted">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To deliver superior quality machined and forged components through continuous innovation, ethical business practices, and a relentless focus on exceeding customer expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {coreValues.map((value, index) => (
              <Card key={index} className="border border-muted">
                <CardContent className="p-4 text-center">
                  <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">{value.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Strengths Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="border border-muted">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{strength.title}</h3>
                  <p className="text-muted-foreground text-center">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;