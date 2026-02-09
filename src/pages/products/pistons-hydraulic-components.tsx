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

export default function PistonsHydraulicComponents() {
  const pistonsHydraulic: ProductItem[] = [
    {
      name: "Primary Piston",
      description: "High-performance piston for primary hydraulic systems",
      imagePath: "/images/Primary-Piston.jpg"
    },
    {
      name: "Rear Piston",
      description: "Specialized piston for rear brake or hydraulic applications",
      imagePath: "/images/Rear-Piston.jpg"
    },
    {
      name: "De-compression FCU",
      description: "Engine decompression mechanism for fluid control units",
      imagePath: "/images/De-compression-FCU.jpg"
    },
    {
      name: "Oil Lock Coller K60",
      description: "Specialized collar for oil sealing in hydraulic systems",
      imagePath: "/images/Oil-Lock-Coller-K60.jpg"
    },
    {
      name: "Oil Lock Coller",
      description: "Standard oil lock collar for hydraulic applications",
      imagePath: "/images/Oil-Lock-Coller.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Pistons & Hydraulic Components - Sanewal Auto Engineers</title>
        <meta name="description" content="Precision-engineered pistons and hydraulic parts for optimal fluid control and pressure management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Pistons & Hydraulic Components</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Precision-engineered pistons and hydraulic parts for optimal fluid control and pressure management.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Precision Engineered</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Optimal Fluid Control</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Pressure Management</span>
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Pistons & Hydraulic Components</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality pistons and hydraulic components that ensure optimal fluid control and pressure management in automotive applications.
                </p>
              </div>
              
              {/* Card Grid Layout for Pistons & Hydraulic Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {pistonsHydraulic.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border mt-12">
                <h3 className="text-xl font-semibold mb-4">Manufacturing Capabilities</h3>
                <p className="mb-4">
                  Our state-of-the-art manufacturing facilities enable us to produce hydraulic components with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Precision surface finishes for optimal sealing</li>
                  <li>Tight dimensional tolerances for reliable operation</li>
                  <li>Advanced materials for extended service life</li>
                  <li>Specialized coatings for reduced friction and wear</li>
                  <li>Comprehensive testing for performance validation</li>
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