import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      desc: "We conduct a deep audit of your current IT environment and business processes. We identify exactly where traditional MSPs are failing you and where custom applications will deliver the highest ROI."
    },
    {
      number: "02",
      title: "Module Selection",
      desc: "Together we select the optimal combination of pre-built modules. We design the architecture that will replace your fragmented MSP stack."
    },
    {
      number: "03",
      title: "Build & Configure",
      desc: "Our team configures and extends the modules into a cohesive, production-grade application. Iterative development with your team ensures fast feedback."
    },
    {
      number: "04",
      title: "Deployment & Training",
      desc: "We deploy in a secure, compliant environment with full documentation and training. Your team transitions away from the old MSP model."
    },
    {
      number: "05",
      title: "Ongoing Partnership",
      desc: "Continuous support, security monitoring, Microsoft licensing, and quarterly strategic reviews — all from one accountable partner."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-16">
        <div className="text-[#60A5FA] text-xs tracking-[3px] font-medium mb-3">OUR PROCESS</div>
        <h1 className="section-heading tracking-[-2.5px]">A clear, low-risk path to replacing your MSP</h1>
        <p className="mt-5 text-xl text-white/70">We eliminate uncertainty by using proven modules and a structured transition process.</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="card border border-white/10 rounded-3xl p-9 md:p-12 flex flex-col md:flex-row gap-8 md:items-center">
            <div className="md:w-20 flex-shrink-0">
              <div className="text-6xl font-mono font-semibold text-white/10 tracking-[-3px]">{step.number}</div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-semibold tracking-tight mb-4">{step.title}</h3>
              <p className="text-lg text-white/75 max-w-3xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/book-consultation" className="cta-button inline-block px-10 py-4 bg-white text-[#0A1628] rounded-full font-semibold text-lg">Start Your Discovery Call</Link>
        <p className="mt-4 text-sm text-white/50 tracking-widest">Free 30-minute strategy session</p>
      </div>
    </div>
  );
}
