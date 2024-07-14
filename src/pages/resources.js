import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from 'react';

const initialResources = [
  {
    title: "Employee Handbook Template",
    description: "A customizable template for creating your company's employee handbook.",
    downloadLink: "/downloads/employee-handbook-template.docx",
    likes: 0,
    dislikes: 0
  },
  {
    title: "Cash Flow Forecast Spreadsheet",
    description: "An Excel spreadsheet to help you project your business's cash flow.",
    downloadLink: "/downloads/cash-flow-forecast.xlsx",
    likes: 0,
    dislikes: 0
  },
  {
    title: "Marketing Plan Template",
    description: "A comprehensive template to help you create a marketing plan for your small business.",
    downloadLink: "/downloads/marketing-plan-template.pptx",
    likes: 0,
    dislikes: 0
  },
  {
    title: "Business Plan Guide",
    description: "A detailed guide on how to write a business plan for your startup or small business.",
    downloadLink: "/downloads/business-plan-guide.pdf",
    likes: 0,
    dislikes: 0
  },
  {
    title: "Invoice Template",
    description: "A professional invoice template for your business transactions.",
    downloadLink: "/downloads/invoice-template.docx",
    likes: 0,
    dislikes: 0
  }
];

export default function Resources() {
  const [resources, setResources] = useState(initialResources);

  const handleFeedback = (index, type) => {
    const newResources = [...resources];
    if (type === 'like') {
      newResources[index].likes += 1;
    } else {
      newResources[index].dislikes += 1;
    }
    setResources(newResources);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'Resources', href: '/resources' }]} />
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-6">Business Resources</h1>
        <p className="text-xl text-gray-600 mb-8">Download free templates and guides to help manage and grow your business.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href={resource.downloadLink} download>
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </Button>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleFeedback(index, 'like')}>
                    <ThumbsUp className="mr-2 h-4 w-4" /> {resource.likes}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleFeedback(index, 'dislike')}>
                    <ThumbsDown className="mr-2 h-4 w-4" /> {resource.dislikes}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}