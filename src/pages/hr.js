import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HR() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Human Resources</h1>
        <p className="text-xl text-gray-600 mb-8">Manage your team effectively with our HR tools and resources.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">HR Best Practices</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Recruitment and Onboarding</AccordionTrigger>
            <AccordionContent>
              Implement a structured recruitment process and create a comprehensive onboarding program to set new hires up for success.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Performance Management</AccordionTrigger>
            <AccordionContent>
              Establish clear performance expectations and conduct regular performance reviews to help employees grow and develop.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Employee Engagement</AccordionTrigger>
            <AccordionContent>
              Foster a positive work environment and implement strategies to keep employees motivated and engaged.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
}