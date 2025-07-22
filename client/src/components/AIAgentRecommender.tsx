import { useMemo } from 'react';
import { FormState, AIAgent } from '../types';
import { getRecommendedAgents } from '../lib/calculations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Bell, Mic, Database, ClipboardCheck, FileText, Mail } from 'lucide-react';

const agents: AIAgent[] = [
  {
    id: 'lookup',
    name: 'Email & Phone Lookup Agent',
    description: 'Cuts prospect research time by automatically finding contact information for candidates and clients.',
    icon: 'Search',
    color: 'blue'
  },
  {
    id: 'alerts',
    name: 'Job-Change Alerts',
    description: 'Opens warm business development conversations by alerting you when candidates change jobs.',
    icon: 'Bell',
    color: 'amber'
  },
  {
    id: 'notetaker',
    name: 'AI Note Taker',
    description: 'Automatically summarizes calls and meetings, saving time on manual note-taking.',
    icon: 'Mic',
    color: 'green'
  },
  {
    id: 'encoding',
    name: 'Encoding Agent',
    description: 'Updates CRM fields automatically, ensuring your database stays current without manual input.',
    icon: 'Database',
    color: 'purple'
  },
  {
    id: 'scorecard',
    name: 'Scorecard Agent',
    description: 'Speeds up interview scoring by automatically evaluating candidate responses against job requirements.',
    icon: 'ClipboardCheck',
    color: 'red'
  },
  {
    id: 'summarization',
    name: 'Summarization Agent',
    description: 'Creates comprehensive candidate overviews from multiple touchpoints and interactions.',
    icon: 'FileText',
    color: 'teal'
  },
  {
    id: 'email',
    name: 'Email Generation Agent',
    description: 'Writes personalized follow-up emails and outreach messages to candidates and clients.',
    icon: 'Mail',
    color: 'indigo'
  }
];

const IconComponent = ({ iconName }: { iconName: string }) => {
  const icons = {
    Search: Search,
    Bell: Bell,
    Mic: Mic,
    Database: Database,
    ClipboardCheck: ClipboardCheck,
    FileText: FileText,
    Mail: Mail
  };
  
  const Icon = icons[iconName as keyof typeof icons];
  return <Icon size={20} />;
};

interface AIAgentRecommenderProps {
  formState: FormState;
}

export default function AIAgentRecommender({ formState }: AIAgentRecommenderProps) {
  const recommendedAgents = useMemo(() => getRecommendedAgents(formState), [formState]);

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="heading text-3xl text-secondary mb-4">
          AI Agents That Solve Your Bottlenecks
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Based on your inputs, these AI agents will have the biggest impact on your recruitment efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => {
          const isRecommended = recommendedAgents.includes(agent.id);
          
          return (
            <Card 
              key={agent.id} 
              className={`hover:shadow-xl transition-all duration-300 ${
                isRecommended ? 'ring-2 ring-primary shadow-lg bg-primary/5 dark:bg-primary/10' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${agent.color}-100 dark:bg-${agent.color}-900/30 rounded-lg flex items-center justify-center mr-4`}>
                    <div className={`text-${agent.color}-600 dark:text-${agent.color}-400`}>
                      <IconComponent iconName={agent.icon} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{agent.name}</h4>
                    {isRecommended && (
                      <Badge variant="secondary" className="mt-1 text-xs bg-primary/10 text-primary">
                        Recommended for you
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {agent.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
