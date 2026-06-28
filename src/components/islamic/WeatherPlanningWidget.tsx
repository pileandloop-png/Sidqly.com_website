import React, { useState } from 'react';
import { getWeatherGuidance, type WeatherPlanningGuidance } from '../../lib/weatherPlanning';
import { CloudRain, Sun, Wind, Thermometer, MapPin, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeatherPlanningWidget: React.FC = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [guidance, setGuidance] = useState<WeatherPlanningGuidance | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    const result = await getWeatherGuidance(city);
    setGuidance(result);
    setLoading(false);
  };

  const getConditionIcon = (condition?: string) => {
    if (!condition) return <Thermometer className="text-gray-400 w-8 h-8" />;
    switch (condition) {
      case 'Rain': return <CloudRain className="text-blue-500 w-8 h-8" />;
      case 'Hot': return <Sun className="text-yellow-500 w-8 h-8" />;
      case 'Cold': return <Thermometer className="text-blue-300 w-8 h-8" />;
      case 'Windy/Dusty': return <Wind className="text-gray-500 w-8 h-8" />;
      default: return <Sun className="text-yellow-500 w-8 h-8" />;
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
         <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
            <CloudRain size={24} />
         </div>
         <div>
            <h2 className="text-2xl font-bold text-sidqly-navy">Weather-Aware Distribution</h2>
            <p className="text-sm text-gray-500">Plan safe operations for volunteers and vulnerable recipients.</p>
         </div>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 mb-8">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city for operational guidance (e.g. London, Dubai)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-sidqly-green-emerald focus:border-transparent outline-none transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !city.trim()}
          className="bg-sidqly-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-sidqly-green-deep transition-all disabled:opacity-50 whitespace-nowrap"
        >
          {loading ? 'Checking...' : 'Get Guidance'}
        </button>
      </form>

      {guidance && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
           <div className="flex flex-col sm:flex-row gap-6 mb-6">
              {/* Current Status */}
              <div className="bg-sidqly-ivory p-6 rounded-2xl flex-shrink-0 min-w-[200px] flex flex-col items-center justify-center text-center border border-gray-100">
                 {getConditionIcon(guidance.condition)}
                 <div className="text-3xl font-extrabold text-sidqly-navy mt-4 mb-1">
                    {guidance.temperatureC}°C <span className="text-lg text-gray-400 font-normal">/ {guidance.temperatureF}°F</span>
                 </div>
                 <div className="text-sm font-bold text-gray-600 uppercase tracking-widest">{guidance.condition}</div>
              </div>

              {/* Advice List */}
              <div className="flex-1 space-y-4">
                 <h4 className="font-bold text-sidqly-navy">Operational Recommendations</h4>
                 <ul className="space-y-3">
                   {guidance.advice.map((item, index) => (
                     <li key={index} className="flex items-start gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <AlertCircle className="w-4 h-4 text-sidqly-green-emerald shrink-0 mt-0.5" />
                        <span>{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
           </div>

           <div className="bg-sidqly-green-deep/5 p-4 rounded-xl border border-sidqly-green-deep/10">
              <p className="text-sm text-sidqly-navy font-bold mb-3">Related Operational Modules</p>
              <div className="flex flex-wrap gap-2">
                 <Link to="/modules/ramadan-donation-management" className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 hover:border-sidqly-green-emerald hover:text-sidqly-green-deep transition-colors">Ramadan Meals</Link>
                 <Link to="/modules/vendor-fulfillment-platform" className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 hover:border-sidqly-green-emerald hover:text-sidqly-green-deep transition-colors">Vendor Fulfillment</Link>
                 <Link to="/modules/proof-trust-engine" className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 hover:border-sidqly-green-emerald hover:text-sidqly-green-deep transition-colors">Proof Trust Engine</Link>
              </div>
           </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-50 text-[10px] text-gray-400">
         Note: Location data entered here is used solely to fetch weather planning advice and is not tracked or stored by Sidqly analytics.
      </div>
    </div>
  );
};

export default WeatherPlanningWidget;
