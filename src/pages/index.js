import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Calculator from '@/components/Calculator';
import Recommendation from '@/components/Recommendation';
import { Button } from "@/components/ui/button";

export default function Home() {
  const topTools = [
    { title: "QuickBooks", description: "Accounting software for small businesses", rating: "4.8", features: ["Easy invoicing", "Expense tracking", "Financial reporting"] },
    { title: "Slack", description: "Team communication and collaboration platform", rating: "4.7", features: ["Real-time messaging", "File sharing", "Integration with other tools"] },
    { title: "Trello", description: "Project management and organization tool", rating: "4.5", features: ["Visual task boards", "Team collaboration", "Workflow automation"] },
    { title: "Mailchimp", description: "Email marketing and automation platform", rating: "4.6", features: ["Email campaign creation", "Audience segmentation", "Performance analytics"] },
    { title: "Zoom", description: "Video conferencing and online meeting software", rating: "4.4", features: ["HD video and audio", "Screen sharing", "Meeting recording"] },
  ];

  return (
    <Layout>
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">SmallBizHub</h1>
          <p className="mt-6 text-xl max-w-3xl">Your one-stop resource for all things small business: HR, payroll, financing, and more.</p>
          <div className="mt-10">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">Get Started</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card 
            title="Human Resources" 
            description="Manage your team effectively with our HR tools and resources." 
            link="/hr"
          />
          <Card 
            title="Payroll" 
            description="Simplify your payroll process with our easy-to-use solutions." 
            link="/payroll"
          />
          <Card 
            title="Financing" 
            description="Explore financing options to grow your business." 
            link="/financing"
          />
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Top Tools for Small Businesses</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topTools.map((tool, index) => (
              <Recommendation
                key={index}
                title={tool.title}
                description={tool.description}
                rating={tool.rating}
                features={tool.features}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Loan Calculator</h2>
        <Calculator />
      </div>
    </Layout>
  );
}