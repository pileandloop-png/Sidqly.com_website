import React, { useState } from 'react';
import { HeartHandshake, CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SadqaZakatPlanner: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const lists = [
    {
      title: "Sadqa & Sadaqah",
      items: [
        { id: 's1', text: 'Set up general Sadqa campaign' },
        { id: 's2', text: 'Configure Sadqa Fitr limits' },
        { id: 's3', text: 'Assign volunteers for distribution' },
        { id: 's4', text: 'Approve field proof before reports' }
      ]
    },
    {
      title: "Zakat Management",
      items: [
        { id: 'z1', text: 'Enable Zakat fund separation logic' },
        { id: 'z2', text: 'Review incoming charity requests' },
        { id: 'z3', text: 'Document eligibility decisions' },
        { id: 'z4', text: 'Generate Zakat-specific impact reports' }
      ]
    }
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-sidqly-green-deep/10 p-3 rounded-xl">
          <HeartHandshake className="text-sidqly-green-deep w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-sidqly-navy">Sadqa & Zakat Planner</h2>
          <p className="text-sm text-gray-500">Ensure operational compliance and fund separation.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {lists.map((list, i) => (
          <div key={i} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-sidqly-green-deep mb-4">{list.title}</h3>
            <ul className="space-y-3">
              {list.items.map(item => (
                <li
                  key={item.id}
                  className="flex items-start gap-2 cursor-pointer group"
                  onClick={() => toggleCheck(item.id)}
                >
                  <div className="mt-0.5 shrink-0">
                    {checkedItems[item.id] ? (
                      <CheckCircle2 className="text-sidqly-green-emerald w-5 h-5" />
                    ) : (
                      <Circle className="text-gray-300 group-hover:text-sidqly-green-soft w-5 h-5 transition-colors" />
                    )}
                  </div>
                  <span className={`text-sm select-none transition-colors ${checkedItems[item.id] ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-sidqly-navy'}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
         <Link to="/modules/zakat-fund-separation" className="text-sm font-bold bg-sidqly-ivory text-sidqly-navy px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Zakat Module
         </Link>
         <Link to="/modules/sadaqah" className="text-sm font-bold bg-sidqly-ivory text-sidqly-navy px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Sadaqah Module
         </Link>
      </div>

      <div className="flex items-start gap-2 text-xs text-yellow-800 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
         <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
         <p><strong>Disclaimer:</strong> Organizations should confirm Sadqa Fitr amounts, Zakat rules, and eligibility decisions with authorized scholars, local committees, or official guidance. Sidqly handles operations, not religious rulings.</p>
      </div>
    </div>
  );
};

export default SadqaZakatPlanner;
