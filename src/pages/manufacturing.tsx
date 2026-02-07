import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Facilities from "@/components/manufacturing/Facilities";
import Machinery from "@/components/manufacturing/Machinery";
import Process from "@/components/manufacturing/Process";
import Associates from "@/components/manufacturing/Associates";

export default function Manufacturing() {
  return (
    <>
      <Head>
        <title>Manufacturing Capabilities - Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our state-of-the-art manufacturing facilities, machinery, processes, and trusted associates at Sanewal Auto Engineers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Manufacturing Capabilities</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Our advanced manufacturing capabilities enable us to produce high-quality automotive components with precision and efficiency.
              </p>
            </div>
          </div>
          <Facilities />
          <Machinery />
          <Process />
          <Associates />
        </main>
        <Footer />
      </div>
    </>
  );
}