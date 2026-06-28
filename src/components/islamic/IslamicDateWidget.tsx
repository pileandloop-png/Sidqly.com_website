import React, { useState, useEffect } from 'react';
import { getIslamicDateInfo, type IslamicDateInfo } from '../../lib/islamicCalendar';
import { Calendar } from 'lucide-react';

const IslamicDateWidget: React.FC = () => {
  const [islamicDate, setIslamicDate] = useState<IslamicDateInfo | null>(null);

  useEffect(() => {
    // Update immediately, then set up an interval to update daily if left open
    setIslamicDate(getIslamicDateInfo());
    const timer = setInterval(() => {
        setIslamicDate(getIslamicDateInfo());
    }, 1000 * 60 * 60); // Check every hour
    return () => clearInterval(timer);
  }, []);

  if (!islamicDate) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-32">
        <p className="text-gray-500 text-sm">Islamic date estimate is temporarily unavailable.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-sidqly-green-deep/10 p-2 rounded-lg">
          <Calendar className="text-sidqly-green-deep w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-sidqly-navy">Today's Date</h3>
      </div>

      <div className="mb-4 pb-4 border-b border-gray-50">
        <div className="text-3xl font-extrabold text-sidqly-green-deep mb-1">
          {islamicDate.hijriDay} {islamicDate.hijriMonthName} {islamicDate.hijriYear} <span className="text-sm text-gray-400 font-normal">AH</span>
        </div>
        <div className="text-sm text-gray-500 font-medium">
          {islamicDate.weekday}, {islamicDate.gregorianDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric'})}
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-gray-400 bg-sidqly-ivory p-3 rounded-lg">
        <span className="font-bold text-sidqly-green-emerald shrink-0">Note:</span>
        <p>Islamic dates may vary by country, moon sighting, local authority, calculation method, and official announcements. Dates shown here are planning estimates only.</p>
      </div>
    </div>
  );
};

export default IslamicDateWidget;
