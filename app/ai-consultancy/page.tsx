import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Override — AI consultancy & roadmap',
  description:
    'Every Override subscriber gets an hour of AI consultancy a month. We build your AI roadmap, train your team, or build the AI for you — with an ROI calculator on every plan.',
};

const included = [
  {
    title: '1 hour a month, included',
    body: 'Every Override subscriber gets an hour of AI consultancy each month. Use it. Don’t let it sit on the shelf.',
  },
  {
    title: 'Teams or in person',
    body: 'Sessions on Microsoft Teams, or face to face where we can sensibly get there. Geographic restrictions apply — we’re not flying to Brazil for an hour.',
  },
  {
    title: 'Your AI roadmap',
    body: 'We map where AI should actually help your business — prioritised, practical, written for you, not a generic slide deck.',
  },
  {
    title: 'ROI on every roadmap',
    body: 'Every roadmap comes with an ROI calculator so you can see the impact AI is having on the business — not just a list of ideas.',
  },
];

const paths = [
  {
    n: '01',
    title: 'We train you',
    body: 'We show your people how to implement AI inside the business — so your team can run with it after the session.',
  },
  {
    n: '02',
    title: 'We build it for you',
    body: 'Prefer not to DIY? We design and build the AI applications your roadmap identifies, fitted to how you already work.',
  },
  {
    n: '03',
    title: 'Need more time?',
    body: 'One hour isn’t always enough. Buy more hours — or whole days — when the work needs a longer run.',
  },
];

const steps = [
  'Book your monthly hour (Teams or in person where available).',
  'We dig into real work, bottlenecks, data, and goals.',
  'You get a clear AI roadmap plus an ROI calculator.',
  'Choose: we train you to implement, or we build it for you.',
  'Come back next month — the hour resets with your subscription.',
];

export default function AiConsultancyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow mb-3">AI consultancy</p>
        <h1 className="display text-4xl sm:text-6xl">
          Your monthly AI hour.
          <br />
          <span className="gradient-text">A roadmap. Real options. ROI you can see.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#8a8f98]">
          As an Override subscriber, each customer gets an hour of AI consultancy per month. We use
          that time to produce an AI roadmap for your business — then you choose how far we go with
          you.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {included.map((item) => (
          <article key={item.title} className="card p-6 sm:p-7">
            <h2 className="text-xl font-semibold tracking-tight text-white">{item.title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#8a8f98]">{item.body}</p>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <p className="eyebrow mb-3">After the roadmap</p>
        <h2 className="display text-3xl sm:text-4xl">We present options.</h2>
        <p className="mt-4 max-w-2xl text-lg text-[#8a8f98]">
          You’re not locked into one path. We show you the choices clearly.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {paths.map((p) => (
            <article
              key={p.n}
              className="card bg-gradient-to-b from-white/[0.05] to-transparent p-6"
            >
              <span className="font-mono text-sm text-[#7170ff]">{p.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#8a8f98]">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#12131a] via-[#0b0c12] to-[#15102a] p-6 sm:p-10">
        <p className="eyebrow mb-3">How a session runs</p>
        <h2 className="display text-2xl sm:text-3xl">Simple. Practical. Yours.</h2>
        <ol className="mt-8 space-y-3">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-4 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3">
              <span className="font-mono text-sm text-[#7170ff]">0{i + 1}</span>
              <span className="text-[15px] text-[#d0d6e0]">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 grid gap-4 lg:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Included with Override</h2>
          <ul className="mt-5 space-y-3 text-[15px] text-[#8a8f98]">
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> 1 hour AI consultancy per month per
              customer
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> AI roadmap produced in those sessions
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> ROI calculator with every roadmap
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Teams by default; in person where geography
              allows
            </li>
          </ul>
        </div>
        <div className="card p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Extra if you want it</h2>
          <ul className="mt-5 space-y-3 text-[15px] text-[#8a8f98]">
            <li className="flex gap-2">
              <span className="text-[#7170ff]">+</span> More consultancy hours
            </li>
            <li className="flex gap-2">
              <span className="text-[#7170ff]">+</span> Full days when the work needs depth
            </li>
            <li className="flex gap-2">
              <span className="text-[#7170ff]">+</span> We build the AI applications for you
            </li>
            <li className="flex gap-2">
              <span className="text-[#7170ff]">+</span> Hands-on training for your team to implement
              themselves
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-16 rounded-3xl border border-white/[0.1] bg-white/[0.02] px-6 py-12 text-center sm:px-12">
        <h2 className="display text-2xl sm:text-3xl">Want the monthly hour working for you?</h2>
        <p className="mx-auto mt-4 max-w-xl text-[#8a8f98]">
          Join Override, book the session, and leave with a roadmap — not another vague AI chat.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/book-consultation" className="btn-primary">
            Book a walkthrough
          </Link>
          <Link href="/pricing" className="btn-ghost">
            See pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
