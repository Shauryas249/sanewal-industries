import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Associates: React.FC = () => {
  const partnerCategories = [
    {
      id: 'cold-forging',
      name: 'Cold Forging',
      partners: [
        { id: 1, name: 'M/S Sunita Industries' },
        { id: 2, name: 'M/S N.S. International' },
      ],
    },
    {
      id: 'hot-forging',
      name: 'Hot Forging',
      partners: [
        { id: 1, name: 'M/S Premier Pvt. Ltd.' },
        { id: 2, name: 'M/S Chahal Automatics' },
      ],
    },
    {
      id: 'heat-treatment',
      name: 'Heat Treatment',
      partners: [
        { id: 1, name: 'M/S Friends Engg.' },
        { id: 2, name: 'M/S Shri Mahadev Heat Treaters' },
      ],
    },
    {
      id: 'surface-treatment',
      name: 'Surface Treatment',
      partners: [
        { id: 1, name: 'M/S Harjai Sons Ltd.' },
        { id: 2, name: 'M/S Lakshmi Industrial Product' },
      ],
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Associates</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We collaborate with trusted partners who share our commitment to quality and excellence in specialized manufacturing processes.
          </p>
        </div>
        
        <Tabs defaultValue="cold-forging" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {partnerCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {partnerCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.partners.map((partner) => (
                  <Card key={partner.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold">{partner.name}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Our {category.name.toLowerCase()} partners help us deliver exceptional quality and specialized processes for our automotive components.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Associates;