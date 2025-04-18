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

export default function BushingsCollars() {
  const bushingsCollars: ProductItem[] = [
    {
      name: "Bush Pinion",
      description: "Specialized bushing for pinion gear applications",
    },
    {
      name: "Coller 9MM",
      description: "Standard 9mm collar for various applications",
    },
    {
      name: "Coller Shift",
      description: "Specialized collar for shift mechanisms",
    },
    {
      name: "Coller Wheel Side",
      description: "Wheel-side collar for automotive applications",
    }
  ];

  return (
    <>
      <Head>
        <title>Bushings & Collars - Sanewal Auto Engineers</title>
        <meta name="description" content="Durable bushings and collars designed for reduced friction and extended component life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Bushings & Collars</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Durable bushings and collars designed for reduced friction and extended component life.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Reduced Friction</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Extended Life</span>
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
                <h2 className="text-3xl font-bold mb-4">Our Bushings & Collars</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality bushings and collars that ensure reduced friction and extended component life in automotive applications.
                </p>
              </div>
              
              {/* Card Grid Layout for Bushings & Collars */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {bushingsCollars.map((item, index) => (
                  <ProductCard 
                    key={index}
                    name={item.name}
                    description={item.description}
                    imagePath={item.imagePath}
                  />
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg border mt-12">
                <h3 className="text-xl font-semibold mb-4">Material Options</h3>
                <p className="mb-4">
                  We offer bushings and collars in a variety of materials to suit different application requirements:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Bronze: Excellent for high-load applications with good wear resistance</li>
                  <li>Steel: High strength and durability for demanding environments</li>
                  <li>Sintered Metal: Self-lubricating properties for maintenance-free operation</li>
                  <li>Polymer: Lightweight with excellent friction properties</li>
                  <li>Composite: Specialized materials for unique application requirements</li>
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