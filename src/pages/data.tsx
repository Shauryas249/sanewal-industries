import { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DataVisualization from '@/components/data/DataVisualization';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DataPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Performance Metrics | Sanewal Auto Engineers</title>
        <meta name="description" content="Explore our performance metrics and data visualizations at Sanewal Auto Engineers." />
      </Head>

      <Header />

      <main className="min-h-screen py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Performance Metrics</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our key performance indicators and metrics through interactive data visualizations.
            These charts provide insights into our production volumes, quality metrics, and market presence.
          </p>

          <div className="grid grid-cols-1 gap-8">
            <DataVisualization 
              title="Production & Quality Metrics" 
              description="Interactive charts showing our production volumes, quality metrics, and market share"
            />

            <Card>
              <CardHeader>
                <CardTitle>Understanding Our Metrics</CardTitle>
                <CardDescription>Key insights from our performance data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Production Volume</h3>
                  <p>
                    Our production volume data showcases the monthly output across our three main product categories: 
                    machined components, forged components, and automotive parts. The data demonstrates our 
                    manufacturing capacity and production trends over time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Quality Metrics</h3>
                  <p>
                    Quality is at the core of our manufacturing philosophy. Our defect rate trend shows 
                    continuous improvement in our quality control processes, with defect rates consistently 
                    below industry standards. This reflects our commitment to delivering high-quality 
                    components to our customers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Market Share</h3>
                  <p>
                    Our market share visualization illustrates our presence across different industry sectors. 
                    While we maintain a strong focus on automotive components, we have successfully diversified 
                    into industrial and aerospace applications, demonstrating our versatility and adaptability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DataPage;