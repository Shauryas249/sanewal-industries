import { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery, { GalleryImage } from '@/components/gallery/Gallery';
import { FilterCategory } from '@/components/gallery/FilterTags';
import { Separator } from '@/components/ui/separator';

const GalleryPage: NextPage = () => {
  // Define filter categories
  const filterCategories: FilterCategory[] = [
    {
      name: 'Facilities',
      tags: ['facility', 'manufacturing', 'office', 'warehouse', 'exterior', 'assembly', 'packaging']
    },
    {
      name: 'Products',
      tags: ['products', 'automotive', 'fasteners', 'precision', 'threaded', 'custom', 'specialized']
    },
    {
      name: 'Quality',
      tags: ['quality', 'measuring', 'testing', 'inspection', 'process', 'material']
    }
  ];

  // Enhanced gallery images with tags, titles, and descriptions
  const galleryImages: GalleryImage[] = [
    {
      id: 'facility1',
      src: '/images/facility1.jpg',
      alt: 'Manufacturing Facility - Main Production Floor',
      width: 1200,
      height: 800,
      title: 'Manufacturing Floor',
      description: 'Our main manufacturing area with CNC machines and automated production lines.',
      tags: ['facility', 'manufacturing', 'assembly']
    },
    {
      id: 'facility2',
      src: '/images/facility2.jpg',
      alt: 'Manufacturing Facility - Assembly Line',
      width: 1200,
      height: 800,
      title: 'Assembly Line',
      description: 'Dedicated assembly area where components are assembled with precision.',
      tags: ['facility', 'assembly', 'manufacturing']
    },
    {
      id: 'machined1',
      src: '/images/machined.jpg',
      alt: 'Precision Machined Components',
      width: 1200,
      height: 800,
      title: 'Machined Components',
      description: 'High-precision machined components manufactured to exact specifications.',
      tags: ['products', 'precision', 'machined', 'specialized']
    },
    {
      id: 'forged1',
      src: '/images/forged.jpg',
      alt: 'Forged Automotive Components',
      width: 1200,
      height: 800,
      title: 'Forged Components',
      description: 'Durable forged components designed for high-stress automotive applications.',
      tags: ['products', 'automotive', 'forged', 'specialized']
    },
    {
      id: 'automotive1',
      src: '/images/automotive.jpg',
      alt: 'Automotive Parts and Components',
      width: 1200,
      height: 800,
      title: 'Automotive Parts',
      description: 'Specialized automotive components engineered for performance and reliability.',
      tags: ['products', 'automotive', 'precision', 'custom']
    },
    {
      id: 'custom1',
      src: '/images/custom.jpg',
      alt: 'Custom Engineered Solutions',
      width: 1200,
      height: 800,
      title: 'Custom Solutions',
      description: 'Tailored engineering solutions designed to meet specific client requirements.',
      tags: ['products', 'custom', 'specialized', 'precision']
    },
    {
      id: 'quality1',
      src: '/images/hero1.jpg',
      alt: 'Quality Control Laboratory',
      width: 1200,
      height: 800,
      title: 'Quality Control Lab',
      description: 'Advanced quality control laboratory with state-of-the-art measuring equipment.',
      tags: ['quality', 'testing', 'measuring', 'inspection']
    },
    {
      id: 'warehouse1',
      src: '/images/hero2.jpg',
      alt: 'Warehouse and Logistics Center',
      width: 1200,
      height: 800,
      title: 'Warehouse Facility',
      description: 'Modern warehouse facility for efficient inventory management and distribution.',
      tags: ['facility', 'warehouse', 'packaging']
    },
    {
      id: 'exterior1',
      src: '/images/hero3.jpg',
      alt: 'Exterior View of Manufacturing Plant',
      width: 1200,
      height: 800,
      title: 'Manufacturing Plant',
      description: 'Exterior view of our state-of-the-art manufacturing plant.',
      tags: ['facility', 'exterior', 'manufacturing']
    }
  ];

  return (
    <>
      <Head>
        <title>Gallery | Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our manufacturing facilities and product gallery at Sanewal Auto Engineers." />
      </Head>

      <Header />

      <main className="min-h-screen py-12">
        <div className="container">
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-bold">Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Explore our manufacturing facilities and product showcase through our comprehensive gallery.
              Use the filters below to find specific images or browse by category.
            </p>
          </div>

          <Separator className="my-8" />

          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Our Facilities & Products</h2>
              <p className="text-muted-foreground">
                Our state-of-the-art manufacturing plant features advanced production equipment,
                dedicated assembly areas, and specialized quality control facilities.
              </p>
            </div>

            <Gallery 
              images={galleryImages}
              filterCategories={filterCategories}
            />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;