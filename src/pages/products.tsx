import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCategories from "@/components/products/ProductCategories";
import TestingEquipment from "@/components/products/TestingEquipment";
import CoreValues from "@/components/products/CoreValues";
import Container from "@/components/ui/container";

export default function Products() {
  return (
    <>
      <Head>
        <title>Products - Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our range of high-quality machined components, forged components, and automotive parts manufactured with precision and excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <Container>
              <h1 className="text-4xl md:text-5xl font-bold text-center">Our Products</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                M/s Sanewal Auto Engineers Private Ltd is an IATF 16949:2016 & ISO 14001:2015 Certified company engaged in the manufacturing of Machined/Forged Components & Supplying these to Leading automotive Companies in INDIA & around the World for the last 40 yrs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">IATF 16949:2016 Certified</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">ISO 14001:2015 Certified</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-medium">40+ Years Experience</span>
                </div>
              </div>
            </Container>
          </div>
          
          <Container className="py-12">
            <div className="bg-muted/30 p-6 rounded-lg border">
              <p className="text-lg">
                We are committed to customer's satisfaction through Continual improvement in Quality & Production. Our prime objective will always be to achieve Important Factors like -- <span className="font-semibold">Cost, Quality, On Time Delivery</span> -- In the interest of our Customers in order to serve in the best way.
              </p>
            </div>
          </Container>
          
          <ProductCategories />
          <CoreValues />
          <TestingEquipment />
        </main>
        <Footer />
      </div>
    </>
  );
}