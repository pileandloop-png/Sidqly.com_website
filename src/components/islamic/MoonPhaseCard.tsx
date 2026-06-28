import React, { useState, useEffect } from 'react';
import { getApproximateMoonPhase, type MoonPhaseResult } from '../../lib/moonPhase';
import { Moon, AlertCircle } from 'lucide-react';

const MoonPhaseCard: React.FC = () => {
  const [phase, setPhase] = useState<MoonPhaseResult | null>(null);

  useEffect(() => {
    setPhase(getApproximateMoonPhase());
    // Refresh daily
    const timer = setInterval(() => {
        setPhase(getApproximateMoonPhase());
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
  }, []);

  if (!phase) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-sidqly-navy p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
      <div className="absolute -top-10 -right-10 opacity-10">
        <Moon size={150} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Moon className="text-sidqly-green-soft w-6 h-6" />
          <h3 className="text-lg font-bold">Lunar Planning</h3>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Current Phase Estimate</p>
          <p className="text-3xl font-extrabold text-white mb-2">{phase.phaseLabel}</p>
          <div className="flex items-center gap-4 text-sm text-gray-300">
             <span>Age: ~{phase.ageDays} days</span>
             <span className="w-1 h-1 rounded-full bg-gray-500"></span>
             <span>Illum: {Math.round(phase.illumination * 100)}%</span>
          </div>
        </div>

        <div className="bg-white/10 p-3 rounded-lg border border-white/10 text-xs text-gray-300 mb-4">
           <strong>Campaign Reminder:</strong> Nearing the middle of the lunar month (Full Moon) or the end (Waning Crescent) signals key times to finalize operational planning for the upcoming Islamic month's giving workflows.
        </div>

        <div className="flex items-start gap-2 text-[10px] text-gray-400 opacity-80">
          <AlertCircle className="w-3 h-3 shrink-0 mt-0.5" />
          <p>Approximate lunar phase for planning only. Do not use for official moon sighting or religious rulings. Confirm with local moon-sighting committees.</p>
        </div>
      </div>
    </div>
  );
};

export default MoonPhaseCard;
