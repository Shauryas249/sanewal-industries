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

export default function ForgedComponents() {
  const forgedComponents: ProductItem[] = [
    {
      name: "Stud Hood",
      description: "High-strength stud for hood mounting and secure fastening",
    },
    {
      name: "Lock Nut",
      description: "Self-locking nut designed to prevent loosening under vibration",
    },
    {
      name: "Steering Head Nut",
      description: "Specialized nut for steering column assembly and adjustment",
    },
    {
      name: "Forged Brackets",
      description: "Durable brackets with superior strength-to-weight ratio",
    },
    {
      name: "Connecting Rods",
      description: "High-performance connecting rods for engine applications",
    },
    {
      name: "Forged Flanges",
      description: "Precision flanges for high-pressure and high-temperature systems",
    }
  ];

  return (
    <>
      <Head>
        <title>Forged Components - Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our range of high-quality forged components manufactured with superior strength and durability." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Forged Components</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                High-strength forged components designed for durability and performance in demanding automotive applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Superior Strength</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Enhanced Durability</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Improved Grain Structure</span>
                </div>
              </div>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Forged Components</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality forged components with superior strength and durability for the automotive industry.
                </p>
              </div>
              
              {/* Card Grid Layout for Forged Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {forgedComponents.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border mt-12">
                <h3 className="text-xl font-semibold mb-4">Forging Advantages</h3>
                <p className="mb-4">
                  Our forging process offers several advantages over other manufacturing methods:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enhanced mechanical properties and strength</li>
                  <li>Improved grain structure and material integrity</li>
                  <li>Better fatigue resistance and durability</li>
                  <li>Reduced material waste compared to machining</li>
                  <li>Consistent quality across high-volume production</li>
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