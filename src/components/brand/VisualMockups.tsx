import React from 'react';
import { CheckCircle2, Clock, MapPin, Camera } from 'lucide-react';

export const DonorTimelinePreview: React.FC = () => (
  <div className="bg-white border border-sidqly-mutedBorder rounded-xl overflow-hidden shadow-sm max-w-sm">
    <div className="bg-sidqly-deepGreen p-4 text-white font-bold text-sm">Case: ZKT-2026-014</div>
    <div className="p-4 space-y-4">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-sidqly-softGreen/20 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-sidqly-emeraldGreen" />
        </div>
        <div>
          <div className="text-xs font-bold">Payment Verified</div>
          <div className="text-[10px] text-sidqly-slateText">Finance reviewed manual transfer</div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-sidqly-softGreen/20 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-sidqly-emeraldGreen" />
        </div>
        <div>
          <div className="text-xs font-bold">Task Assigned</div>
          <div className="text-[10px] text-sidqly-slateText">Vendor: Premium Foods Ltd</div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-sidqly-goldAccent/20 flex items-center justify-center shrink-0">
          <Clock className="w-4 h-4 text-sidqly-goldAccent" />
        </div>
        <div>
          <div className="text-xs font-bold">In Progress</div>
          <div className="text-[10px] text-sidqly-slateText">Proof pending review</div>
        </div>
      </div>
    </div>
  </div>
);

export const ProofReviewQueuePreview: React.FC = () => (
  <div className="bg-white border border-sidqly-mutedBorder rounded-xl overflow-hidden shadow-sm max-w-sm">
    <div className="p-3 border-b border-sidqly-mutedBorder flex justify-between items-center bg-sidqly-warmIvory">
      <span className="text-xs font-bold uppercase tracking-wider text-sidqly-slateText">Proof Review Queue</span>
      <span className="bg-sidqly-goldAccent text-sidqly-deepNavy text-[10px] px-2 py-0.5 rounded-full font-bold">4 Pending</span>
    </div>
    <div className="divide-y divide-sidqly-mutedBorder">
      {[1, 2].map(i => (
        <div key={i} className="p-3 flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Camera className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold">Ration Delivery #44{i}</div>
            <div className="text-[10px] text-sidqly-slateText">Lahore, PK • 2 mins ago</div>
          </div>
          <button className="text-[10px] bg-sidqly-deepGreen text-white px-2 py-1 rounded">Review</button>
        </div>
      ))}
    </div>
  </div>
);

export const PaymentReviewInboxPreview: React.FC = () => (
  <div className="bg-white border border-sidqly-mutedBorder rounded-xl overflow-hidden shadow-sm max-w-sm">
    <div className="p-3 border-b border-sidqly-mutedBorder bg-sidqly-deepNavy text-white">
      <span className="text-xs font-bold">Finance Verification Inbox</span>
    </div>
    <div className="p-3 space-y-3">
      <div className="bg-sidqly-warmIvory p-2 rounded border border-sidqly-mutedBorder">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] font-bold">Manual Transfer #PK992</span>
          <span className="text-[10px] text-sidqly-emeraldGreen font-bold">Rs. 25,000</span>
        </div>
        <div className="text-[9px] text-sidqly-slateText mb-2 italic">Screenshot: bank_transfer_proof.jpg</div>
        <div className="flex gap-2">
          <button className="flex-1 text-[9px] bg-sidqly-emeraldGreen text-white py-1 rounded">Verify</button>
          <button className="flex-1 text-[9px] border border-sidqly-mutedBorder py-1 rounded">Reject</button>
        </div>
      </div>
    </div>
  </div>
);

