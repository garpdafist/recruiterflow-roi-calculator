import { FormState, ROIResults } from '../types';

export function calculateROI(formState: FormState): ROIResults {
  const { numEmployees, placementsPerMonth, avgFeePerPlacement, workDaysPerWeek } = formState;
  
  // Current Revenue: Monthly placements × average fee × 12 months
  const currentRevenue = (placementsPerMonth || 0) * (avgFeePerPlacement || 0) * 12;
  
  // Admin Hours Saved/week: 2 × number of days they work in a week × number of employees
  const adminHoursSaved = 2 * workDaysPerWeek * numEmployees;
  
  // Extra Placements: 25% × current placements (monthly)
  const extraPlacementsMonthly = 0.25 * (placementsPerMonth || 0);
  const extraPlacements = extraPlacementsMonthly / 4.33; // Convert to weekly for display
  
  // Incremental Revenue: Extra placements × average fee × 12 months
  const incrementalRevenue = extraPlacementsMonthly * (avgFeePerPlacement || 0) * 12;
  
  // Recruiterflow ROI: Incremental revenue ÷ annual cost (employees × $99/month × 12)
  const annualCost = numEmployees * 99 * 12; // $99 per employee per month
  const roiPercentage = annualCost > 0 ? (incrementalRevenue / annualCost) * 100 : 0;
  
  return {
    currentRevenue,
    adminHoursSaved,
    extraPlacements,
    incrementalRevenue,
    roiPercentage,
    annualCost
  };
}

export function getRecommendedAgents(formState: FormState): string[] {
  const { currentSystem, placementsPerMonth, numEmployees } = formState;
  const recommended: string[] = [];
  
  // If spreadsheet, highlight all agents
  if (currentSystem === 'Spreadsheet') {
    return ['lookup', 'alerts', 'notetaker', 'encoding', 'scorecard', 'summarization', 'email'];
  }
  
  // If placements < 10, emphasize alerts and lookup
  if (placementsPerMonth < 10) {
    recommended.push('alerts', 'lookup');
  }
  
  // If employees > 10, emphasize notetaker and encoding
  if (numEmployees > 10) {
    recommended.push('notetaker', 'encoding');
  }
  
  return recommended;
}
