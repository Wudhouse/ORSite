import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Override Declaration — We are not an MSP',
  description:
    'We are not an MSP. We are an AI business that makes the traditional MSP model obsolete for UK SMEs. Read the Override Declaration.',
};

const paragraphs = [
  'For years, small and medium businesses have been forced to rent IT people. They pay every month for slow tickets, reactive support, opaque pricing, and contracts written to keep them trapped. Most of them quietly loathe the arrangement. They want out. They just cannot face the hassle of switching again.',
  'That era is finished.',
  'AI has changed the economics. Reliable IT no longer depends on layers of human middlemen. Speed no longer depends on a ticket queue. You no longer give up control of your Microsoft to get the lights kept on.',
  'Override was built for this moment.',
  'We do not manage IT the old way. We replace the need for that model. Cheaper than the retainer. Better, because the office runs it. Quicker, because ordinary work does not wait in a queue. Safer by design, not as an afterthought. Your Microsoft stays yours. Total freedom — month to month, no lock-in, no endless shopping cycle.',
  'Once a business joins Override, it never has to look for another IT company again. That is not a marketing line. It is the reason the platform exists.',
  'The MSP industry will keep selling the same story: complexity is inevitable, so you need us in the middle forever. We reject that story. Complexity is solvable. The middleman is optional. UK SMEs deserve an outcome, not a permanent service contract.',
];

export default function DeclarationPage() {
  return (
    <article className="relative">
      {/* Ambient accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(113,112,255,0.18),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
        <p className="eyebrow mb-6">Founding statement</p>

        <h1 className="display text-4xl sm:text-6xl">
          The Override <span className="gradient-text">Declaration</span>
        </h1>

        <div className="mt-10 rounded-2xl border border-white/[0.1] bg-gradient-to-br from-[#7170ff]/15 via-white/[0.03] to-cyan-400/10 p-6 sm:p-8">
          <p className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
            We are not an MSP. We are an AI business that makes the traditional MSP model
            obsolete for UK SMEs.
          </p>
        </div>

        <div className="mt-12 space-y-8 border-l border-white/[0.08] pl-6 sm:pl-8">
          {paragraphs.map((p) => {
            const isPunch = p === 'That era is finished.' || p === 'Override was built for this moment.';
            return (
              <p
                key={p}
                className={
                  isPunch
                    ? 'text-2xl font-semibold tracking-tight text-white sm:text-3xl'
                    : 'text-lg leading-relaxed text-[#d0d6e0] sm:text-xl sm:leading-relaxed'
                }
              >
                {p}
              </p>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl border border-white/[0.1] bg-black/30 p-6 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7170ff]">
            Closing
          </p>
          <p className="mt-4 text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
            This is the Override Declaration. We are an AI business. We end the need for MSPs.
            We give UK SMEs their freedom back.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Link href="/book-consultation" className="btn-primary">
            Join Override
            <span aria-hidden>→</span>
          </Link>
          <Link href="/" className="btn-ghost">
            Back to home
          </Link>
        </div>
      </div>
    </article>
  );
}