export const VendorTaskCardPreview: React.FC = () => (
  <div className="bg-white border border-sidqly-mutedBorder rounded-xl overflow-hidden shadow-sm max-w-sm">
    <div className="p-4">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-sidqly-softGreen/20 text-sidqly-deepGreen text-[10px] px-2 py-1 rounded-full font-bold">Zakat Task</div>
        <div className="flex items-center gap-1 text-[10px] text-sidqly-slateText">
          <MapPin className="w-3 h-3" /> Lahore, PK
        </div>
      </div>
      <div className="text-sm font-bold mb-1">Monthly Ration Pack x 5</div>
      <div className="text-[10px] text-sidqly-slateText mb-4 italic">Instruction: Deliver with dignity. No facial photos.</div>
      <button className="w-full bg-sidqly-deepGreen text-white py-2 rounded-lg text-xs font-bold">Upload Delivery Proof</button>
    </div>
  </div>
);

export const CorporateImpactWalletPreview: React.FC = () => (
  <div className="bg-sidqly-deepNavy text-white rounded-2xl p-6 max-w-sm">
    <div className="text-xs text-sidqly-goldAccent font-bold uppercase tracking-widest mb-2">Impact Wallet</div>
    <div className="text-3xl font-bold mb-6">Rs. 1,250,000</div>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
        <div className="text-[10px] text-gray-400">Allocated</div>
        <div className="text-sm font-bold">Rs. 950k</div>
      </div>
      <div className="bg-white/5 p-3 rounded-xl border border-white/10">
        <div className="text-[10px] text-gray-400">Cases</div>
        <div className="text-sm font-bold">142</div>
      </div>
    </div>
  </div>
);

export const ReceiptCertificatePreview: React.FC = () => (
  <div className="bg-white border-2 border-sidqly-mutedBorder rounded shadow-lg max-w-sm p-6 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-sidqly-softGreen/10 rotate-45 translate-x-12 -translate-y-12"></div>
    <div className="flex justify-between items-start mb-8">
      <div className="h-6 w-16 bg-sidqly-deepGreen/10 rounded"></div>
      <div className="text-[8px] text-right text-sidqly-slateText uppercase font-bold tracking-widest">Official Receipt</div>
    </div>
    <div className="space-y-3 mb-8">
      <div className="h-2 w-3/4 bg-sidqly-mutedBorder rounded"></div>
      <div className="h-2 w-1/2 bg-sidqly-mutedBorder rounded"></div>
      <div className="h-8 w-full border-b-2 border-dashed border-sidqly-mutedBorder"></div>
    </div>
    <div className="flex justify-between items-end">
      <div className="space-y-1">
        <div className="h-2 w-16 bg-sidqly-mutedBorder rounded"></div>
        <div className="h-4 w-24 bg-sidqly-deepGreen rounded"></div>
      </div>
      <div className="h-10 w-10 border-2 border-sidqly-softGreen rounded flex items-center justify-center">
        <CheckCircle2 className="w-6 h-6 text-sidqly-emeraldGreen" />
      </div>
    </div>
  </div>
);

export const BoardPackPreview: React.FC = () => (
  <div className="bg-white border border-sidqly-mutedBorder rounded-xl shadow-md max-w-sm p-4">
    <div className="flex items-center gap-2 mb-4 border-b border-sidqly-mutedBorder pb-2">
      <div className="w-3 h-3 bg-sidqly-emeraldGreen rounded-full"></div>
      <span className="text-[10px] font-bold text-sidqly-deepNavy">Operational Audit Report Q1 2026</span>
    </div>
    <div className="space-y-3">
      <div className="flex justify-between text-[9px]">
        <span>Verified Operations</span>
        <span className="font-bold">100%</span>
      </div>
      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div className="bg-sidqly-emeraldGreen h-full w-full"></div>
      </div>
      <div className="flex justify-between text-[9px]">
        <span>Dignity Compliance</span>
        <span className="font-bold">99.4%</span>
      </div>
      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div className="bg-sidqly-goldAccent h-full w-[94%]"></div>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-sidqly-mutedBorder">
       <div className="text-[10px] italic text-sidqly-slateText">"Summary: All Zakat disbursements verified with proof."</div>
    </div>
  </div>
);

