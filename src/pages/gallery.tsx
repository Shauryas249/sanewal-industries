import { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery, { GalleryImage } from '@/components/gallery/Gallery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GalleryPage: NextPage = () => {
  // Sample gallery images
  const facilityImages: GalleryImage[] = [
    {
      id: 'facility1',
      src: '/images/facility1.jpg',
      alt: 'Manufacturing Facility - Main Production Floor',
      width: 1200,
      height: 800,
      category: 'facilities'
    },
    {
      id: 'facility2',
      src: '/images/facility2.jpg',
      alt: 'Manufacturing Facility - Assembly Line',
      width: 1200,
      height: 800,
      category: 'facilities'
    }
  ];

  const productImages: GalleryImage[] = [
    {
      id: 'machined1',
      src: '/images/machined.jpg',
      alt: 'Precision Machined Components',
      width: 1200,
      height: 800,
      category: 'products'
    },
    {
      id: 'forged1',
      src: '/images/forged.jpg',
      alt: 'Forged Automotive Components',
      width: 1200,
      height: 800,
      category: 'products'
    },
    {
      id: 'automotive1',
      src: '/images/automotive.jpg',
      alt: 'Automotive Parts and Components',
      width: 1200,
      height: 800,
      category: 'products'
    },
    {
      id: 'custom1',
      src: '/images/custom.jpg',
      alt: 'Custom Engineered Solutions',
      width: 1200,
      height: 800,
      category: 'products'
    }
  ];

  // Combine all images for the "All" tab
  const allImages = [...facilityImages, ...productImages];

  return (
    <>
      <Head>
        <title>Gallery | Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our manufacturing facilities and product gallery at Sanewal Auto Engineers." />
      </Head>

      <Header />

      <main className="min-h-screen py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Gallery</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our manufacturing facilities and product showcase through our comprehensive gallery.
            Click on any image to view it in detail.
          </p>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Gallery 
                images={allImages} 
                title="Complete Gallery" 
                description="A comprehensive showcase of our facilities and products"
              />
            </TabsContent>
            <TabsContent value="facilities">
              <Gallery 
                images={facilityImages} 
                title="Manufacturing Facilities" 
                description="State-of-the-art manufacturing facilities equipped with the latest technology"
              />
            </TabsContent>
            <TabsContent value="products">
              <Gallery 
                images={productImages} 
                title="Product Showcase" 
                description="High-quality automotive components manufactured with precision"
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;