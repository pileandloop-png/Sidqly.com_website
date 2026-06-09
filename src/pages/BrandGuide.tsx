import React from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { brand } from '../config/brand';
import BrandLogo from '../components/brand/BrandLogo';
import { MobileAppPreview } from '../components/brand/VisualMockups';

const BrandGuide = () => {
  return (
    <>
      <SEO
        title="Sidqly Brand Guide"
        description="Learn about the Sidqly brand identity, logo meaning, and visual system."
        canonical="/brand"
      />

      <PageHeader
        title="Brand Identity"
        description="Verified giving. Protected dignity. Clear impact."
        category="Sidqly"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-sidqly-deepNavy mb-6">The Sidqly Logo</h2>
                <div className="flex flex-wrap gap-8 p-8 bg-sidqly-warmIvory rounded-3xl border border-sidqly-mutedBorder">
                  <div className="flex flex-col items-center gap-2">
                    <BrandLogo variant="default" className="h-12" />
                    <span className="text-[10px] text-sidqly-slateText uppercase font-bold">Default</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 bg-sidqly-deepNavy p-4 rounded-xl">
                    <BrandLogo variant="dark" className="h-12" />
                    <span className="text-[10px] text-white/50 uppercase font-bold">Dark</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <BrandLogo variant="mark" className="h-12" />
                    <span className="text-[10px] text-sidqly-slateText uppercase font-bold">Mark Only</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-sidqly-deepNavy mb-4">Logo Meaning</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="font-bold text-sidqly-deepGreen">Islamic Geometric Shape</div>
                    <p className="text-sm text-sidqly-slateText">Represents Islamic heritage and faith-based operations.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold text-sidqly-goldAccent">The Crescent</div>
                    <p className="text-sm text-sidqly-slateText">Symbolizes Islamic giving, service, and the lunar calendar.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold text-sidqly-emeraldGreen">The Checkmark</div>
                    <p className="text-sm text-sidqly-slateText">Represents verified proof, trust, and operational clarity.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold text-sidqly-deepNavy">The Protective Shield</div>
                    <p className="text-sm text-sidqly-slateText">Symbolizes privacy, dignity, and the protection of amanah.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-sidqly-deepNavy mb-4">Brand Tagline</h3>
                <div className="p-6 bg-sidqly-deepGreen text-white rounded-2xl italic font-serif text-xl">
                  "{brand.tagline}"
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {brand.alternativeTaglines.map((t, i) => (
                    <span key={i} className="text-xs bg-sidqly-softGreen/20 text-sidqly-deepGreen px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-sidqly-deepNavy mb-6">Color Palette</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {Object.entries(brand.colors).map(([name, hex]) => (
                    <div key={name} className="space-y-2">
                      <div className="h-20 w-full rounded-xl shadow-inner" style={{ backgroundColor: hex }}></div>
                      <div>
                        <div className="text-xs font-bold capitalize">{name.replace(/([A-Z])/g, ' $1')}</div>
                        <div className="text-[10px] text-sidqly-slateText font-mono uppercase">{hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-sidqly-deepNavy mb-4">Typography</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] text-sidqly-slateText uppercase font-bold tracking-widest mb-2">Headings: Inter Bold</div>
                    <div className="text-4xl font-bold text-sidqly-deepNavy">Aa Bb Cc 123</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-sidqly-slateText uppercase font-bold tracking-widest mb-2">Body: Inter Regular</div>
                    <div className="text-xl text-sidqly-slateText">Modern clean typography for maximum readability across all platforms.</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-sidqly-deepNavy mb-4">App Icon Preview</h3>
                <div className="flex gap-8">
                   <img src="/brand/sidqly-app-icon.svg" alt="App Icon" className="w-24 h-24 rounded-2xl shadow-xl" />
                   <div className="flex-1 flex items-center">
                     <MobileAppPreview />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sidqly-warmIvory">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-sidqly-deepNavy mb-6">Brand Voice</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             {["Premium", "Trustworthy", "Modern", "Islamic-inspired", "Calm", "Organized", "Dignity-first", "Professional"].map(trait => (
               <div key={trait} className="p-4 bg-white rounded-xl border border-sidqly-mutedBorder font-medium text-sidqly-deepGreen">
                 {trait}
               </div>
             ))}
          </div>
          <p className="mt-12 text-sidqly-slateText">
            For brand assets or media inquiries, please contact: <br />
            <a href={`mailto:${brand.email}`} className="text-sidqly-emeraldGreen font-bold font-mono">{brand.email}</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default BrandGuide;
