import { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery, { GalleryImage } from '@/components/gallery/Gallery';
import { Separator } from '@/components/ui/separator';

const GalleryPage: NextPage = () => {
  // Enhanced gallery images with titles and descriptions
  const galleryImages: GalleryImage[] = [
    {
      id: 'precision-machined-components',
      src: '/images/Precision-Machined-Components.jpg',
      alt: 'High-precision machined automotive fasteners and components',
      width: 1200,
      height: 800,
      title: 'Precision Machined Components',
      description: 'High-precision machined components manufactured to exact specifications.',
      tags: ['precision', 'machining']
    },
    {
      id: 'forged-automotive-components',
      src: '/images/Forged-Automotive-Components.jpg',
      alt: 'Durable forged metal components for high-stress automotive applications',
      width: 1200,
      height: 800,
      title: 'Forged Automotive Components',
      description: 'Durable forged components designed for high-stress automotive applications.',
      tags: ['forged', 'automotive']
    },
    {
      id: 'automotive-parts',
      src: '/images/Automotive-Parts.jpg',
      alt: 'Specialized automotive components engineered for performance and reliability',
      width: 1200,
      height: 800,
      title: 'Automotive Parts',
      description: 'Specialized automotive components engineered for performance and reliability.',
      tags: ['automotive', 'parts']
    },
    {
      id: 'custom-solutions',
      src: '/images/Custom-engineered-solutions.jpg',
      alt: 'Tailored engineering solutions for specific automotive requirements',
      width: 1200,
      height: 800,
      title: 'Custom Engineered Solutions',
      description: 'Tailored engineering solutions designed to meet specific client requirements.',
      tags: ['custom', 'engineering']
    },
    // New images from CDN
    {
      id: 'quality-control-lab',
      src: '/images/Quality-control-lab.jpg',
      alt: 'Quality Control Laboratory',
      width: 1200,
      height: 800,
      title: 'Quality Control Lab',
      description: 'Our advanced quality control laboratory with precision testing equipment.',
      tags: ['quality', 'testing']
    },
    {
      id: 'warehouse-facility',
      src: '/images/Warehouse-Facility.jpg',
      alt: 'Warehouse Facility',
      width: 1200,
      height: 800,
      title: 'Warehouse Facility',
      description: 'Spacious warehouse facility for efficient inventory management and logistics.',
      tags: ['warehouse', 'logistics']
    },
    {
      id: 'assembly-line',
      src: '/images/Assembly-Line.jpg',
      alt: 'Assembly Line',
      width: 1200,
      height: 800,
      title: 'Assembly Line',
      description: 'Modern assembly line where components are assembled with precision and care.',
      tags: ['assembly', 'production']
    },
    {
      id: 'manufacturing-floor',
      src: '/images/Production-Plant.jpg',
      alt: 'Manufacturing Floor',
      width: 1200,
      height: 800,
      title: 'Manufacturing Floor',
      description: 'State-of-the-art manufacturing floor with advanced machinery and equipment.',
      tags: ['manufacturing', 'production']
    }
  ];

  return (
    <>
      <Head>
        <title>Gallery | Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our manufacturing facilities and product gallery at Sanewal Auto Engineers." />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container mx-auto text-center">
            <div className="space-y-4 mb-8 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold">Gallery</h1>
              <p className="text-lg text-muted-foreground">
                Explore our manufacturing facilities and product showcase through our comprehensive gallery.
              </p>
            </div>

            <Separator className="my-8 max-w-4xl mx-auto" />

            <section>
              <div className="mb-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2">Our Facilities & Products</h2>
                <p className="text-muted-foreground">
                  Our state-of-the-art manufacturing plant features advanced production equipment,
                  dedicated assembly areas, and specialized quality control facilities.
                </p>
              </div>

              <Gallery 
                images={galleryImages}
              />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;