import Link from 'next/link';

export default function SupportProtection() {
  const pillars = [
    {
      title: "Ongoing Maintenance & Upgrades",
      points: [
        "Continuous improvement of your applications",
        "Monthly feature releases and performance optimisation",
        "Proactive monitoring and issue resolution",
        "Quarterly strategic technology reviews"
      ]
    },
    {
      title: "Cyber Security",
      points: [
        "24/7 Security Operations Centre",
        "Endpoint detection & response",
        "Vulnerability management and patching",
        "Annual penetration testing and compliance reporting",
        "Employee security awareness training"
      ]
    },
    {
      title: "Microsoft Licensing",
      points: [
        "Optimised licensing aligned to actual usage",
        "Full compliance management",
        "Access to the latest Microsoft 365 and Azure capabilities",
        "Transparent pricing with no hidden margins"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-14">
        <div className="text-[#60A5FA] text-sm tracking-[2px] font-medium mb-3">PEACE OF MIND</div>
        <h1 className="section-heading tracking-[-2px]">Everything covered.<br />Nothing left to chance.</h1>
        <p className="mt-5 text-xl text-white/70">We don’t just build your applications. We become your long-term technology partner responsible for keeping everything running, secure and up to date.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {pillars.map((pillar, index) => (
          <div key={index} className="card border border-white/10 rounded-3xl p-9">
            <h3 className="font-semibold text-2xl tracking-tight mb-7 leading-tight">{pillar.title}</h3>
            <ul className="space-y-4 text-[15px]">
              {pillar.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-white/80">
                  <span className="mt-1.5 block h-[5px] w-[5px] rounded-full bg-[#60A5FA] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#111827] rounded-3xl p-12 text-center">
        <h3 className="text-3xl tracking-tight font-semibold mb-4">One partner. One contract. Full accountability.</h3>
        <p className="max-w-md mx-auto text-white/70 mb-8">Support, security and licensing are included in a single predictable monthly fee.</p>
        <Link href="/book-consultation" className="cta-button inline-block px-9 py-4 bg-white text-[#0A1628] font-semibold rounded-full">Discuss your support requirements</Link>
      </div>
    </div>
  );
}
