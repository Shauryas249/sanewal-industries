import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EthicsOverview from "@/components/ethics/EthicsOverview";
import CodeOfConduct from "@/components/ethics/CodeOfConduct";
import ComplianceSections from "@/components/ethics/ComplianceSections";

export default function EthicsCompliance() {
  return (
    <>
      <Head>
        <title>Ethics & Compliance - Sanewal Auto Engineers</title>
        <meta name="description" content="Learn about our commitment to ethical business practices, code of conduct, and compliance policies at Sanewal Auto Engineers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Ethics & Compliance</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Our commitment to conducting business with integrity, transparency, and in accordance with the highest ethical standards.
              </p>
            </div>
          </div>
          <EthicsOverview />
          <CodeOfConduct />
          <ComplianceSections />
        </main>
        <Footer />
      </div>
    </>
  );
}