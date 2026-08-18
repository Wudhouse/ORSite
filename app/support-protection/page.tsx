import Link from 'next/link';

const pillars = [
  {
    title: 'Human engineers on standby',
    points: [
      'AI handles routine fixes first',
      'If it’s stuck for about ten minutes, a person takes over',
      'Urgent problems go straight to a human',
      'They arrive with the full history already written down',
    ],
  },
  {
    title: 'Safer by design',
    points: [
      'Big changes need a clear confirmation',
      'Approvers control cost and access changes',
      'One-time sign-in codes are shown once — not left in chat forever',
      'Actions are logged for peace of mind and audits',
    ],
  },
  {
    title: 'Your Microsoft, your rules',
    points: [
      'You keep ownership of Microsoft 365',
      'Month-to-month freedom — not a trap contract story',
      'Built for UK SMEs, including regulated firms',
      'Transparent about what Override did and why',
    ],
  },
];

export default function SupportProtection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">Support & protection</p>
        <h1 className="display text-4xl sm:text-5xl">
          You’re in the driving seat.
          <br />
          <span className="gradient-text">We’re in the passenger seat with a map.</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#8a8f98]">
          Self-serve doesn’t mean abandoned. Override is built so non-technical people can run
          everyday IT — with guardrails, records, and real help when something nasty happens.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="card p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-white">{p.title}</h2>
            <ul className="mt-6 space-y-3">
              {p.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] text-[#8a8f98]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7170ff]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#12131a] to-[#0b0c12] p-8 sm:p-12">
        <h2 className="display text-2xl sm:text-3xl">What we won’t do</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            'Hide problems behind a ticket number and silence',
            'Force you to learn engineer tools to do basic jobs',
            'Take ownership of your Microsoft away from you',
            'Pretend AI never needs a human backup',
          ].map((line) => (
            <li
              key={line}
              className="rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3 text-sm text-[#d0d6e0]"
            >
              <span className="mr-2 text-red-300/80">×</span>
              {line}
            </li>
          ))}
        </ul>
        <Link href="/book-consultation" className="btn-primary mt-8 inline-flex">
          Discuss how support works for your team
        </Link>
      </div>
    </div>
  );
}
