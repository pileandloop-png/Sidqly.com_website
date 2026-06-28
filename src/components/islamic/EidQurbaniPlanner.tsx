import React, { useState } from 'react';
import { ClipboardList, CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EidQurbaniPlanner: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const lists = [
    {
      title: "Pre-Eid Preparation",
      items: [
        { id: 'q1', text: 'Set up Qurbani campaign module' },
        { id: 'q2', text: 'Define share pricing and availability' },
        { id: 'q3', text: 'Assign vendor fulfillment profiles' }
      ]
    },
    {
      title: "During Eid / Qurbani",
      items: [
        { id: 'q4', text: 'Track live share completion' },
        { id: 'q5', text: 'Review manual payments' },
        { id: 'q6', text: 'Approve vendor slaughter proof' }
      ]
    },
    {
      title: "Post-Eid Operations",
      items: [
        { id: 'q7', text: 'Generate certificates and receipts' },
        { id: 'q8', text: 'Send donor-safe updates via Trust Engine' },
        { id: 'q9', text: 'Compile board-ready impact report' }
      ]
    }
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-sidqly-green-deep/10 p-3 rounded-xl">
          <ClipboardList className="text-sidqly-green-deep w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-sidqly-navy">Eid & Qurbani Planner</h2>
          <p className="text-sm text-gray-500">Interactive operational checklist for Udhiya workflows.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {lists.map((list, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="font-bold text-sidqly-navy mb-4 border-b border-gray-200 pb-2">{list.title}</h3>
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

      <div className="flex justify-between items-center bg-sidqly-ivory p-4 rounded-xl">
         <p className="text-sm font-bold text-sidqly-navy">Automate these steps with Sidqly.</p>
         <Link to="/modules/qurbani-management-software" className="text-sm font-bold text-white bg-sidqly-green-deep px-4 py-2 rounded-lg hover:bg-sidqly-navy transition-colors">
            View Module
         </Link>
      </div>
    </div>
  );
};

export default EidQurbaniPlanner;
