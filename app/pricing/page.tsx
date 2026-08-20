import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Override — Prices.',
  description:
    'Microsoft admin for £19 a person a month. Shield £29. 30 days free. Month to month. Five people minimum.',
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow mb-3">Pricing</p>
        <h1 className="display text-4xl sm:text-6xl">
          Microsoft admin for £19 a person a month.
        </h1>
        <p className="mt-5 text-xl font-medium text-white sm:text-2xl">
          £19 a person a month. Shield £29. 30 days free. Month to month.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#8a8f98]">
          Your MSP charges £45–£85 per person per month, on at least a 12-month contract, plus a
          setup fee. We charge £19 per person per month. Your MSP also charges you for setting up
          new laptops, we don’t.
        </p>
      </div>

      <p className="mt-12 text-sm font-medium uppercase tracking-[0.16em] text-[#62666d]">
        Prices exclude VAT
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="card relative overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7170ff] to-transparent" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7170ff]">
            Default
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Override</h2>
          <p className="mt-4 font-mono text-4xl font-semibold text-white">
            £19 <span className="text-base font-normal text-[#8a8f98]">a person a month</span>
          </p>
          <p className="mt-3 text-[#8a8f98]">For the office manager who is done with the MSP.</p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#d0d6e0]">
            Includes
          </h3>
          <ul className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#8a8f98]">
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Override Portal for your team.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Unlock a Microsoft sign-in. Add a starter.
              Remove a leaver. Hand out licences you already pay for. See which laptops are fine —
              without the Microsoft admin centre.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Approvals. Staff cannot change someone
              else’s access or spend without a say-so.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> A person when it is actually hard, UK
              weekdays 8am–6pm.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Email in is handled. You get a rating link
              when it closes.
            </li>
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#d0d6e0]">
            Also on the bill
          </h3>
          <ul className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#8a8f98]">
            <li className="flex gap-2">
              <span className="text-[#d0d6e0]">·</span> Microsoft 365 sits on the Override invoice,
              at Microsoft’s list price. One bill.
            </li>
            <li className="flex gap-2">
              <span className="text-[#d0d6e0]">·</span> Laptops, screens and docks: we quote them.
              You buy through us if you want. Not a web shop.
            </li>
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#d0d6e0]">
            Does not include
          </h3>
          <ul className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#8a8f98]">
            <li className="flex gap-2">
              <span className="text-[#62666d]">–</span> On-site visits.
            </li>
            <li className="flex gap-2">
              <span className="text-[#62666d]">–</span> Huntress.
            </li>
            <li className="flex gap-2">
              <span className="text-[#62666d]">–</span> 24/7 security operations.
            </li>
            <li className="flex gap-2">
              <span className="text-[#62666d]">–</span> Overnight human cover.
            </li>
          </ul>
        </article>

        <article className="card p-6 sm:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">Override Shield</h2>
          <p className="mt-4 font-mono text-4xl font-semibold text-white">
            £29 <span className="text-base font-normal text-[#8a8f98]">a person a month</span>
          </p>
          <p className="mt-3 text-[#8a8f98]">Same as Override, plus:</p>
          <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-[#8a8f98]">
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Front of the queue.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> 1-hour target fix when something is on fire
              (still UK weekdays 8am–6pm).
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> We watch Windows updates and the four
              security basics for you (encryption, Defender, updates, PIN).
            </li>
          </ul>
        </article>
      </div>

      {/* £500 Promise */}
      <section className="mt-10 overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#12131a] via-[#0b0c12] to-[#15102a] p-6 sm:p-10">
        <p className="eyebrow mb-3">The £500 Promise</p>
        <h2 className="display text-2xl sm:text-3xl">
          If you have 15 or more people on an IT support contract today, and Override does not cut
          that bill by £500 a month, your first three months are free.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[#d0d6e0]">
          We compare their support fee to ours. Microsoft licences, laptops, and project work do not
          count. Show us a recent invoice.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#62666d]">
          15–249 people, current monthly IT support retainer, UK, ex VAT. Claim in the trial or
          within 14 days of the first paid invoice. One per company. Remedy is a refund of three
          months of Override, not cash on top.
        </p>
      </section>

      {/* Bring teaser */}
      <section className="mt-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-10">
        <p className="eyebrow mb-3">Coming as we take customers</p>
        <h2 className="display text-2xl sm:text-3xl">
          Bring a company. Three months of yours, free.
        </h2>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#8a8f98]">
          Already with Override? Bring another UK company in. When they pay their first invoice, we
          take three months off your Override line. Not a token. Three times whatever you pay us
          for Override that month. Microsoft stays on the invoice. Do it up to three times a year.
        </p>
        <Link href="/bring" className="btn-ghost mt-6 inline-flex">
          How Bring a company works
        </Link>
      </section>

      {/* No charge */}
      <section className="mt-14">
        <h2 className="display text-2xl sm:text-3xl">What we do not charge for</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'Setup / onboarding', d: '£0' },
            { t: 'Exit', d: '£0' },
            { t: 'Lock-in', d: 'None (rolling 30-day, 30 days’ notice).' },
            {
              t: 'Trial',
              d: '30 days free, full product. Card on file. Converts unless they cancel.',
            },
          ].map((item) => (
            <div key={item.t} className="card p-5">
              <h3 className="font-semibold text-white">{item.t}</h3>
              <p className="mt-2 text-sm text-[#8a8f98]">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Minimums */}
      <section className="mt-14">
        <h2 className="display text-2xl sm:text-3xl">Minimums</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-white/[0.03] text-[12px] uppercase tracking-[0.14em] text-[#62666d]">
              <tr>
                <th className="px-4 py-3 font-medium">People</th>
                <th className="px-4 py-3 font-medium">Override</th>
                <th className="px-4 py-3 font-medium">Override Shield</th>
              </tr>
            </thead>
            <tbody className="text-[#d0d6e0]">
              <tr className="border-t border-white/[0.06]">
                <td className="px-4 py-3">5 people</td>
                <td className="px-4 py-3 font-mono">£95</td>
                <td className="px-4 py-3 font-mono">£145</td>
              </tr>
              <tr className="border-t border-white/[0.06]">
                <td className="px-4 py-3">50–99: 10% off</td>
                <td className="px-4 py-3 font-mono">£17.10</td>
                <td className="px-4 py-3 font-mono">£26.10</td>
              </tr>
              <tr className="border-t border-white/[0.06]">
                <td className="px-4 py-3">100–249: 15% off</td>
                <td className="px-4 py-3 font-mono">£16.15</td>
                <td className="px-4 py-3 font-mono">£24.65</td>
              </tr>
              <tr className="border-t border-white/[0.06]">
                <td className="px-4 py-3">250+</td>
                <td className="px-4 py-3" colSpan={2}>
                  Talk to us
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <ul className="mt-10 space-y-2 text-sm text-[#62666d]">
        <li>Prices exclude VAT.</li>
        <li>
          Everyone in your Microsoft company who is a real person. Not guests, not meeting rooms.
          Not shared mailboxes. Not disabled accounts.
        </li>
        <li>Microsoft 365 sits on the Override invoice, at Microsoft’s list price. One bill.</li>
        <li>Human cover UK weekdays 8am–6pm.</li>
        <li>The app is available all the time.</li>
      </ul>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/book-consultation" className="btn-primary">
          Book a walkthrough
        </Link>
        <Link href="/how-it-works" className="btn-ghost">
          How it works
        </Link>
      </div>
    </div>
  );
}
