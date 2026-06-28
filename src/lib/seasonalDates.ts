import { getIslamicDateInfo } from './islamicCalendar';

/**
 * Seasonal dates and countdown helpers.
 * Note: These are rough mathematical approximations based on the Hijri calendar logic.
 * They should NEVER be used as official dates.
 */

export interface SeasonalEventEstimate {
  name: string;
  estimatedGregorianDate: Date;
  daysRemaining: number;
}

// Approximate days in a Hijri year

export const getNextRamadanEstimate = (currentDate: Date = new Date()): SeasonalEventEstimate => {
  const islamicDate = getIslamicDateInfo(currentDate);
  const currentHijriMonth = islamicDate?.hijriMonthIndex || 0;
  const currentHijriDay = islamicDate?.hijriDay || 1;

  // Ramadan is month index 8
  let monthsUntilRamadan = 8 - currentHijriMonth;

  if (monthsUntilRamadan < 0 || (monthsUntilRamadan === 0 && currentHijriDay > 15)) {
    // It's past mid-Ramadan, aim for next year
    monthsUntilRamadan += 12;
  }

  // Rough estimate: 29.5 days per month
  const estimatedDaysRemaining = Math.round(monthsUntilRamadan * 29.5) - currentHijriDay + 1;

  const estimatedDate = new Date(currentDate.getTime() + (estimatedDaysRemaining * 24 * 60 * 60 * 1000));

  return {
    name: 'Ramadan Planning Window',
    estimatedGregorianDate: estimatedDate,
    daysRemaining: estimatedDaysRemaining > 0 ? estimatedDaysRemaining : 0
  };
};

export const getNextHajjEstimate = (currentDate: Date = new Date()): SeasonalEventEstimate => {
  const islamicDate = getIslamicDateInfo(currentDate);
  const currentHijriMonth = islamicDate?.hijriMonthIndex || 0;
  const currentHijriDay = islamicDate?.hijriDay || 1;

  // Dhul Hijjah is month index 11
  let monthsUntilHajj = 11 - currentHijriMonth;

  if (monthsUntilHajj < 0 || (monthsUntilHajj === 0 && currentHijriDay > 15)) {
     // Past mid-Dhul Hijjah, aim for next year
     monthsUntilHajj += 12;
  }

  const estimatedDaysRemaining = Math.round(monthsUntilHajj * 29.5) - currentHijriDay + 1;

  const estimatedDate = new Date(currentDate.getTime() + (estimatedDaysRemaining * 24 * 60 * 60 * 1000));

  return {
    name: 'Dhul Hijjah / Hajj Planning Window',
    estimatedGregorianDate: estimatedDate,
    daysRemaining: estimatedDaysRemaining > 0 ? estimatedDaysRemaining : 0
  };
};
