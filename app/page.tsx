import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero - Stronger MSP Killer Positioning */}
      <section className="relative pt-16 pb-20 px-6 bg-[#0A1628] futuristic-bg overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 text-sm mb-8 border border-white/10 tracking-[1.5px]">
            THE END OF TRADITIONAL MSPs
          </div>
          
          <h1 className="section-heading max-w-[1100px] mx-auto mb-6 tracking-[-3.5px] leading-[0.95]">
            Traditional MSPs are<br />obsolete.<br />
            <span className="text-[#60A5FA]">OverRide is the future.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-2xl text-white/75 mb-10 tracking-[-0.3px]">
            UK SMEs no longer need outdated managed service providers.<br />
            We build custom AI-powered applications that replace them entirely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/book-consultation" 
              className="cta-button px-10 py-4 rounded-full bg-white text-[#0A1628] font-semibold text-xl inline-flex items-center justify-center active:scale-[0.985]"
            >
              Kill Your MSP — Book a Call
            </Link>
            <Link 
              href="/how-it-works" 
              className="cta-button px-10 py-4 rounded-full border border-white/25 hover:bg-white/5 font-semibold text-xl inline-flex items-center justify-center"
            >
              See How We Replace MSPs
            </Link>
          </div>
          <p className="text-sm text-white/50 tracking-widest">30-minute strategy call • No obligation</p>
        </div>

        {/* Subtle futuristic accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#60A5FA]/30 to-transparent" />
      </section>

      {/* Trust Bar */}
      <div className="border-b border-white/10 bg-[#08101F] py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-white/50 text-sm tracking-[2px]">
          <div>FCA-REGULATED FIRMS</div>
          <div>MANUFACTURING</div>
          <div>PROFESSIONAL SERVICES</div>
          <div>RETAIL &amp; LOGISTICS</div>
          <div>HEALTHCARE</div>
        </div>
      </div>

      {/* New Savings & Contract Messages */}
      <section className="bg-[#111B2E] py-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-center">
          
          {/* Message 1 - Savings */}
          <div>
            <p className="text-2xl md:text-[28px] font-semibold tracking-tight leading-tight">
              If you spend more than <span className="text-[#60A5FA]">£3k a month</span> with your MSP,<br />
              then you are definitely not efficient — <span className="text-emerald-400">and we will save you money.</span>
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/20 mx-auto" />

          {/* Message 2 - Contract flexibility */}
          <div>
            <p className="text-xl md:text-2xl font-medium tracking-tight text-white/90 leading-tight">
              If you are still in contract with your MSP, you should not wait.<br />
              We can build and deploy efficiencies and applications into your business now.<br />
              When your contract ends, we can add the IT support and security services.
            </p>
          </div>

        </div>
      </section>

      {/* Why Traditional MSPs Fail */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-white/10">
        <div className="text-center mb-12">
          <div className="text-[#60A5FA] text-xs tracking-[3px] font-medium mb-3">THE PROBLEM</div>
          <h2 className="section-heading tracking-[-2px]">Traditional MSPs are holding you back</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Reactive & Expensive", desc: "They wait for things to break, then charge premium rates for basic fixes." },
            { title: "Generic & Outdated", desc: "One-size-fits-all support with no strategic value or modern tooling." },
            { title: "No Ownership", desc: "Multiple vendors, finger-pointing, and zero accountability for business outcomes." }
          ].map((item, i) => (
            <div key={i} className="card p-9 rounded-3xl">
              <div className="text-red-400/90 mb-4 text-4xl tracking-[-2px]">0{i+1}</div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">{item.title}</h3>
              <p className="text-white/70 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The OverRide Advantage */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-[#60A5FA] text-xs tracking-[3px] font-medium mb-3">THE SOLUTION</div>
          <h2 className="section-heading tracking-[-2px]">One partner. Modern applications.<br />Zero compromise.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Custom AI Applications",
              desc: "We don’t patch old systems. We build modern, AI-powered applications tailored to your business using a proven module library."
            },
            {
              title: "Strategic Partnership",
              desc: "We function as your technology leadership team — aligned to business outcomes, not ticket volume."
            },
            {
              title: "Full Accountability",
              desc: "Applications + support + security + Microsoft licensing in one contract. One team. One monthly fee."
            }
          ].map((benefit, i) => (
            <div key={i} className="card p-9 rounded-3xl border border-white/10">
              <div className="text-[#60A5FA] mb-6 text-3xl tracking-[-1px]">0{i + 1}</div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">{benefit.title}</h3>
              <p className="text-white/75 leading-relaxed text-[15px]">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Module + Strong CTA */}
      <section className="bg-[#111B2E] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-center">
            <div className="md:col-span-7">
              <div className="uppercase tracking-[3px] text-xs text-[#60A5FA] mb-4">FLAGSHIP MODULE</div>
              <h3 className="text-4xl font-semibold tracking-[-1.5px] mb-6 leading-none">FCA Regulatory Reporting &amp; Liquidity Intelligence</h3>
              <p className="text-xl text-white/75 mb-8 pr-4">Replace manual, error-prone regulatory processes with intelligent, audit-ready automation.</p>
              <Link href="/solutions" className="text-[#60A5FA] font-medium hover:underline inline-flex items-center gap-1">Explore the full module library →</Link>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#0A1628] border border-white/10 rounded-3xl p-8">
                <div className="text-xs tracking-[2px] text-white/50 mb-5">PROVEN WITH 42+ FIRMS</div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center"><span>Time to prepare returns</span><span className="font-mono text-emerald-400 font-medium">-78%</span></div>
                  <div className="flex justify-between items-center"><span>Data accuracy</span><span className="font-mono text-emerald-400 font-medium">99.4%</span></div>
                  <div className="flex justify-between items-center"><span>Audit prep time</span><span className="font-mono text-emerald-400 font-medium">-65%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Strong CTA */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl tracking-[-1.8px] font-semibold mb-4">Ready to kill your traditional MSP?</h2>
          <p className="text-xl text-white/70 mb-8">Speak with our team about replacing your current provider with a modern, strategic alternative.</p>
          <Link 
            href="/book-consultation" 
            className="cta-button inline-block px-12 py-4 bg-white text-[#0A1628] font-semibold text-xl rounded-full"
          >
            Book Your Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
