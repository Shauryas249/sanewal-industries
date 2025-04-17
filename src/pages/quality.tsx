import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QualityPolicy from "@/components/quality/QualityPolicy";
import Certifications from "@/components/quality/Certifications";
import QualityAssurance from "@/components/quality/QualityAssurance";
import TestingEquipment from "@/components/quality/TestingEquipment";

export default function Quality() {
  return (
    <>
      <Head>
        <title>Quality Management - Sanewal Auto Engineers</title>
        <meta name="description" content="Learn about our quality management system, certifications, quality assurance methods, and testing equipment at Sanewal Auto Engineers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Quality Management</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                Our commitment to quality is reflected in our certifications, processes, and state-of-the-art testing equipment.
              </p>
            </div>
          </div>
          <QualityPolicy />
          <Certifications />
          <QualityAssurance />
          <TestingEquipment />
        </main>
        <Footer />
      </div>
    </>
  );
}