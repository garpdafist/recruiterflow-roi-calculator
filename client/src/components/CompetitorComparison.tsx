import { useMemo } from 'react';
import { FormState } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface CompetitorComparisonProps {
  formState: FormState;
}

const competitorData = {
  Bullhorn: {
    name: 'Bullhorn',
    aiFeatures: 2,
    automationLevel: 30,
    setupTime: '6-12 months',
    pricing: 'From $99/month',
    strengths: ['Market leader', 'Established'],
    weaknesses: ['Limited AI', 'Complex setup', 'Expensive add-ons']
  },
  JobAdder: {
    name: 'JobAdder',
    aiFeatures: 1,
    automationLevel: 25,
    setupTime: '3-6 months',
    pricing: 'From $89/month',
    strengths: ['User-friendly', 'Good reporting'],
    weaknesses: ['Minimal AI', 'Limited automation', 'Basic features']
  },
  Spreadsheet: {
    name: 'Spreadsheets',
    aiFeatures: 0,
    automationLevel: 5,
    setupTime: 'Immediate',
    pricing: 'Free',
    strengths: ['Familiar', 'Flexible'],
    weaknesses: ['No automation', 'Error-prone', 'Time consuming']
  },
  Other: {
    name: 'Other Systems',
    aiFeatures: 1,
    automationLevel: 20,
    setupTime: '3-8 months',
    pricing: 'Varies',
    strengths: ['Specialized features'],
    weaknesses: ['Limited AI', 'Integration issues']
  }
};

const recruiterflowData = {
  name: 'Recruiterflow',
  aiFeatures: 7,
  automationLevel: 75,
  setupTime: '1-2 weeks',
  pricing: 'From $99/month',
  strengths: ['AI-first approach', '7 AI agents', 'Quick setup', 'High automation'],
  weaknesses: []
};

export default function CompetitorComparison({ formState }: CompetitorComparisonProps) {
  const currentCompetitor = useMemo(() => {
    return competitorData[formState.currentSystem] || competitorData.Other;
  }, [formState.currentSystem]);

  const efficiencyGap = recruiterflowData.automationLevel - currentCompetitor.automationLevel;

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="heading text-3xl text-secondary mb-4">
          How Recruiterflow Compares to {currentCompetitor.name}
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See the clear advantages of choosing an AI-first recruitment platform.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              Your Current System: {currentCompetitor.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">AI Features</div>
                <div className="text-2xl font-bold text-red-600">{currentCompetitor.aiFeatures}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Automation Level</div>
                <div className="text-2xl font-bold text-red-600">{currentCompetitor.automationLevel}%</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
                <div className="text-lg font-semibold">{currentCompetitor.setupTime}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Pricing</div>
                <div className="text-lg font-semibold">{currentCompetitor.pricing}</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-green-700 dark:text-green-300">Strengths:</h4>
              {currentCompetitor.strengths.map((strength, index) => (
                <div key={index} className="flex items-center text-sm">
                  <CheckCircle className="text-green-500 mr-2" size={14} />
                  {strength}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-red-700 dark:text-red-300">Limitations:</h4>
              {currentCompetitor.weaknesses.map((weakness, index) => (
                <div key={index} className="flex items-center text-sm">
                  <XCircle className="text-red-500 mr-2" size={14} />
                  {weakness}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recruiterflow */}
        <Card className="border-primary ring-2 ring-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
              Recruiterflow (AI-First)
              <Badge className="ml-2">Recommended</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">AI Features</div>
                <div className="text-2xl font-bold text-primary">{recruiterflowData.aiFeatures}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Automation Level</div>
                <div className="text-2xl font-bold text-primary">{recruiterflowData.automationLevel}%</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
                <div className="text-lg font-semibold">{recruiterflowData.setupTime}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Pricing</div>
                <div className="text-lg font-semibold">{recruiterflowData.pricing}</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Key Advantages:</h4>
              {recruiterflowData.strengths.map((strength, index) => (
                <div key={index} className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={14} />
                  {strength}
                </div>
              ))}
            </div>

            {/* Efficiency Improvement */}
            <div className="bg-primary/10 rounded-lg p-4 mt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary">Efficiency Improvement:</span>
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  +{efficiencyGap}% boost
                </Badge>
              </div>
              <p className="text-sm text-primary/80 mt-2">
                Switch to Recruiterflow and gain {efficiencyGap}% more automation than your current system.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Migration CTA */}
      <Card className="mt-8 bg-gradient-to-r from-primary/5 to-emerald-50 dark:from-primary/10 dark:to-emerald-900/20">
        <CardContent className="p-8 text-center">
          <h4 className="text-2xl font-bold mb-4">Ready to Make the Switch?</h4>
          <p className="text-muted-foreground mb-6">
            Join hundreds of recruitment agencies who've already upgraded to AI-powered efficiency.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-lg font-semibold">{currentCompetitor.name}</span>
            <ArrowRight className="text-primary" size={24} />
            <span className="text-lg font-semibold text-primary">Recruiterflow</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}