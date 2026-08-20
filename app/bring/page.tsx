import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Override — Bring a company',
  description:
    'Bring a company. Three months of yours, free. Coming as we take customers.',
};

export default function BringPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow mb-3">Coming as we take customers</p>
        <h1 className="display text-4xl sm:text-6xl">
          Bring a company. Three months of yours, free.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[#8a8f98]">
          Know another company that should be on this? When they pay their first invoice, we take
          three months off your Override line. Microsoft stays on the invoice.
        </p>
      </div>

      <section className="mt-14">
        <h2 className="display text-2xl sm:text-3xl">How it works</h2>
        <ol className="mt-6 space-y-3">
          {[
            'You refer another company. A real one. Not your other office. Not the same boss.',
            'They take the 30-day free trial, same as anyone.',
            'They stay. They pay their first invoice.',
            'We credit your Override line: three times whatever you pay us for Override that month.',
            'You can do this three times a year.',
          ].map((line, i) => (
            <li key={line} className="card flex gap-4 p-5">
              <span className="font-mono text-sm text-[#7170ff]">0{i + 1}</span>
              <span className="text-[15px] text-[#d0d6e0]">{line}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="display text-2xl sm:text-3xl">What this is not</h2>
        <ol className="mt-6 space-y-3">
          {[
            'Not for sending a name.',
            'Not for a trial that never pays.',
            'Not cash. Not a voucher. Credit on your Override line.',
            'Not a sister company, same boss, same group.',
            'Not stacked with an accountant intro on the same new company.',
            'Not the £500 Promise. That is theirs, if they qualify. This is yours.',
          ].map((line, i) => (
            <li key={line} className="card flex gap-4 p-5">
              <span className="font-mono text-sm text-[#62666d]">0{i + 1}</span>
              <span className="text-[15px] text-[#8a8f98]">{line}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 space-y-4">
        <h2 className="display text-2xl sm:text-3xl">FAQ</h2>
        {[
          {
            q: 'When do I get the three months?',
            a: 'When they pay their first invoice. After the trial. Not before.',
          },
          {
            q: 'How much is “free”?',
            a: 'Three times your Override line for that month. Microsoft stays on the invoice.',
          },
          { q: 'How many times?', a: 'Three companies a year.' },
          {
            q: 'Can I refer the company next door that I also run?',
            a: 'No.',
          },
          { q: 'Is this live?', a: 'Coming as we take customers.' },
        ].map((item) => (
          <article key={item.q} className="card p-6">
            <h3 className="text-lg font-semibold text-white">{item.q}</h3>
            <p className="mt-2 text-[15px] text-[#8a8f98]">{item.a}</p>
          </article>
        ))}
      </section>

      <div className="mt-14 rounded-3xl border border-white/[0.1] bg-white/[0.02] p-8 text-center">
        <p className="eyebrow mb-3">Coming as we take customers</p>
        <h2 className="display text-2xl sm:text-3xl">Know a company? Bring them.</h2>
        <p className="mx-auto mt-4 max-w-xl text-[#8a8f98]">
          This is not live yet. No form. When it is, the credit lands on your Override line after
          they pay their first invoice.
        </p>
        <Link href="/book-consultation" className="btn-primary mt-8 inline-flex">
          Begin your permanent exit
        </Link>
      </div>
    </div>
  );
}
