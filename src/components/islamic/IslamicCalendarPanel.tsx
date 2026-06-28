import React from 'react';
import { getIslamicDateInfo } from '../../lib/islamicCalendar';
import { CalendarDays, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const IslamicCalendarPanel: React.FC = () => {
  const currentGregorian = new Date();
  const currentIslamic = getIslamicDateInfo(currentGregorian);

  // Generate next 12 Gregorian months with rough Hijri equivalents
  const upcomingMonths = Array.from({ length: 12 }).map((_, i) => {
    const d = new Date();
    d.setMonth(d.getMonth() + i);
    d.setDate(15); // Use the 15th of the month for a solid estimate of the overlapping Hijri month
    const iDate = getIslamicDateInfo(d);
    return {
      gMonth: d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      iMonth: iDate?.hijriMonthName || 'Unknown',
      iYear: iDate?.hijriYear || 'Unknown'
    };
  });

  return (
    <div className="space-y-8">
      {/* Current Overview */}
      <div className="bg-sidqly-navy rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <CalendarDays size={120} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-2">Islamic Calendar Planning</h2>
          <p className="text-gray-300 mb-8">Plan your giving workflows, campaigns, and distribution operations.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
               <p className="text-sm text-sidqly-green-soft font-bold mb-1">Current Gregorian Month</p>
               <p className="text-xl font-bold">{currentGregorian.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
               <p className="text-sm text-sidqly-green-soft font-bold mb-1">Current Islamic Month</p>
               <p className="text-xl font-bold">{currentIslamic?.hijriMonthName} {currentIslamic?.hijriYear}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm text-yellow-800">
        <AlertCircle size={20} className="shrink-0 mt-0.5" />
        <p>
          <strong>Disclaimer:</strong> Sidqly provides operational planning tools for Islamic giving workflows. Islamic dates may vary by country, moon sighting, local authority, calculation method, and official announcements. Dates shown here are planning estimates only.
        </p>
      </div>

      {/* Planning Periods */}
      <div>
        <h3 className="text-2xl font-bold text-sidqly-navy mb-6">Key Planning Periods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Prepare Ramadan ration and Iftar campaigns', link: '/ramadan-planner' },
            { title: 'Prepare Sadqa Fitr workflows', link: '/sadqa-zakat-planner' },
            { title: 'Prepare Eid ul Adha and Qurbani operations', link: '/eid-qurbani-planner' },
            { title: 'Prepare Hajj-linked giving and Dhul Hijjah reports', link: '/hajj-countdown' },
            { title: 'Zakat campaign planning', link: '/sadqa-zakat-planner' },
            { title: 'Aqiqa/Aqiqah workflow planning', link: '/modules/sadaqah' }
          ].map((item, i) => (
             <Link key={i} to={item.link} className="block bg-white p-6 rounded-2xl border border-gray-100 hover:border-sidqly-green-emerald hover:shadow-md transition-all group">
                <h4 className="font-bold text-sidqly-navy group-hover:text-sidqly-green-deep">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-2">View operational guides & tools →</p>
             </Link>
          ))}
        </div>
      </div>

      {/* Upcoming Year Estimate */}
      <div>
        <h3 className="text-2xl font-bold text-sidqly-navy mb-6">12-Month Estimate</h3>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-sidqly-ivory border-b border-gray-100 text-gray-600">
              <tr>
                <th className="p-4 font-bold">Gregorian Month</th>
                <th className="p-4 font-bold">Estimated Hijri Overlap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-gray-600 font-medium">
              {upcomingMonths.map((m, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-4">{m.gMonth}</td>
                  <td className="p-4 text-sidqly-green-deep">{m.iMonth} {m.iYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default IslamicCalendarPanel;
