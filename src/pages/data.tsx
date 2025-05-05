import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const DataPage: NextPage = () => {
  const router = useRouter();

  // Redirect to homepage after 5 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <>
      <Head>
        <title>Access Restricted | Sanewal Auto Engineers</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto mb-8">
              <Card className="border-destructive/50">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl">Access Restricted</CardTitle>
                  <CardDescription>This page is not available for public viewing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The performance metrics and data visualizations are restricted to authorized personnel only.
                    You will be redirected to the homepage in a few seconds.
                  </p>
                  <div className="pt-4">
                    <Button onClick={() => router.push('/')}>
                      Return to Homepage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DataPage;