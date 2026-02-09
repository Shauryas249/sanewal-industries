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

export default function ShaftsRotationalComponents() {
  const shaftsRotational: ProductItem[] = [
    {
      name: "Spline Gear Shaft",
      description: "Specialized shaft with spline profile for power transmission",
      imagePath: "/images/spline-gear-shaft.jpg"
    },
    {
      name: "Pin Sector 10x64",
      description: "Precision pin for sector gear applications",
      imagePath: "/images/pin-sector-10x64.jpg"
    },
    {
      name: "Rotor Shaft Alternator",
      description: "Precision-machined shaft for optimal alternator performance",
      imagePath: "/images/rotor-shaft-alternator.jpg"
    },
    {
      name: "Pin Gear Shift 28G20",
      description: "Specialized pin for gear shift mechanisms",
      imagePath: "/images/pin-gear-shift-28g20.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Shafts & Rotational Components - Sanewal Auto Engineers</title>
        <meta name="description" content="High-strength rotational components manufactured to ensure reliable power transmission." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Shafts & Rotational Components</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                High-strength rotational components manufactured to ensure reliable power transmission.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">High Strength</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Reliable Transmission</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Precision Machined</span>
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Shafts & Rotational Components</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality shafts and rotational components that ensure reliable power transmission in automotive applications.
                </p>
              </div>
              
              {/* Card Grid Layout for Shafts & Rotational Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {shaftsRotational.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border mt-12">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <p className="mb-4">
                  Our shafts and rotational components are manufactured to meet the following specifications:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dimensional tolerances: ±0.01mm for critical features</li>
                  <li>Surface finish: Ra 0.4 to 1.6 depending on application</li>
                  <li>Material hardness: 30-62 HRC depending on component requirements</li>
                  <li>Straightness tolerance: 0.05mm per 100mm</li>
                  <li>Concentricity: 0.02mm maximum</li>
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