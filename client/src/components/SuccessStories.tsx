import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const successStories = [
  {
    id: 1,
    company: "TechRecruiters Pro",
    industry: "Technology Staffing",
    teamSize: "15 recruiters",
    results: {
      efficiency: { value: 40, label: "% Efficiency Gain", color: "bg-blue-500" },
      placements: { value: 60, label: "Extra Placements/Month", color: "bg-green-500" },
      revenue: { value: 250000, label: "Additional Revenue", color: "bg-purple-500", prefix: "$" },
      time: { value: 20, label: "Hours Saved/Week", color: "bg-orange-500" }
    },
    testimonial: "Recruiterflow's AI agents have transformed our workflow. We're placing 60% more candidates with the same team size."
  },
  {
    id: 2,
    company: "Executive Search Partners",
    industry: "Executive Recruitment",
    teamSize: "8 consultants", 
    results: {
      efficiency: { value: 55, label: "% Efficiency Gain", color: "bg-blue-500" },
      placements: { value: 25, label: "Extra Placements/Month", color: "bg-green-500" },
      revenue: { value: 180000, label: "Additional Revenue", color: "bg-purple-500", prefix: "$" },
      time: { value: 15, label: "Hours Saved/Week", color: "bg-orange-500" }
    },
    testimonial: "The AI note-taker and encoding agents eliminated our biggest bottlenecks. Our ROI was 300% in the first year."
  },
  {
    id: 3,
    company: "Healthcare Staffing Solutions",
    industry: "Healthcare Recruitment",
    teamSize: "25 recruiters",
    results: {
      efficiency: { value: 35, label: "% Efficiency Gain", color: "bg-blue-500" },
      placements: { value: 90, label: "Extra Placements/Month", color: "bg-green-500" },
      revenue: { value: 420000, label: "Additional Revenue", color: "bg-purple-500", prefix: "$" },
      time: { value: 35, label: "Hours Saved/Week", color: "bg-orange-500" }
    },
    testimonial: "Moving from spreadsheets to Recruiterflow with AI was a game-changer. Every metric improved dramatically."
  }
];

export default function SuccessStories() {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h3 className="heading text-3xl text-secondary mb-4">
          Real Results from Real Agencies
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how recruitment agencies like yours are achieving measurable ROI with Recruiterflow's AI agents
        </p>
      </div>

      {/* Success Stories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {successStories.map((story) => (
          <Card key={story.id} className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl mb-2">{story.company}</CardTitle>
              <div className="space-y-1">
                <Badge variant="secondary" className="text-xs">
                  {story.industry}
                </Badge>
                <p className="text-sm text-muted-foreground">{story.teamSize}</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(story.results).map(([key, metric]) => (
                  <div key={key} className="text-center">
                    <div className={`${metric.color} text-white rounded-lg p-3 mb-2`}>
                      <div className="text-2xl font-bold">
                        {metric.prefix || ''}{metric.value.toLocaleString()}{key === 'efficiency' ? '%' : ''}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonial */}
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{story.testimonial}"
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}