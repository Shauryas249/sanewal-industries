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

export default function AutomotiveParts() {
  const automotiveParts: ProductItem[] = [
    {
      name: "Rotor Shaft Alternator",
      description: "Precision-machined shaft for optimal alternator performance",
    },
    {
      name: "Pole Shoe 1.5 HP",
      description: "Specialized component for electric motor applications",
    },
    {
      name: "De-compression",
      description: "Engine decompression mechanism for easier starting",
    },
    {
      name: "Fork Bolt",
      description: "High-strength bolt for suspension fork assembly",
    },
    {
      name: "Upper Case",
      description: "Precision-engineered housing for automotive components",
    },
    {
      name: "Spline Gear Shaft",
      description: "Specialized shaft with spline profile for power transmission",
    },
    {
      name: "Primary Piston",
      description: "High-performance piston for primary hydraulic systems",
    },
    {
      name: "Rear Piston",
      description: "Specialized piston for rear brake or hydraulic applications",
    }
  ];

  return (
    <>
      <Head>
        <title>Automotive Parts - Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our range of specialized automotive parts engineered for optimal performance and reliability." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Automotive Parts</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Specialized automotive components engineered for optimal performance and reliability in demanding applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">OEM Quality</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Reliable Performance</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Precision Engineering</span>
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Automotive Parts</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality automotive components engineered for optimal performance and reliability.
                </p>
              </div>
              
              {/* Card Grid Layout for Automotive Parts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {automotiveParts.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border mt-12">
                <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                <p className="mb-4">
                  Our automotive parts undergo rigorous quality control processes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>100% inspection for critical dimensions</li>
                  <li>Material certification and traceability</li>
                  <li>Functional testing for performance validation</li>
                  <li>Compliance with automotive industry standards</li>
                  <li>IATF 16949:2016 certified manufacturing processes</li>
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