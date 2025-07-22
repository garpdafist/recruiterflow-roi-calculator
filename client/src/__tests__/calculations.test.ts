import { calculateROI } from '../lib/calculations';
import { FormState } from '../types';

describe('calculateROI', () => {
  const defaultFormState: FormState = {
    numEmployees: 5,
    placementsPerMonth: 12,
    avgFeePerPlacement: 8000,
    currentSystem: 'Bullhorn',
    workDaysPerWeek: 5
  };

  it('should return 0 ROI if hours saved is 0 or negative', () => {
    const formState: FormState = {
      ...defaultFormState,
      numEmployees: 0
    };

    const result = calculateROI(formState);
    expect(result.roiPercentage).toBe(0);
    expect(result.adminHoursSaved).toBe(0);
    expect(result.extraPlacements).toBe(0);
    expect(result.incrementalRevenue).toBe(0);
  });

  it('should calculate correct ROI for valid inputs', () => {
    const result = calculateROI(defaultFormState);
    
    // Current Revenue: Monthly placements (12) × average fee (8000) × 12 months
    expect(result.currentRevenue).toBe(960000); // 12 * 8000 * 12
    
    // Admin Hours Saved: 2 × work days per week (5) × employees (5)
    expect(result.adminHoursSaved).toBe(50); // 2 * 5 * 5
    
    // Extra Placements: 25% × current placements (12) = 3 monthly, converted to weekly
    const extraPlacementsMonthly = 0.25 * 12; // 3
    const extraPlacementsWeekly = extraPlacementsMonthly / 4.33; // ~0.69
    expect(result.extraPlacements).toBeCloseTo(extraPlacementsWeekly, 1);
    
    // Incremental Revenue: Extra placements monthly (3) × average fee (8000) × 12 months
    expect(result.incrementalRevenue).toBe(288000); // 3 * 8000 * 12
    
    const expectedROI = (288000 / (5 * 99 * 12)) * 100; // ~48.5%
    expect(result.roiPercentage).toBeCloseTo(expectedROI, 1);
    
    // Annual Cost: 5 employees × $99/month × 12 months
    expect(result.annualCost).toBe(5940); // 5 * 99 * 12
  });

  it('should handle zero placements per month', () => {
    const formState: FormState = {
      ...defaultFormState,
      placementsPerMonth: 0
    };

    const result = calculateROI(formState);
    expect(result.currentRevenue).toBe(0);
    expect(result.incrementalRevenue).toBe(0);
  });

  it('should handle zero average fee per placement', () => {
    const formState: FormState = {
      ...defaultFormState,
      avgFeePerPlacement: 0
    };

    const result = calculateROI(formState);
    expect(result.currentRevenue).toBe(0);
    expect(result.incrementalRevenue).toBe(0);
  });
});
