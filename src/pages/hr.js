import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const hrBestPractices = [
  { name: "Recruitment and Onboarding", description: "Implement a structured recruitment process and create a comprehensive onboarding program to set new hires up for success." },
  { name: "Performance Management", description: "Establish clear performance expectations and conduct regular performance reviews to help employees grow and develop." },
  { name: "Employee Engagement", description: "Foster a positive work environment and implement strategies to keep employees motivated and engaged." },
  { name: "Compliance", description: "Stay up-to-date with employment laws and regulations to ensure your business remains compliant." },
  { name: "Training and Development", description: "Provide ongoing training and development opportunities to improve employee skills and job satisfaction." }
];

const employeeRetentionData = [
  { name: 'Competitive Salary', value: 30 },
  { name: 'Work-Life Balance', value: 25 },
  { name: 'Career Growth', value: 20 },
  { name: 'Company Culture', value: 15 },
  { name: 'Benefits Package', value: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function HR() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'HR', href: '/hr' }]} />
        <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-6">Human Resources</h1>
        <p className="text-xl text-gray-600 mb-8">Manage your team effectively with our HR tools and resources.</p>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">HR Best Practices</h2>
        <Accordion type="single" collapsible className="mb-12">
          {hrBestPractices.map((practice, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{practice.name}</AccordionTrigger>
              <AccordionContent>{practice.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors Influencing Employee Retention</h2>
        <div className="w-full h-80 mb-12">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={employeeRetentionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {employeeRetentionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
}