import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      details: [
        "Sanewal Auto Engineers Private Ltd",
        "Industrial Area, Phase 1",
        "Chandigarh, India - 160002"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: [
        "+91 172 2655123",
        "+91 172 2655124"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: [
        "info@sanewalauto.com",
        "sales@sanewalauto.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Sanewal Auto Engineers</title>
        <meta name="description" content="Get in touch with Sanewal Auto Engineers for inquiries about our machined and forged automotive components." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="bg-primary/10 py-16">
            <div className="container">
              <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
              <p className="text-xl text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
                We'd love to hear from you. Please fill out the form below or use our contact information to get in touch.
              </p>
            </div>
          </div>
          
          <section className="py-16">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 mt-1">{item.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground mb-1">{detail}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-8 pb-16">
            <div className="container">
              <div className="bg-muted rounded-lg overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2844868551394!2d76.7850441!3d30.7059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzIxLjIiTiA3NsKwNDcnMDYuMiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}