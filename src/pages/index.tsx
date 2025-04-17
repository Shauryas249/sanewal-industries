import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Products from "@/components/Products";
import Clients from "@/components/Clients";
import Quality from "@/components/Quality";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanewal Auto Engineers - Precision Automotive Components</title>
        <meta name="description" content="IATF 16949:2016 & ISO 14001:2015 certified company engaged in manufacturing of Machined/Forged Components for the automotive industry." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Overview />
          <Products />
          <Clients />
          <Quality />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}