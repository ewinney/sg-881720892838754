import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const faqItems = [
  {
    question: "How do I register my small business?",
    answer: "The process of registering a small business varies depending on your location and business structure. Generally, you'll need to choose a business name, decide on a business structure (e.g., sole proprietorship, LLC, corporation), register with state and local agencies, and obtain necessary licenses and permits."
  },
  {
    question: "What are the best financing options for small businesses?",
    answer: "Common financing options for small businesses include traditional bank loans, SBA loans, business lines of credit, invoice financing, and crowdfunding. The best option depends on your business needs, credit history, and how quickly you need the funds."
  },
  {
    question: "How can I effectively manage payroll for my small business?",
    answer: "To effectively manage payroll, consider using payroll software, staying up-to-date with tax laws and regulations, maintaining accurate records, and establishing a consistent pay schedule. You may also want to consider outsourcing payroll to a professional service."
  },
  {
    question: "What are some key HR practices for small businesses?",
    answer: "Key HR practices for small businesses include creating clear job descriptions, developing an employee handbook, implementing fair compensation and benefits packages, providing regular feedback and performance reviews, and ensuring compliance with employment laws."
  },
  {
    question: "How can I market my small business on a limited budget?",
    answer: "Cost-effective marketing strategies for small businesses include leveraging social media, content marketing, email marketing, networking at local events, encouraging customer referrals, and optimizing your website for search engines (SEO)."
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-6">Frequently Asked Questions</h1>
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6"
        />
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {filteredFAQs.length === 0 && (
          <p className="text-gray-500 mt-4">No matching questions found. Please try a different search term.</p>
        )}
      </div>
    </Layout>
  );
}