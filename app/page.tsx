import Link from 'next/link';

const everyday = [
  {
    title: 'Get yourself unstuck',
    body: 'Can’t sign in? Email playing up? Laptop misbehaving? Open Help, say it in plain English, and Override sorts it — or walks you through the next step.',
  },
  {
    title: 'Get a colleague back into Microsoft',
    body: 'When someone is locked out, a trusted person can get them a one-time sign-in pass. The code shows once, then they set up proper access again. No waiting on a helpdesk overnight.',
  },
  {
    title: 'Add a new starter',
    body: 'Create a work account, set the right access, and get them productive without chasing an MSP for three days.',
  },
  {
    title: 'Offboard someone cleanly',
    body: 'When someone leaves, cut access properly — email, laptop, files — with a clear record of what happened and when.',
  },
  {
    title: 'Order a laptop',
    body: 'Company admins pick from approved models, name who it’s for (including a new starter), confirm the price, and track delivery. No spreadsheet chaos.',
  },
  {
    title: 'Approve the important stuff',
    body: 'Not everyone should buy kit or change someone else’s access. Approvers and Company admins get a simple queue: accept, decline, or do it themselves.',
  },
];

const howYouRunIt = [
  {
    who: 'Everyone',
    role: 'Team member',
    can: 'Fix their own sign-in and laptop problems. Ask for anything that affects other people, money, or security.',
  },
  {
    who: 'Office manager / line manager',
    role: 'Approver',
    can: 'Help other people, accept or decline requests, onboard and offboard staff, manage licences you already pay for.',
  },
  {
    who: 'Business owner / ops lead',
    role: 'Company admin',
    can: 'Run IT for your company end to end: hardware, spending decisions, reports, and who the Approvers are.',
  },
];

