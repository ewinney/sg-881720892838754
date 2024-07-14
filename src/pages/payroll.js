import Layout from '@/components/Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Payroll() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Payroll Management</h1>
        <p className="text-xl text-gray-600 mb-8">Simplify your payroll process with our easy-to-use solutions.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Payroll Best Practices</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Practice</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Accurate Time Tracking</TableCell>
              <TableCell>Implement a reliable time tracking system to ensure accurate payroll calculations.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Regular Audits</TableCell>
              <TableCell>Conduct regular payroll audits to catch and correct errors early.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Stay Compliant</TableCell>
              <TableCell>Keep up-to-date with changing tax laws and regulations to ensure compliance.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
}