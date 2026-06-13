import Link from 'next/link';

const featuredModule = {
  title: "FCA Regulatory Reporting & Liquidity Intelligence",
  category: "COMPLIANCE",
  desc: "For FCA-regulated businesses, preparing accurate quarterly regulatory returns is a recurring burden. This module helps reduce manual effort and risk by supporting the collection, validation, and structuring of data required for FCA submissions, with a strong focus on liquidity and capital reporting.",
  outcomes: ["78% reduction in time to prepare returns", "99.4% data accuracy", "Audit-ready reports in minutes", "Automated liquidity forecasting"],
  badge: "Most requested"
};

const modules = [
  { name: "IT Support Core", desc: "Modern ticketing, remote support, proactive monitoring and incident management." },
  { name: "Microsoft 365 Intelligence Layer", desc: "Advanced analytics, automation and governance across your Microsoft ecosystem." },
  { name: "Security Baseline & Monitoring", desc: "24/7 threat detection, endpoint protection, vulnerability management and compliance reporting." },
  { name: "Knowledge & RAG System", desc: "Enterprise search and AI assistant trained on your internal documents and policies." },
  { name: "Integration Bus", desc: "Secure, reliable integration between your critical business systems and applications." },
  { name: "Process Automation Engine", desc: "Low-code automation of repetitive business processes with full audit trails." },
  { name: "Finance & Forecasting", desc: "Real-time financial dashboards, cashflow forecasting and board-ready reporting." },
  { name: "Client Portal & CRM", desc: "Professional client-facing portals with secure document exchange and service tracking." },
  { name: "Data Platform Foundation", desc: "Centralised, governed data platform ready for analytics, AI and reporting." },
  { name: "HR & Workforce Intelligence", desc: "Onboarding, performance, absence and workforce planning tools." },
];

export default function Solutions() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl">
          <div className="text-[#60A5FA] text-xs tracking-[3px] font-medium mb-3">OUR MODULE LIBRARY</div>
          <h1 className="section-heading tracking-[-2.5px]">Pre-built modules.<br />Rapid delivery.<br />The end of generic MSP support.</h1>
          <p className="mt-5 text-xl text-white/70">We combine proven modules with targeted custom development to deliver production-ready applications that replace traditional MSP services.</p>
        </div>
      </div>

      {/* Featured Module */}
      <div className="bg-[#111B2E] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold tracking-widest rounded-full bg-[#60A5FA] text-[#0A1628]">{featuredModule.category}</span>
            <span className="px-3 py-1 text-xs font-semibold tracking-widest rounded-full border border-[#60A5FA]/40 text-[#60A5FA]">{featuredModule.badge}</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight mb-6">{featuredModule.title}</h2>
          <p className="max-w-3xl text-xl text-white/80 mb-10">{featuredModule.desc}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm tracking-wider text-white/60 mb-3">PROVEN OUTCOMES</div>
              <ul className="space-y-3">
                {featuredModule.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg">
                    <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" /> 
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2">
              <Link href="/book-consultation" className="cta-button inline-flex px-8 py-3.5 bg-white text-[#0A1628] font-semibold rounded-full">Discuss this module for your firm →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* All Modules */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-white/60 mb-1">COMPLETE LIBRARY</div>
            <h3 className="text-3xl font-semibold tracking-tight">Additional modules available</h3>
          </div>
          <Link href="/book-consultation" className="hidden md:block text-sm font-medium text-[#60A5FA] hover:underline">Speak to our solutions team →</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {modules.map((mod, index) => (
            <div key={index} className="module-card border border-white/10 hover:border-white/20 rounded-3xl px-8 py-8">
              <h4 className="font-semibold text-xl tracking-tight mb-3">{mod.name}</h4>
              <p className="text-white/75 leading-snug text-[15px]">{mod.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center border-t border-white/10 pt-10">
          <p className="text-white/60 mb-5">Need something specific not listed here?</p>
          <Link href="/book-consultation" className="cta-button inline-block px-8 py-3 rounded-full border border-white/30 hover:bg-white/5 font-medium">Request a custom module discussion</Link>
        </div>
      </div>
    </div>
  );
}