const safety = [
  { label: 'AI tries first', value: 'Minutes, not days' },
  { label: 'Human backup', value: '~10 min rule' },
  { label: 'Emergencies', value: 'Jump the queue' },
  { label: 'Your Microsoft', value: 'Stays yours' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="pill mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          For UK offices that don’t have a full-time IT person
        </div>

        <h1 className="display max-w-4xl text-[2.4rem] sm:text-6xl lg:text-7xl">
          Run your own IT —{' '}
          <span className="gradient-text">without becoming an IT person.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#8a8f98] sm:text-xl">
          Override is a simple workplace app for Microsoft 365 businesses. Your team asks for help
          in plain English. AI does the routine fixes. Trusted people in your company approve the
          bigger changes. A real engineer steps in when something is hard or urgent.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/book-consultation" className="btn-primary">
            Begin your permanent exit
            <span aria-hidden>→</span>
          </Link>
          <Link href="/pricing" className="btn-ghost">
            See prices — £19 a person
          </Link>
        </div>
        <p className="mt-4 text-sm text-[#62666d]">
          30 days free · month to month · five people minimum · UK weekdays human cover 8am–6pm
        </p>

        {/* Simple story panel */}
        <div className="hero-panel relative mt-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1 shadow-[0_40px_80px_-40px_rgba(113,112,255,0.45)]">
          <div className="rounded-[0.9rem] bg-[#0b0c10]/90 p-5 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#7170ff]">
              A normal Tuesday
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  t: '9:12 — Locked out',
                  d: 'Sam can’t open Outlook. He opens Override Help and types “I can’t sign in”.',
                },
                {
                  t: '9:14 — Sorted',
                  d: 'Override checks the problem, issues a one-time sign-in pass, and tells Sam what to do next. Recorded for the audit trail.',
                },
                {
                  t: '9:16 — Moving on',
                  d: 'No ticket black hole. No “have you tried restarting?” call. Sam is working again.',
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
                >
                  <p className="text-sm font-semibold text-white">{item.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#8a8f98]">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-4" aria-hidden>
        <div className="marquee-track text-[12px] font-medium uppercase tracking-[0.2em] text-[#62666d]">
          {[
            'Plain English help',
            'You stay in control',
            'Approve the big stuff',
            'AI + human backup',
            'Microsoft 365',
            'No MSP lock-in',
            'UK SMEs',
            'Clear audit trail',
          ]
            .concat([
              'Plain English help',
              'You stay in control',
              'Approve the big stuff',
              'AI + human backup',
              'Microsoft 365',
              'No MSP lock-in',
              'UK SMEs',
              'Clear audit trail',
            ])
            .map((t, i) => (
              <span key={`${t}-${i}`} className="inline-flex items-center gap-10">
                <span>{t}</span>
                <span className="text-[#7170ff]">◆</span>
              </span>
            ))}
        </div>
      </section>

      {/* The problem / promise */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-red-400/15 bg-red-500/[0.04] p-6 sm:p-8">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-red-300/80">
              How most offices feel today
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-[#a8aeb8]">
              <li className="flex gap-2">
                <span className="text-red-400/70">×</span> Everything waits on an MSP ticket
              </li>
              <li className="flex gap-2">
                <span className="text-red-400/70">×</span> Simple jobs take days (starters, leavers, locked accounts)
              </li>
              <li className="flex gap-2">
                <span className="text-red-400/70">×</span> Nobody knows what’s happening or what it costs
              </li>
              <li className="flex gap-2">
                <span className="text-red-400/70">×</span> You’re paying a middleman forever for basic admin
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.05] p-6 sm:p-8">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-emerald-300">
              How Override feels
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-[#d0d6e0]">
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span> Your people do everyday IT jobs themselves
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span> Big or risky changes need a named approver
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span> AI handles the boring fixes fast
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span> A human engineer is there when you need one
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">What your team can do</p>
          <h2 className="display text-3xl sm:text-5xl">Everyday IT jobs — without the jargon.</h2>
          <p className="mt-4 text-lg text-[#8a8f98]">
            These are real jobs offices already have. Override just makes them simple, safe, and
            tracked.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {everyday.map((item) => (
            <article key={item.title} className="card p-6">
              <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#8a8f98]">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/solutions" className="text-sm font-medium text-[#7170ff] hover:text-[#a5b4fc]">
            See the full feature list in plain English →
          </Link>
        </div>
      </section>

      {/* Who does what */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Who presses the buttons</p>
          <h2 className="display text-3xl sm:text-5xl">Clear roles. No free-for-all.</h2>
          <p className="mt-4 text-lg text-[#8a8f98]">
            You decide who can help only themselves, who can help others, and who runs the company
            settings. Everyone stays inside your business — not lost in a remote call centre.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {howYouRunIt.map((r) => (
            <div key={r.role} className="card bg-gradient-to-b from-white/[0.05] to-transparent p-6">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#62666d]">
                {r.who}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{r.role}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#8a8f98]">{r.can}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety net */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#12131a] via-[#0b0c12] to-[#15102a] p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">You’re not on your own</p>
              <h2 className="display text-3xl sm:text-4xl">
                AI does the routine work.
                <br />
                <span className="gradient-text">People cover the hard bits.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[#8a8f98] sm:text-base">
                Override tries to fix things quickly. If it can’t finish in about ten minutes, a
                real engineer takes over with the full story already written down. Serious problems
                go straight to a human — no sitting in a queue while the office is stuck.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#8a8f98]">
                Risky actions need a clear “yes” from the right person. Everything leaves a trail
                you can show an auditor: who asked, what changed, and why.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {safety.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/[0.08] bg-black/25 p-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#62666d]">{s.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Declaration teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="rounded-3xl border border-white/[0.1] bg-white/[0.02] p-6 sm:p-10">
          <p className="eyebrow mb-3">The Override Declaration</p>
          <h2 className="display max-w-3xl text-3xl sm:text-4xl">
            We are not an MSP. We give UK SMEs their freedom back.
          </h2>
          <p className="mt-4 max-w-2xl text-[#8a8f98]">
            Month to month. Your Microsoft stays yours. Once you’re on Override, you shouldn’t need
            to go shopping for another IT company again.
          </p>
          <Link href="/declaration" className="btn-ghost mt-6 inline-flex">
            Read the declaration
          </Link>
        </div>
      </section>

      {/* Pricing teaser — commercial copy from ORSite */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#5e6ad2]/25 via-[#0b0c12] to-cyan-500/15 p-6 sm:p-10">
          <p className="eyebrow mb-3">Prices</p>
          <h2 className="display text-3xl sm:text-5xl">Fire your MSP.</h2>
          <p className="mt-4 text-xl text-white">
            £19 a person a month. Shield £29. 30 days free. Month to month.
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#d0d6e0]/90">
            Your MSP charges £45–£85 a person a month, on a 12-month contract, plus a setup fee. We
            charge £19, monthly, no setup. Five people minimum.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pricing" className="btn-primary">
              Full pricing
            </Link>
            <Link href="/videos" className="btn-ghost border-white/15 bg-black/20">
              Watch the films
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#5e6ad2]/40 via-[#0b0c12] to-cyan-500/25" />
          <div className="relative">
            <h2 className="display mx-auto max-w-2xl text-3xl sm:text-5xl">
              Ready to stop waiting on a ticket?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#d0d6e0]/90">
              We’ll show you — in ordinary language — how your office manager, finance lead, or
              ops person can run day-to-day IT with Override.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/book-consultation" className="btn-primary">
                Book a walkthrough
                <span aria-hidden>→</span>
              </Link>
              <Link href="/how-it-works" className="btn-ghost border-white/15 bg-black/20">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
