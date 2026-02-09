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

export default function AdaptersConnectors() {
  const adaptersConnectors: ProductItem[] = [
    {
      name: "Upper Case",
      description: "Precision-engineered housing for automotive components",
      imagePath: "/images/upper-case.jpg"
    },
    {
      name: "Inner Pole",
      description: "Specialized connector for electrical components",
      imagePath: "/images/inner-pole.jpg"
    },
    {
      name: "Plug",
      description: "Sealing plug for fluid systems",
      imagePath: "/images/plug.jpg"
    },
    {
      name: "Adjecting Pin",
      description: "Precision-engineered pin for accurate adjustments and alignments",
      imagePath: "/images/adjecting-pin.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Adapters & Connectors - Sanewal Auto Engineers</title>
        <meta name="description" content="Specialized connectors that ensure proper integration between various automotive systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Adapters & Connectors</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Specialized connectors that ensure proper integration between various automotive systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">System Integration</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Reliable Connection</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Precision Engineered</span>
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Adapters & Connectors</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality adapters and connectors that ensure proper integration between various automotive systems.
                </p>
              </div>
              
              {/* Card Grid Layout for Adapters & Connectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {adaptersConnectors.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border mt-12">
                <h3 className="text-xl font-semibold mb-4">Application Areas</h3>
                <p className="mb-4">
                  Our adapters and connectors are used in various automotive systems:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Electrical systems: Ensuring reliable power and signal transmission</li>
                  <li>Fluid systems: Providing leak-free connections for hydraulic and cooling circuits</li>
                  <li>Mechanical interfaces: Creating secure connections between different components</li>
                  <li>Sensor integration: Facilitating proper mounting and connection of sensors</li>
                  <li>Control systems: Enabling precise adjustment and control mechanisms</li>
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