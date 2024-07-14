import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Calculator from '@/components/Calculator';
import { Button } from "@/components/ui/button";

export default function Home() {
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
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Top 10 Tools for Small Businesses</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Card 
                key={num}
                title={`Tool ${num}`} 
                description="A must-have tool for small businesses." 
                link="#"
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