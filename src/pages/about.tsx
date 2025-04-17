import type { NextPage } from 'next';
import Head from 'next/head';
import AboutUs from '@/components/about/AboutUs';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Sanewal Auto Engineers</title>
        <meta name="description" content="Learn about Sanewal Auto Engineers, a leading manufacturer of premium Machined and Forged Components & Fasteners since 1985." />
      </Head>
      
      <main>
        <AboutUs />
      </main>
    </>
  );
};

export default About;