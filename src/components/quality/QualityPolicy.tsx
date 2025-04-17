import React from 'react';

const QualityPolicy: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Quality Policy</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-muted/30 p-8 rounded-lg border border-border">
          <p className="text-lg mb-6 italic text-center">
            "At Sanewal Auto Engineers, we are committed to achieving customer satisfaction through continual improvement in quality and production processes."
          </p>
          
          <div className="space-y-4">
            <p>
              Our quality policy is built on the following principles:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Meeting or exceeding customer requirements and applicable regulatory standards</li>
              <li>Implementing and maintaining an effective quality management system compliant with IATF 16949:2016</li>
              <li>Continually improving our processes, products, and services</li>
              <li>Providing necessary resources and training to our employees</li>
              <li>Establishing measurable quality objectives and regularly reviewing performance</li>
              <li>Fostering a culture of quality awareness throughout the organization</li>
              <li>Building strong partnerships with suppliers who share our commitment to quality</li>
            </ul>
            
            <p className="mt-6">
              This policy is communicated to all employees and is available to interested parties. It is reviewed periodically to ensure its continued relevance and effectiveness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;