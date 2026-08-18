import Link from 'next/link';

const stories = [
  {
    title: 'The locked-out morning',
    before: 'Three people stuck outside Microsoft. Everyone waiting on an MSP callback.',
    after:
      'Each person (or an Approver) uses Override to get back in. Codes shown once. Work resumes before the coffee goes cold.',
    win: 'Minutes instead of half a day',
  },
  {
    title: 'The new starter scramble',
    before: 'Account on Wednesday, laptop next week, access “someone will sort”. First week wasted.',
    after:
      'Approver creates the account, orders an approved laptop, tracks delivery, and knows what’s done.',
    win: 'Ready on day one',
  },
  {
    title: 'The quiet leaver risk',
    before: 'Someone left last month. Mailbox still open. Nobody is quite sure who still has access.',
    after:
      'Offboarding is a guided job with a clear checklist and a record you can show if anyone asks.',
    win: 'Access closed properly',
  },
  {
    title: 'The “what did IT even do?” meeting',
    before: 'Invoices arrive. Explanations don’t. Leadership has no simple view of activity.',
    after:
      'Company admins see readable reports and an audit trail of important changes — without learning a technician console.',
    win: 'Visibility without the jargon',
  },
];

export default function Results() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">Life with Override</p>
        <h1 className="display text-4xl sm:text-5xl">
          What changes when the office runs its own IT.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#8a8f98]">
          These are the moments UK SMEs feel every week. Override is built around them — not around
          engineer tools.
        </p>
      </div>

      <div className="mt-14 space-y-4">
        {stories.map((s) => (
          <article key={s.title} className="card p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-white">{s.title}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#62666d]">
                      Before
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#8a8f98]">{s.before}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300/90">
                      With Override
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#d0d6e0]">{s.after}</p>
                  </div>
                </div>
              </div>
              <div className="shrink-0 rounded-2xl border border-white/[0.08] bg-black/25 px-5 py-4 lg:w-52">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#62666d]">Outcome</p>
                <p className="mt-2 text-lg font-semibold text-white">{s.win}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/book-consultation" className="btn-primary inline-flex">
          See if this fits your office
        </Link>
      </div>
    </div>
  );
}