export const QRCodeVerificationMockup: React.FC = () => (
  <div className="bg-sidqly-softGreen/10 border-2 border-sidqly-emeraldGreen/30 rounded-2xl p-6 flex flex-col items-center max-w-[240px]">
    <div className="w-32 h-32 bg-white rounded-xl border border-sidqly-mutedBorder flex items-center justify-center mb-4">
       <div className="grid grid-cols-4 gap-1 p-2">
         {Array.from({length: 16}).map((_, i) => (
           <div key={i} className={`w-5 h-5 ${Math.random() > 0.5 ? 'bg-sidqly-deepNavy' : 'bg-transparent'}`}></div>
         ))}
       </div>
    </div>
    <div className="text-[10px] font-bold text-sidqly-deepGreen uppercase tracking-widest text-center">Scan to Verify Proof</div>
  </div>
);

export const MobileAppPreview: React.FC = () => (
  <div className="bg-sidqly-deepNavy w-[220px] h-[400px] rounded-[32px] border-[6px] border-sidqly-deepNavy shadow-2xl relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-sidqly-deepNavy rounded-b-xl z-20"></div>
    <div className="bg-white h-full p-4 pt-8">
      <div className="flex justify-between items-center mb-6">
         <div className="w-6 h-6 bg-sidqly-softGreen/20 rounded"></div>
         <div className="w-12 h-2 bg-sidqly-mutedBorder rounded"></div>
      </div>
      <div className="space-y-4">
        <div className="text-xs font-bold">Assigned Tasks</div>
        {[1,2,3].map(i => (
          <div key={i} className="p-2 border border-sidqly-mutedBorder rounded-lg">
             <div className="text-[9px] font-bold mb-1">Ration Delivery #{i}42</div>
             <div className="flex justify-between items-center">
               <span className="text-[8px] text-sidqly-slateText italic">Pending Proof</span>
               <span className="text-[8px] text-sidqly-emeraldGreen font-bold">Start</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const DashboardPreviewCard: React.FC = () => (
  <div className="bg-white border border-sidqly-mutedBorder rounded-xl shadow-xl max-w-md overflow-hidden">
    <div className="bg-sidqly-deepNavy p-3 flex justify-between items-center">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
      </div>
      <div className="text-[10px] text-white/50">Sidqly Dashboard</div>
    </div>
    <div className="p-4 grid grid-cols-2 gap-4">
       <div className="col-span-2 bg-sidqly-warmIvory p-3 rounded-lg border border-sidqly-mutedBorder">
         <div className="text-[10px] text-sidqly-slateText mb-1">Total Impact Verified</div>
         <div className="text-xl font-bold text-sidqly-deepGreen">PKR 14.2M</div>
       </div>
       <div className="bg-white p-2 rounded-lg border border-sidqly-mutedBorder">
         <div className="text-[8px] text-sidqly-slateText uppercase">Proofs Reviewed</div>
         <div className="text-sm font-bold">1,242</div>
       </div>
       <div className="bg-white p-2 rounded-lg border border-sidqly-mutedBorder">
         <div className="text-[8px] text-sidqly-slateText uppercase">Trust Score</div>
         <div className="text-sm font-bold">99.8%</div>
       </div>
    </div>
  </div>
);

export const ImpactReportPreview: React.FC = () => (
  <div className="bg-white border border-sidqly-mutedBorder rounded-xl shadow-sm p-4 max-w-sm">
    <div className="text-xs font-bold text-sidqly-deepGreen mb-4 flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4" /> Impact Certificate
    </div>
    <div className="space-y-3">
      <div className="h-2 w-full bg-sidqly-warmIvory rounded"></div>
      <div className="h-2 w-3/4 bg-sidqly-warmIvory rounded"></div>
      <div className="h-12 w-full border-2 border-dashed border-sidqly-softGreen/30 rounded-lg flex items-center justify-center">
        <span className="text-[10px] text-sidqly-emeraldGreen font-bold">VERIFIED BY SIDQLY</span>
      </div>
    </div>
  </div>
);
