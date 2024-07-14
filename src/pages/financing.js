import Layout from '@/components/Layout';
import Calculator from '@/components/Calculator';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Financing() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Business Financing</h1>
        <p className="text-xl text-gray-600 mb-8">Explore financing options to grow your business.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Small Business Loans</CardTitle>
              <CardDescription>Traditional term loans for established businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Lower interest rates</li>
                <li>Longer repayment terms</li>
                <li>Larger loan amounts available</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Business Line of Credit</CardTitle>
              <CardDescription>Flexible financing for ongoing needs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Draw funds as needed</li>
                <li>Pay interest only on what you use</li>
                <li>Revolving credit line</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Loan Calculator</h2>
        <Calculator />
      </div>
    </Layout>
  );
}