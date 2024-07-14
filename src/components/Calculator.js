import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    if (principal > 0 && rate > 0 && term > 0) {
      const x = Math.pow(1 + rate, term);
      const monthly = (principal * x * rate) / (x - 1);
      setMonthlyPayment(monthly.toFixed(2));
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Loan Calculator</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount ($)</label>
          <Input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="e.g., 10000"
          />
        </div>
        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
          <Input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="e.g., 5"
          />
        </div>
        <div>
          <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">Loan Term (years)</label>
          <Input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="e.g., 5"
          />
        </div>
        <Button onClick={calculateLoan}>Calculate</Button>
        {monthlyPayment && (
          <div className="mt-4">
            <p className="text-lg font-semibold">Monthly Payment: ${monthlyPayment}</p>
          </div>
        )}
      </div>
    </div>
  );
}