import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const PrayerTimePlanningCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
        <Clock size={100} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="text-sidqly-green-deep w-6 h-6" />
          <h3 className="text-lg font-bold text-sidqly-navy">Prayer Time Planning</h3>
        </div>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Organizations often plan Iftar, Suhoor, and general distributions around local prayer times. Sidqly helps you manage the operational workflows—task assignment, proof approval, and reporting—that happen before and after these critical windows.
        </p>

        <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl mb-4">
           <p className="text-sm font-bold text-sidqly-navy mb-2">How Sidqly Supports Timing:</p>
           <ul className="text-sm text-gray-600 space-y-2">
             <li>• Schedule vendor fulfillment deadlines before Asr or Maghrib.</li>
             <li>• Assign volunteer shifts based on local community timing.</li>
             <li>• Timestamp proof uploads automatically.</li>
           </ul>
        </div>

        <div className="flex items-start gap-2 text-[10px] text-gray-500">
           <AlertCircle className="w-3 h-3 shrink-0 mt-0.5 text-gray-400" />
           <p>Note: Official prayer times should be checked with local mosques or trusted regional calendars. Sidqly focuses on the operational readiness around those times.</p>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimePlanningCard;
