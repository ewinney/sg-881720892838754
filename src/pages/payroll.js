import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const payrollBestPractices = [
  { practice: "Accurate Time Tracking", description: "Implement a reliable time tracking system to ensure accurate payroll calculations." },
  { practice: "Regular Audits", description: "Conduct regular payroll audits to catch and correct errors early." },
  { practice: "Stay Compliant", description: "Keep up-to-date with changing tax laws and regulations to ensure compliance." },
  { practice: "Automate Processes", description: "Use payroll software to automate calculations and reduce human error." },
  { practice: "Secure Data Management", description: "Implement strong security measures to protect sensitive employee information." }
];

const payrollCostsData = [
  { name: 'Salaries', cost: 70 },
  { name: 'Benefits', cost: 15 },
  { name: 'Taxes', cost: 10 },
  { name: 'Admin', cost: 5 }
];

export default function Payroll() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'Payroll', href: '/payroll' }]} />
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-6">Payroll Management</h1>
        <p className="text-xl text-gray-600 mb-8">Simplify your payroll process with our easy-to-use solutions.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Payroll Best Practices</h2>
        <Table className="mb-12">
          <TableHeader>
            <TableRow>
              <TableHead>Practice</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payrollBestPractices.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.practice}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Payroll Cost Breakdown</h2>
        <div className="w-full h-80 mb-12">
          <ResponsiveContainer>
            <BarChart data={payrollCostsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cost" fill="#8884d8" name="Percentage of Total Payroll Costs" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
}