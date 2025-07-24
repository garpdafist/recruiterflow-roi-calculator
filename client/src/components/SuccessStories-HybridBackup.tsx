import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const successStories = [
  {
    id: 1,
    company: "TechRecruiters Pro",
    industry: "Technology Staffing",
    teamSize: "15 recruiters",
    author: "Sarah Chen",
    position: "CEO & Founder",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3df?w=150&h=150&fit=crop&crop=face",
    results: {
      efficiency: { value: 40, label: "% Efficiency Gain", color: "bg-blue-500" },
      placements: { value: 60, label: "Extra Placements/Month", color: "bg-green-500" },
      revenue: { value: 250000, label: "Additional Revenue", color: "bg-purple-500", prefix: "$" },
      time: { value: 20, label: "Hours Saved/Week", color: "bg-orange-500" }
    },
    testimonial: "Recruiterflow's AI agents have transformed our workflow. The email lookup and note-taking features alone save us 20 hours per week. We're placing 60% more candidates with the same team size."
  },
  {
    id: 2,
    company: "Executive Search Partners",
    industry: "Executive Recruitment",
    teamSize: "8 consultants", 
    author: "Michael Rodriguez",
    position: "Managing Partner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    results: {
      efficiency: { value: 55, label: "% Efficiency Gain", color: "bg-blue-500" },
      placements: { value: 25, label: "Extra Placements/Month", color: "bg-green-500" },
      revenue: { value: 180000, label: "Additional Revenue", color: "bg-purple-500", prefix: "$" },
      time: { value: 15, label: "Hours Saved/Week", color: "bg-orange-500" }
    },
    testimonial: "The AI note-taker and encoding agents eliminated our biggest bottlenecks. What used to take hours now happens automatically. Our ROI was 300% in the first year."
  },
  {
    id: 3,
    company: "Healthcare Staffing Solutions",
    industry: "Healthcare Recruitment",
    teamSize: "25 recruiters",
    author: "Jennifer Thompson",
    position: "VP of Operations",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    results: {
      efficiency: { value: 35, label: "% Efficiency Gain", color: "bg-blue-500" },
      placements: { value: 90, label: "Extra Placements/Month", color: "bg-green-500" },
      revenue: { value: 420000, label: "Additional Revenue", color: "bg-purple-500", prefix: "$" },
      time: { value: 35, label: "Hours Saved/Week", color: "bg-orange-500" }
    },
    testimonial: "Moving from spreadsheets to Recruiterflow with AI was a game-changer. Every metric improved dramatically. The AI agents handle the repetitive work so our team can focus on relationship building."
  }
];

export default function SuccessStoriesHybrid() {
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
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl mb-2">{story.company}</CardTitle>
              <div className="space-y-2">
                <Badge variant="secondary" className="text-xs">
                  {story.industry}
                </Badge>
                <p className="text-sm text-muted-foreground">{story.teamSize}</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(story.results).map(([key, metric]) => (
                  <div key={key} className="text-center">
                    <div className={`${metric.color} text-white rounded-lg p-3 mb-2`}>
                      <div className="text-lg font-bold">
                        {metric.prefix || ''}{metric.value.toLocaleString()}{key === 'efficiency' ? '%' : ''}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonial with Profile */}
              <div className="pt-4 border-t">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={story.avatar} 
                    alt={story.author}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                      "{story.testimonial}"
                    </p>
                    <div className="text-xs">
                      <div className="font-semibold text-foreground">{story.author}</div>
                      <div className="text-primary">{story.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}