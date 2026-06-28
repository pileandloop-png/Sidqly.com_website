export interface MoonPhaseResult {
  phaseLabel: string;
  ageDays: number;
  illumination: number; // 0 to 1
}

const PHASES = [
  'New Moon',
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent'
];

/**
 * Calculates a very approximate moon phase based on simple lunar cycle logic.
 * Do not use this for actual religious sighting rulings.
 */
export const getApproximateMoonPhase = (date: Date = new Date()): MoonPhaseResult => {
  // Known new moon date (approximate epoch for calculations)
  // Dec 12, 2023 was approximately a new moon.
  const knownNewMoon = new Date(Date.UTC(2023, 11, 12, 23, 32, 0));

  const lunarCycle = 29.53058867; // average length of a synodic month in days
  const msPerDay = 1000 * 60 * 60 * 24;

  const diffMs = date.getTime() - knownNewMoon.getTime();
  const diffDays = diffMs / msPerDay;

  // Calculate age of current cycle
  let age = diffDays % lunarCycle;
  if (age < 0) {
      age += lunarCycle;
  }

  // Determine illumination
  let illumination = 0;
  if (age <= lunarCycle / 2) {
      illumination = age / (lunarCycle / 2);
  } else {
      illumination = (lunarCycle - age) / (lunarCycle / 2);
  }

  // Determine phase label
  let phaseIndex = 0;

  // Split the cycle into 8 segments
  const segment = lunarCycle / 8;
  const offset = segment / 2;

  if (age < offset || age > lunarCycle - offset) {
      phaseIndex = 0; // New Moon
  } else if (age < segment + offset) {
      phaseIndex = 1; // Waxing Crescent
  } else if (age < 2 * segment + offset) {
      phaseIndex = 2; // First Quarter
  } else if (age < 3 * segment + offset) {
      phaseIndex = 3; // Waxing Gibbous
  } else if (age < 4 * segment + offset) {
      phaseIndex = 4; // Full Moon
  } else if (age < 5 * segment + offset) {
      phaseIndex = 5; // Waning Gibbous
  } else if (age < 6 * segment + offset) {
      phaseIndex = 6; // Last Quarter
  } else {
      phaseIndex = 7; // Waning Crescent
  }

  return {
    phaseLabel: PHASES[phaseIndex],
    ageDays: Math.round(age * 10) / 10,
    illumination: Math.round(illumination * 100) / 100
  };
};
