import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

interface ProductItem {
  name: string;
  description: string;
  imagePath?: string;
}

export default function PrecisionMachinedParts() {
  const precisionMachined: ProductItem[] = [
    {
      name: "Pole Shoe 1.5 HP",
      description: "Specialized component for electric motor applications",
    }
  ];

  return (
    <>
      <Head>
        <title>Precision Machined Parts - Sanewal Auto Engineers</title>
        <meta name="description" content="Custom machined components manufactured with tight tolerances and superior finish." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Precision Machined Parts</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Custom machined components manufactured with tight tolerances and superior finish.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Tight Tolerances</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Superior Finish</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Precision Machined Parts</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality precision machined parts with tight tolerances and superior finish for various automotive applications.
                </p>
              </div>
              
              {/* Card Grid Layout for Precision Machined Parts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {precisionMachined.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border mt-12">
                <h3 className="text-xl font-semibold mb-4">Machining Capabilities</h3>
                <p className="mb-4">
                  Our state-of-the-art machining facilities enable us to produce components with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>CNC turning: Diameter range from 5mm to 300mm</li>
                  <li>CNC milling: 3-axis and 4-axis capabilities</li>
                  <li>Grinding: Surface, cylindrical, and centerless</li>
                  <li>EDM: Wire and sinker capabilities for complex geometries</li>
                  <li>Heat treatment: In-house facilities for various materials</li>
                </ul>
              </div>
              
              <div className="text-center mt-12">
                <Button onClick={() => window.location.href = "/contact"}>
                  Request a Quote
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