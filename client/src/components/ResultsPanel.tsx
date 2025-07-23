import { useMemo } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FormState, ROIResults } from '../types';
import { calculateROI } from '../lib/calculations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Bot, Plus, ArrowUp, Percent, Info } from 'lucide-react';

interface ResultsPanelProps {
  formState: FormState;
}

function AnimatedNumber({ value, prefix = '', suffix = '', decimals = 0 }: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: { duration: 500 }
  });

  return (
    <animated.div>
      {number.to(n => `${prefix}${n.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${suffix}`)}
    </animated.div>
  );
}

export default function ResultsPanel({ formState }: ResultsPanelProps) {
  const results = useMemo(() => calculateROI(formState), [formState]);

  return (
    <div className="lg:sticky lg:top-8 lg:self-start space-y-6">
      {/* Main ROI Card - Simplified */}
      <Card className="bg-gradient-to-br from-primary/5 to-emerald-50 dark:from-primary/10 dark:to-emerald-900/20">
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex items-center justify-center text-3xl">
            <TrendingUp className="mr-3 text-primary" size={28} />
            Your Recruiterflow ROI
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-6xl font-bold text-primary mb-2">
            <AnimatedNumber value={results.roiPercentage} suffix="%" />
          </div>
          <p className="text-muted-foreground mb-6">Annual Return on Investment</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/50 dark:bg-gray-800/30 rounded-lg p-3">
              <div className="font-semibold text-lg">
                <AnimatedNumber value={results.incrementalRevenue} prefix="$" />
              </div>
              <div className="text-muted-foreground">Extra Revenue</div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/30 rounded-lg p-3">
              <div className="font-semibold text-lg">
                <AnimatedNumber value={results.extraPlacements} decimals={1} />
              </div>
              <div className="text-muted-foreground">Extra Placements/Month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Revenue</span>
              <span className="font-semibold">
                <AnimatedNumber value={results.currentRevenue} prefix="$" />
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Hours Saved/Month</span>
              <span className="font-semibold text-primary">
                <AnimatedNumber value={results.adminHoursSaved} decimals={0} />
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground flex items-center">
                Annual Cost
                <Info className="ml-1 h-3 w-3 text-muted-foreground/70" />
              </span>
              <span className="font-semibold">
                <AnimatedNumber value={results.annualCost} prefix="$" />
              </span>
            </div>
            <div className="text-xs text-muted-foreground/70 mt-1 pl-0">
              Based on Recruiterflow at $99/employee/month
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculation Method */}
      <Card className="bg-muted/30">
        <CardContent className="p-4">
          <div className="text-xs text-muted-foreground space-y-2">
            <div className="font-medium text-foreground mb-2">How we calculate your ROI:</div>
            <div>• <strong>Time savings:</strong> 26 hrs/week per recruiter (resume screening, scheduling, tagging, KMC tasks)</div>
            <div>• <strong>Faster placements:</strong> 21-day cycle vs 30-day cycle = 50% more placements</div>
            <div>• <strong>Based on real recruiter data</strong> from agencies using Recruiterflow's AI agents</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
