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

export default function FastenersConnectors() {
  const fastenersConnectors: ProductItem[] = [
    {
      name: "Stud Hood",
      description: "High-strength stud for hood mounting and secure fastening",
      imagePath: "/images/Stud-Hood.jpg"
    },
    {
      name: "Lock Nut",
      description: "Self-locking nut designed to prevent loosening under vibration",
      imagePath: "/images/Lock-Nut.jpg"
    },
    {
      name: "Steering Head Nut",
      description: "Specialized nut for steering column assembly and adjustment",
      imagePath: "/images/Steering-Head-Nut.jpg"
    },
    {
      name: "Fork Bolt",
      description: "High-strength bolt for suspension fork assembly",
      imagePath: "/images/Fork-Bolt.jpg"
    },
    {
      name: "Banjo Bolt M12",
      description: "Hollow bolt designed for fluid passage in brake and fuel systems",
      imagePath: "/images/Banjo-Bolt-M12.jpg"
    },
    {
      name: "Banjo Bolt M22",
      description: "Heavy-duty hollow bolt for high-pressure fluid systems",
      imagePath: "/images/Banjo-Bolt-M22.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Fasteners & Connectors - Sanewal Auto Engineers</title>
        <meta name="description" content="Essential fastening components designed for secure connections in automotive applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Fasteners & Connectors</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Essential fastening components designed for secure connections in automotive applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">High Strength</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Vibration Resistant</span>
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
                <h2 className="text-3xl font-bold mb-4">Our Fasteners & Connectors</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality fasteners and connectors that ensure secure and reliable connections in automotive applications.
                </p>
              </div>
              
              {/* Card Grid Layout for Fasteners & Connectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {fastenersConnectors.map((item, index) => (
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
                  Our fasteners and connectors undergo rigorous quality control processes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Material certification and traceability</li>
                  <li>Dimensional inspection for critical features</li>
                  <li>Torque and tensile strength testing</li>
                  <li>Surface finish and coating verification</li>
                  <li>Compliance with automotive industry standards</li>
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
}import React from "react";
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

export default function FastenersConnectors() {
  const fastenersConnectors: ProductItem[] = [
    {
      name: "Stud Hood",
      description: "High-strength stud for hood mounting and secure fastening",
      imagePath: "/images/Stud-Hood.jpg"
    },
    {
      name: "Lock Nut",
      description: "Self-locking nut designed to prevent loosening under vibration",
      imagePath: "/images/Lock-Nut.jpg"
    },
    {
      name: "Steering Head Nut",
      description: "Specialized nut for steering column assembly and adjustment",
      imagePath: "/images/Steering-Head-Nut.jpg"
    },
    {
      name: "Fork Bolt",
      description: "High-strength bolt for suspension fork assembly",
      imagePath: "/images/Fork-Bolt.jpg"
    },
    {
      name: "Banjo Bolt M12",
      description: "Hollow bolt designed for fluid passage in brake and fuel systems",
      imagePath: "/images/Banjo-Bolt-M12.jpg"
    },
    {
      name: "Banjo Bolt M22",
      description: "Heavy-duty hollow bolt for high-pressure fluid systems",
      imagePath: "/images/Banjo-Bolt-M22.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Fasteners & Connectors - Sanewal Auto Engineers</title>
        <meta name="description" content="Essential fastening components designed for secure connections in automotive applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Fasteners & Connectors</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Essential fastening components designed for secure connections in automotive applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">High Strength</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">Vibration Resistant</span>
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
                <h2 className="text-3xl font-bold mb-4">Our Fasteners & Connectors</h2>
                <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We specialize in manufacturing high-quality fasteners and connectors that ensure secure and reliable connections in automotive applications.
                </p>
              </div>
              
              {/* Card Grid Layout for Fasteners & Connectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {fastenersConnectors.map((item, index) => (
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
                  Our fasteners and connectors undergo rigorous quality control processes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Material certification and traceability</li>
                  <li>Dimensional inspection for critical features</li>
                  <li>Torque and tensile strength testing</li>
                  <li>Surface finish and coating verification</li>
                  <li>Compliance with automotive industry standards</li>
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