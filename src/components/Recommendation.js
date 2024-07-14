import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Recommendation({ title, description, rating, features }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <Badge variant="secondary" className="flex items-center">
            <StarIcon className="h-4 w-4 mr-1" />
            {rating}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className={`list-disc pl-5 space-y-1 ${expanded ? '' : 'h-20 overflow-hidden'}`}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {features.length > 2 && (
          <Button
            variant="ghost"
            className="mt-2 w-full"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> Show More
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}