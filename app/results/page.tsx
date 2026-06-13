import Link from 'next/link';

const caseStudies = [
  {
    company: "Apex Wealth Management",
    industry: "Financial Services (FCA regulated)",
    challenge: "Spending 120+ hours per quarter on regulatory returns and liquidity reporting.",
    result: "Reduced reporting time to under 25 hours with 100% audit pass rate.",
    metrics: ["78% faster reporting", "£87k annual savings", "Zero compliance issues"],
  },
  {
    company: "Northfield Engineering",
    industry: "Manufacturing",
    challenge: "Fragmented IT support, Microsoft licensing and multiple vendors causing high costs and downtime.",
    result: "Consolidated to OverRide. 42% reduction in IT spend and 99.6% uptime.",
    metrics: ["42% lower IT costs", "Single strategic partner", "Modern application stack"],
  },
  {
    company: "Sterling Professional Services",
    industry: "Professional Services",
    challenge: "Knowledge trapped in email and shared drives. Slow onboarding of new staff.",
    result: "Deployed Knowledge & RAG System. New consultants productive 3 weeks earlier.",
    metrics: ["65% faster onboarding", "Internal knowledge base live", "High adoption rate"],
  },
];

export default function Results() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-14">
        <div className="text-[#60A5FA] text-sm tracking-[2px] font-medium mb-3">REAL RESULTS</div>
        <h1 className="section-heading tracking-[-1.8px]">UK SMEs replacing their MSPs with confidence</h1>
      </div>

      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <div key={index} className="card border border-white/10 rounded-3xl p-10 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1">
                <div className="font-mono text-sm tracking-[3px] text-white/50 mb-1">{study.industry.toUpperCase()}</div>
                <h3 className="text-3xl font-semibold tracking-tight mb-6">{study.company}</h3>
                
                <div className="mb-8">
                  <div className="text-xs tracking-wider text-white/60 mb-1.5">THE CHALLENGE</div>
                  <p className="text-lg text-white/80">{study.challenge}</p>
                </div>
                
                <div>
                  <div className="text-xs tracking-wider text-white/60 mb-1.5">THE OUTCOME</div>
                  <p className="text-lg">{study.result}</p>
                </div>
              </div>

              <div className="md:w-80 flex-shrink-0 bg-[#0A1628] border border-white/10 rounded-2xl p-7">
                <div className="text-xs uppercase tracking-[2px] text-white/50 mb-4">KEY RESULTS</div>
                <div className="space-y-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3 text-lg font-medium">
                      <span className="text-emerald-400">→</span> {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link href="/book-consultation" className="cta-button px-10 py-4 bg-white text-[#0A1628] rounded-full font-semibold text-lg inline-block">See if OverRide is right for your business</Link>
      </div>
    </div>
  );
}
