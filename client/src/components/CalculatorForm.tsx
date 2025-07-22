import { useState } from 'react';
import { FormState } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calculator, RotateCcw, Calendar } from 'lucide-react';

interface CalculatorFormProps {
  formState: FormState;
  onFormChange: (formState: FormState) => void;
}

export default function CalculatorForm({ formState, onFormChange }: CalculatorFormProps) {
  const handleInputChange = (field: keyof FormState, value: string | number) => {
    onFormChange({
      ...formState,
      [field]: value
    });
  };

  const resetForm = () => {
    onFormChange({
      numEmployees: 5,
      placementsPerMonth: 0,
      avgFeePerPlacement: 0,
      currentSystem: 'Bullhorn',
      workDaysPerWeek: 5
    });
  };

  const bookDemo = () => {
    // TODO: Implement demo booking functionality
    alert('Demo booking functionality to be implemented');
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Calculator className="mr-3 text-primary" size={24} />
          Tell Us About Your Agency
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Number of Employees */}
        <div className="space-y-2">
          <Label htmlFor="numEmployees">Number of Employees</Label>
          <div className="relative">
            <Input
              id="numEmployees"
              type="number"
              value={formState.numEmployees}
              onChange={(e) => handleInputChange('numEmployees', parseInt(e.target.value) || 0)}
              min="1"
              className="pr-16"
            />
            <span className="absolute right-3 top-3 text-muted-foreground">people</span>
          </div>
        </div>

        {/* Placements Per Month */}
        <div className="space-y-2">
          <Label htmlFor="placementsPerMonth">Placements Per Month</Label>
          <Input
            id="placementsPerMonth"
            type="number"
            value={formState.placementsPerMonth || ''}
            onChange={(e) => handleInputChange('placementsPerMonth', parseFloat(e.target.value) || 0)}
            placeholder="e.g. 12"
            min="0"
            step="1"
          />
        </div>

        {/* Average Fee Per Placement */}
        <div className="space-y-2">
          <Label htmlFor="avgFeePerPlacement">Average Fee Per Placement</Label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-muted-foreground">$</span>
            <Input
              id="avgFeePerPlacement"
              type="number"
              value={formState.avgFeePerPlacement || ''}
              onChange={(e) => handleInputChange('avgFeePerPlacement', parseFloat(e.target.value) || 0)}
              placeholder="e.g. 8000"
              min="0"
              step="100"
              className="pl-8"
            />
          </div>
        </div>

        {/* Current System */}
        <div className="space-y-2">
          <Label htmlFor="currentSystem">Current System</Label>
          <Select
            value={formState.currentSystem}
            onValueChange={(value) => handleInputChange('currentSystem', value as FormState['currentSystem'])}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Bullhorn">Bullhorn</SelectItem>
              <SelectItem value="JobAdder">JobAdder</SelectItem>
              <SelectItem value="Spreadsheet">Spreadsheet</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Work Days Per Week */}
        <div className="space-y-2">
          <Label htmlFor="workDaysPerWeek">Work Days Per Week</Label>
          <Input
            id="workDaysPerWeek"
            type="number"
            value={formState.workDaysPerWeek}
            onChange={(e) => handleInputChange('workDaysPerWeek', parseInt(e.target.value) || 0)}
            min="1"
            max="7"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={resetForm}
            className="flex-1"
          >
            <RotateCcw className="mr-2" size={16} />
            Reset
          </Button>
          <Button
            type="button"
            onClick={bookDemo}
            className="flex-1"
          >
            <Calendar className="mr-2" size={16} />
            Book Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
