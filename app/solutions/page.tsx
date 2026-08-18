import Link from 'next/link';

const features = [
  {
    group: 'Get help',
    items: [
      {
        name: 'Plain-English Help',
        desc: 'Describe the problem like you’d tell a colleague. Override diagnoses common Microsoft and laptop issues and fixes what it’s allowed to fix.',
      },
      {
        name: 'Get back in (sign-in recovery)',
        desc: 'When someone is locked out of Microsoft, a trusted person can issue a one-time sign-in pass. The code is shown once for safety, then they set up normal access again.',
      },
      {
        name: 'My requests & tickets',
        desc: 'See what’s open, what’s waiting for approval, and what’s done — without chasing email threads.',
      },
    ],
  },
  {
    group: 'Run the office',
    items: [
      {
        name: 'People: starters & leavers',
        desc: 'Create accounts for new joiners and cleanly remove access when someone leaves. The important steps are guided and logged.',
      },
      {
        name: 'Licences & access',
        desc: 'Give people the Microsoft tools they need from the licences you already pay for. Bigger purchases go through the right approver.',
      },
      {
        name: 'Order a laptop',
        desc: 'Company admins order from an approved shortlist, name who it’s for, confirm the price, and track delivery status in one place.',
      },
      {
        name: 'Workplace files & places',
        desc: 'Keep working information about people, places, and day-to-day ops next to the actions — so context isn’t stuck in someone’s inbox.',
      },
    ],
  },
  {
    group: 'Stay in control',
    items: [
      {
        name: 'Approvals',
        desc: 'Team members can ask; Approvers decide. High-impact changes aren’t a free-for-all, and nobody approves their own risky request.',
      },
      {
        name: 'Clear company roles',
        desc: 'Team member, Approver, and Company admin — simple names for who can help themselves, who can help others, and who runs the company settings.',
      },
      {
        name: 'Reports you can actually read',
        desc: 'Company admins get a straightforward view of what’s going on — security and activity without a wall of technical charts.',
      },
      {
        name: 'Audit trail',
        desc: 'Every important action keeps a story: who asked, what changed, and when. Built for businesses that may need to explain themselves later.',
      },
    ],
  },
  {
    group: 'Safety net',
    items: [
      {
        name: 'AI first, humans when needed',
        desc: 'Routine work is handled quickly. If Override can’t finish in about ten minutes, an engineer takes over with full context.',
      },
      {
        name: 'Urgent problems jump the line',
        desc: 'Serious outages don’t sit behind password resets. Critical issues go straight to a person.',
      },
      {
        name: 'Confirm before big changes',
        desc: 'Wiping a device, offboarding, or other high-impact steps ask for a clear yes — with a plain explanation of what will happen.',
      },
    ],
  },
];

export default function Solutions() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Features</p>
          <h1 className="display text-4xl sm:text-5xl">
            Everything in the platform — explained simply.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#8a8f98]">
            No acronym soup. Here’s what Override helps a non-technical team do day to day with
            Microsoft 365 and company devices.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-20 sm:px-6">
        {features.map((section) => (
          <section key={section.group}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#7170ff]">
              {section.group}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <article key={item.name} className="card p-6 sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-white">{item.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#8a8f98]">{item.desc}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="border-t border-white/[0.06] bg-white/[0.02] py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="display text-3xl">Still not sure where your pain fits?</h2>
          <p className="mt-4 text-[#8a8f98]">
            Tell us what slows your office down — locked accounts, slow starters, messy leavers,
            laptop orders, or “we never know what’s going on”. We’ll map it to Override in plain
            English.
          </p>
          <Link href="/book-consultation" className="btn-primary mt-8 inline-flex">
            Talk it through
          </Link>
        </div>
      </div>
    </div>
  );
}
