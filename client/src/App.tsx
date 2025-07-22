import { useState } from 'react';
import { FormState } from './types';
import CalculatorForm from './components/CalculatorForm';
import ResultsPanel from './components/ResultsPanel';
import AIAgentRecommender from './components/AIAgentRecommender';
import CompetitorComparison from './components/CompetitorComparison';
import SuccessStories from './components/SuccessStories';
import { Button } from '@/components/ui/button';
import { Moon, Sun, LogIn } from 'lucide-react';
import recruiterflowLogo from '@assets/Recuiterflow logo hq_1753173195547.png';

function App() {
  const [formState, setFormState] = useState<FormState>({
    numEmployees: 5,
    placementsPerMonth: 0,
    avgFeePerPlacement: 0,
    currentSystem: 'Bullhorn',
    workDaysPerWeek: 5
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  // Initialize dark mode on mount
  if (typeof window !== 'undefined' && isDarkMode) {
    document.documentElement.classList.add('dark');
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <img 
                src={recruiterflowLogo} 
                alt="Recruiterflow" 
                className="h-8 w-auto"
              />
              <div>
                <p className="text-sm text-muted-foreground">AI-First Recruitment CRM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </Button>
              <Button>
                <LogIn className="mr-2" size={16} />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                Trusted by 10,000 + recruiters & headhunters
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="heading-xl text-4xl lg:text-6xl leading-tight mb-6">
              <span className="text-primary">AI</span>{" "}
              <span className="text-foreground">BUILT IN, NOT BOLTED ON - SCALE YOUR RECRUITMENT AGENCY WITH</span>{" "}
              <span className="text-primary">recruiterflow</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Recruiterflow's AI Agents are built directly into your workflows.
              It's not layered on top, it's an extension of how you work
            </p>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              onClick={() => {
                document.getElementById('calculator')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Calculate Your ROI
            </Button>
          </div>
        </div>

        {/* Calculator Layout */}
        <div id="calculator" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <CalculatorForm 
            formState={formState} 
            onFormChange={setFormState} 
          />

          {/* Right Column - Results Panel */}
          <ResultsPanel formState={formState} />
        </div>

        {/* AI Agent Recommender Section */}
        <AIAgentRecommender formState={formState} />

        {/* Competitor Comparison Section */}
        <CompetitorComparison formState={formState} />

        {/* Success Stories Section */}
        <SuccessStories />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Recruiterflow. All rights reserved.
              {/* TODO: Marketing team to update legal copy */}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
