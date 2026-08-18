import Link from 'next/link';

const day = [
  {
    time: 'Morning',
    title: 'Someone can’t get into email',
    body: 'They open Override Help and type the problem in normal words. Override checks the account, fixes what’s safe to fix, and explains what it did. If they need a one-time sign-in pass, a trusted person confirms it and the code appears once — not buried in a long email chain.',
  },
  {
    time: 'Midday',
    title: 'A new starter joins next Monday',
    body: 'An Approver or Company admin creates their work account, sets the right access, and can order a laptop from your approved list. When the kit arrives, the ticket closes itself. No “any update on the laptop?” chase.',
  },
  {
    time: 'Afternoon',
    title: 'Someone needs a licence or file access',
    body: 'A Team member can ask. If it affects cost or other people’s data, it goes to an Approver. They see a clear request, say yes or no, and Override carries out the change with a full record.',
  },
  {
    time: 'When it’s hard',
    title: 'Something unusual breaks',
    body: 'Override keeps working for a short window. If it can’t finish, or the issue is critical, a human engineer steps in with the history already written down. You don’t start from zero on the phone.',
  },
];

const steps = [
  {
    n: '1',
    title: 'Connect your Microsoft',
    body: 'We link Override to the Microsoft 365 you already use. You keep ownership. We’re not taking your tenant away.',
  },
  {
    n: '2',
    title: 'Pick who does what',
    body: 'Name your Company admins and Approvers. Everyone else is a Team member who can help themselves and request bigger changes.',
  },
  {
    n: '3',
    title: 'Use Help for everyday work',
    body: 'Staff open one calm app: get help, recover sign-in, track requests, manage people and workplace jobs.',
  },
  {
    n: '4',
    title: 'Keep a human safety net',
    body: 'AI handles the routine. Engineers cover the messy stuff. You’re running IT — not abandoned with a login and a prayer.',
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">How it works</p>
        <h1 className="display text-4xl sm:text-5xl">
          IT admin for people who didn’t train in IT.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#8a8f98]">
          Think of Override as the control panel for your office technology — written for office
          managers, ops leads, and business owners, not engineers.
        </p>
      </div>

      <div className="mt-14 space-y-4">
        {day.map((item) => (
          <article key={item.title} className="card grid gap-4 p-6 sm:grid-cols-[8rem_1fr] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7170ff]">
              {item.time}
            </p>
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-white">{item.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#8a8f98]">{item.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <p className="eyebrow mb-3">Getting started</p>
        <h2 className="display text-3xl sm:text-4xl">Four simple steps</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="card p-6">
              <span className="font-mono text-sm text-[#7170ff]">0{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#8a8f98]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 text-center sm:p-12">
        <h2 className="display text-2xl sm:text-3xl">Want to see it with your own examples?</h2>
        <p className="mx-auto mt-3 max-w-lg text-[#8a8f98]">
          We’ll walk through locked accounts, starters, leavers, and approvals using language your
          team already uses.
        </p>
        <Link href="/book-consultation" className="btn-primary mt-8 inline-flex">
          Book a walkthrough
        </Link>
      </div>
    </div>
  );
}
