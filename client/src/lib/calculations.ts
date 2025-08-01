import { FormState, ROIResults } from '../types';

export function calculateROI(formState: FormState): ROIResults {
  const { numEmployees, placementsPerMonth, avgFeePerPlacement, workDaysPerWeek } = formState;
  
  // Current Revenue: Monthly placements × average fee × 12 months
  const currentRevenue = (placementsPerMonth || 0) * (avgFeePerPlacement || 0) * 12;
  
  // Real recruiter calculation based on actual time savings:
  // Time saving per month per recruiter (from your breakdown):
  // - Resume screening: 4hrs/week × 4 weeks = 16hrs/month
  // - Scheduling: 4hrs/week × 4 weeks = 16hrs/month  
  // - Tagging/Manual Reports: 8hrs/week × 4 weeks = 32hrs/month
  // - TAT from KMC: 10hrs/week × 4 weeks = 40hrs/month
  // Total: 104 hours per month per recruiter
  
  const resumeScreeningPerMonth = 16; // 4hrs/week × 4 weeks
  const schedulingPerMonth = 16; // 4hrs/week × 4 weeks
  const taggingPerMonth = 32; // 8hrs/week × 4 weeks
  const kmcPerMonth = 40; // 10hrs/week × 4 weeks
  const timeSavingPerMonth = resumeScreeningPerMonth + schedulingPerMonth + taggingPerMonth + kmcPerMonth; // 104 hours
  const totalTimeSavingPerMonth = timeSavingPerMonth * numEmployees; // Total hours saved
  
  // Convert to working days (assuming 8 hours per day)
  const workingDaysSavedPerMonth = totalTimeSavingPerMonth / 8;
  const adminHoursSaved = totalTimeSavingPerMonth; // Total hours saved per month
  
  // Placement cycle improvement: 21 days instead of 30 days
  // This means 90 days cycle: 3 placements becomes ~4.5 placements
  // Improvement factor: 4.5/3 = 1.5 (50% more placements)
  const placementImprovementFactor = 1.5;
  
  // Current placements in 90 days
  const currentPlacementsIn90Days = (placementsPerMonth || 0) * 3;
  
  // Improved placements in 90 days
  const improvedPlacementsIn90Days = currentPlacementsIn90Days * placementImprovementFactor;
  
  // Extra placements per month
  const extraPlacementsMonthly = (improvedPlacementsIn90Days - currentPlacementsIn90Days) / 3;
  const extraPlacements = extraPlacementsMonthly;
  
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
