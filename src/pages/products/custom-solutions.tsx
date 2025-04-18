import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function CustomSolutions() {
  const customSolutions = [
    {
      title: "Design Collaboration",
      description: "Work with our engineering team to design components that meet your specific requirements and optimize for manufacturability."
    },
    {
      title: "Prototyping",
      description: "Rapid prototyping services to validate designs before committing to full production runs."
    },
    {
      title: "Material Selection",
      description: "Expert guidance on material selection based on application requirements, performance needs, and cost considerations."
    },
    {
      title: "Custom Tooling",
      description: "Development of specialized tooling for unique component geometries and features."
    },
    {
      title: "Process Development",
      description: "Creation of optimized manufacturing processes for your specific components to ensure quality and efficiency."
    },
    {
      title: "Quality Planning",
      description: "Comprehensive quality planning including PPAP, FMEA, and control plans tailored to your requirements."
    }
  ];

  return (
    <>
      <Head>
        <title>Custom Solutions - Sanewal Auto Engineers</title>
        <meta name="description" content="Tailored manufacturing solutions to meet your specific requirements and specifications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Custom Solutions</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Tailored manufacturing solutions to meet your specific requirements and specifications with precision and excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Tailored Approach</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Engineering Expertise</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">End-to-End Support</span>
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Custom Solutions</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We offer comprehensive custom manufacturing solutions to address your unique challenges and requirements.
                </p>
              </div>
              
              {/* Card Grid Layout for Custom Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {customSolutions.map((solution, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 text-primary">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground flex-grow">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border mt-12">
                <h3 className="text-xl font-semibold mb-4">Our Custom Solution Process</h3>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="font-medium">Initial Consultation</p>
                    <p className="text-muted-foreground">We begin by understanding your requirements, challenges, and objectives.</p>
                  </li>
                  <li>
                    <p className="font-medium">Concept Development</p>
                    <p className="text-muted-foreground">Our engineering team develops concepts and solutions tailored to your needs.</p>
                  </li>
                  <li>
                    <p className="font-medium">Design & Prototyping</p>
                    <p className="text-muted-foreground">We create detailed designs and prototypes for validation and testing.</p>
                  </li>
                  <li>
                    <p className="font-medium">Process Development</p>
                    <p className="text-muted-foreground">We develop optimized manufacturing processes specific to your components.</p>
                  </li>
                  <li>
                    <p className="font-medium">Production & Quality Assurance</p>
                    <p className="text-muted-foreground">We implement rigorous quality controls throughout the production process.</p>
                  </li>
                  <li>
                    <p className="font-medium">Continuous Improvement</p>
                    <p className="text-muted-foreground">We continuously monitor and improve processes to enhance quality and efficiency.</p>
                  </li>
                </ol>
              </div>
              
              <div className="text-center mt-12">
                <Button onClick={() => window.location.href = "/contact"}>
                  Discuss Your Requirements
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}