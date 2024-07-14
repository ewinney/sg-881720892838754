import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const resources = [
  {
    title: "Employee Handbook Template",
    description: "A customizable template for creating your company's employee handbook.",
    downloadLink: "/downloads/employee-handbook-template.docx"
  },
  {
    title: "Cash Flow Forecast Spreadsheet",
    description: "An Excel spreadsheet to help you project your business's cash flow.",
    downloadLink: "/downloads/cash-flow-forecast.xlsx"
  },
  {
    title: "Marketing Plan Template",
    description: "A comprehensive template to help you create a marketing plan for your small business.",
    downloadLink: "/downloads/marketing-plan-template.pptx"
  },
  {
    title: "Business Plan Guide",
    description: "A detailed guide on how to write a business plan for your startup or small business.",
    downloadLink: "/downloads/business-plan-guide.pdf"
  },
  {
    title: "Invoice Template",
    description: "A professional invoice template for your business transactions.",
    downloadLink: "/downloads/invoice-template.docx"
  }
];

export default function Resources() {
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
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}