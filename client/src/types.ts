export interface FormState {
  numEmployees: number;
  placementsPerMonth: number;
  avgFeePerPlacement: number;
  currentSystem: 'Bullhorn' | 'JobAdder' | 'Spreadsheet' | 'Other';
  workDaysPerWeek: number;
}

export interface ROIResults {
  currentRevenue: number;
  adminHoursSaved: number;
  extraPlacements: number;
  incrementalRevenue: number;
  roiPercentage: number;
  annualCost: number;
}

export interface AIAgent {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
