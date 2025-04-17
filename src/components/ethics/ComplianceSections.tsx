import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, AlertTriangle, Lock, DollarSign, Users, Leaf, Heart, Bell, Briefcase, Scale, Tool } from 'lucide-react';

const ComplianceSections: React.FC = () => {
  const sections = [
    {
      id: 'conflict',
      title: 'Conflict of Interest',
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            Employees must avoid situations where personal interests could conflict, or appear to conflict, with the interests of Sanewal Auto Engineers.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Employees must disclose any potential conflicts of interest to management.</li>
            <li>Decisions must be made objectively and in the best interest of the company.</li>
            <li>Personal relationships, financial interests, or outside activities should not influence business decisions.</li>
            <li>Accepting gifts or favors that might compromise judgment is prohibited.</li>
          </ul>
        </>
      )
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      icon: <Lock className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            Protecting confidential information is essential to maintaining trust and competitive advantage.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Employees must safeguard proprietary and confidential information.</li>
            <li>Confidential information should only be shared with authorized individuals.</li>
            <li>Confidentiality obligations continue even after employment ends.</li>
            <li>Intellectual property, trade secrets, and customer data must be protected.</li>
          </ul>
        </>
      )
    },
    {
      id: 'anti-corruption',
      title: 'Anti-Corruption & Bribery',
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            We have zero tolerance for bribery and corruption in all our business dealings.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Offering, giving, or accepting bribes is strictly prohibited.</li>
            <li>Facilitation payments are not permitted under any circumstances.</li>
            <li>All financial transactions must be accurately recorded in our books and records.</li>
            <li>Due diligence must be conducted on third parties acting on our behalf.</li>
            <li>Any suspicious activity must be reported immediately.</li>
          </ul>
        </>
      )
    },
    {
      id: 'workplace',
      title: 'Workplace Behavior',
      icon: <Users className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            We are committed to maintaining a respectful, inclusive, and professional workplace environment.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Discrimination and harassment in any form are not tolerated.</li>
            <li>Employees must treat each other with dignity and respect.</li>
            <li>Professional conduct is expected in all work-related activities.</li>
            <li>Open communication and constructive feedback are encouraged.</li>
            <li>Workplace violence or threats will not be tolerated.</li>
          </ul>
        </>
      )
    },
    {
      id: 'environmental',
      title: 'Environmental Responsibility',
      icon: <Leaf className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            We are committed to minimizing our environmental impact and promoting sustainable practices.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Compliance with all environmental laws and regulations is mandatory.</li>
            <li>We strive to reduce waste, conserve energy, and minimize pollution.</li>
            <li>Environmental considerations are integrated into our business decisions.</li>
            <li>We promote recycling and the responsible use of resources.</li>
            <li>Continuous improvement in environmental performance is a priority.</li>
          </ul>
        </>
      )
    },
    {
      id: 'health-safety',
      title: 'Health & Safety',
      icon: <Heart className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            The health and safety of our employees, contractors, and visitors is our highest priority.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>All applicable health and safety laws and regulations must be followed.</li>
            <li>Employees must report unsafe conditions or behaviors immediately.</li>
            <li>Proper training and protective equipment are provided for all tasks.</li>
            <li>Regular safety inspections and risk assessments are conducted.</li>
            <li>Emergency response procedures are in place and regularly tested.</li>
          </ul>
        </>
      )
    },
    {
      id: 'whistleblower',
      title: 'Whistleblower Protection',
      icon: <Bell className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            We encourage reporting of ethical concerns and protect those who report in good faith.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Employees can report concerns without fear of retaliation.</li>
            <li>Multiple reporting channels are available, including anonymous options.</li>
            <li>All reports are taken seriously and investigated promptly.</li>
            <li>Confidentiality is maintained to the extent possible.</li>
            <li>Retaliation against whistleblowers is strictly prohibited.</li>
          </ul>
        </>
      )
    },
    {
      id: 'supplier',
      title: 'Supplier & Vendor Code',
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            We expect our suppliers and vendors to uphold the same ethical standards that we do.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Suppliers must comply with all applicable laws and regulations.</li>
            <li>Fair labor practices and human rights must be respected.</li>
            <li>Environmental responsibility is expected from all suppliers.</li>
            <li>Quality and safety standards must be maintained.</li>
            <li>Ethical business practices, including anti-corruption, are required.</li>
          </ul>
        </>
      )
    },
    {
      id: 'enforcement',
      title: 'Enforcement & Discipline',
      icon: <Scale className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            Violations of our Code of Conduct and policies are taken seriously and may result in disciplinary action.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Violations are investigated thoroughly and fairly.</li>
            <li>Disciplinary actions are proportionate to the violation.</li>
            <li>Consequences may include verbal warnings, written warnings, suspension, or termination.</li>
            <li>Legal violations may be reported to appropriate authorities.</li>
            <li>Managers are responsible for enforcing the Code in their departments.</li>
          </ul>
        </>
      )
    },
    {
      id: 'equipment',
      title: 'Ethical Use of Equipment',
      icon: <Tool className="h-6 w-6 text-primary" />,
      content: (
        <>
          <p className="mb-4">
            Proper and ethical use of machinery and equipment is essential for safety, quality, and efficiency.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Equipment must only be used by trained and authorized personnel.</li>
            <li>Safety protocols and operating procedures must be followed at all times.</li>
            <li>Tampering with safety features or controls is strictly prohibited.</li>
            <li>Equipment must be properly maintained and any issues reported promptly.</li>
            <li>Company equipment should only be used for authorized business purposes.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compliance Sections</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive ethics and compliance program covers various aspects of business conduct.
          </p>
        </div>
        
        <Tabs defaultValue="conflict" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto p-1 bg-muted/50">
            {sections.map((section) => (
              <TabsTrigger 
                key={section.id} 
                value={section.id}
                className="flex items-center gap-2 py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {section.icon}
                <span className="hidden md:inline">{section.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{section.title}</h3>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ComplianceSections;