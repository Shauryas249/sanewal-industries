import React, { Suspense } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Products from "@/components/Products";
import Clients from "@/components/Clients";
import Quality from "@/components/Quality";
import CTA from "@/components/CTA";

// Define metadata for SEO
const metadata = {
  title: "Sanewal Auto Engineers - Precision Automotive Components",
  description: "IATF 16949:2016 & ISO 14001:2015 certified company engaged in manufacturing of Machined/Forged Components for the automotive industry. Contact us at Plot no. 253 HSIIDC, Rohtak-124001, Haryana, India or call +91-1262-249535.",
  keywords: "automotive components, precision engineering, machined components, forged components, IATF 16949, ISO 14001",
  ogImage: "/images/sanewal-og-image.jpg"
};

export default function Home() {
  return (
    <Layout
      title={metadata.title}
      description={metadata.description}
      keywords={metadata.keywords}
      ogImage={metadata.ogImage}
    >
      <Suspense fallback={<div className="h-[70vh] bg-muted/20 animate-pulse" />}>
        <Hero />
      </Suspense>
      
      <Overview />
      
      <Suspense fallback={<div className="h-96 bg-muted/20 animate-pulse" />}>
        <Products />
      </Suspense>
      
      <Clients />
      <Quality />
      <CTA />
    </Layout>
  );
}