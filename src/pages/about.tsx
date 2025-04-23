import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutUs from '@/components/about/AboutUs';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Sanewal Auto Engineers</title>
        <meta name="description" content="Learn about Sanewal Auto Engineers, a leading manufacturer of premium Machined and Forged Components & Fasteners since 1985. Located at Plot no. 253 HSIIDC, Rohtak-124001 (Haryana) India." />
      </Head>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AboutUs />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;