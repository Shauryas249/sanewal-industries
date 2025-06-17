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

export default function MachinedComponents() {
  const machinedComponents: ProductItem[] = [
    {
      name: "Adjusting Pin",
      description: "Precision-engineered pin for accurate adjustments and alignments",
    },
    {
      name: "Banjo Bolt M12",
      description: "Hollow bolt designed for fluid passage in brake and fuel systems",
    },
    {
      name: "Banjo Bolt M22",
      description: "Heavy-duty hollow bolt for high-pressure fluid systems",
    },
    {
      name: "Collars",
      description: "Various collar types including Pinion, Shift, Oil Lock, and Wheel Side",
    },
    {
      name: "Pins",
      description: "Specialized pins including Gear Shift and Sector variants",
    },
    {
      name: "Custom Machined Parts",
      description: "Tailored machined components to meet specific requirements",
    }
  ];

  return (
    <>
      <Head>
        <title>Machined Components - Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our range of high-quality machined components manufactured with precision and excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Machined Components</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Precision-engineered components manufactured with tight tolerances and superior finish for automotive applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">High Precision</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Superior Finish</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Tight Tolerances</span>
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Machined Components</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality machined components with precision and excellence for the automotive industry.
                </p>
              </div>
              
              {/* Card Grid Layout for Machined Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {machinedComponents.map((item, index) => (
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
                  Our state-of-the-art machining facilities enable us to produce components with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tolerances as tight as ±0.01mm</li>
                  <li>Surface finishes up to Ra 0.4</li>
                  <li>Complex geometries and features</li>
                  <li>Various material options including steel, aluminum, and brass</li>
                  <li>Batch sizes from prototypes to high-volume production</li>
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