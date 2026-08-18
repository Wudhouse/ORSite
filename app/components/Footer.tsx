import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src="/assets/logo-mark.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div>
                <p className="text-sm font-semibold">Override</p>
                <p className="text-[12px] text-[#62666d]">We are not an MSP.</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#8a8f98]">
              The AI that makes MSPs unnecessary. For UK office managers who want to run Microsoft
              IT themselves — month to month, with a human when it’s hard.
            </p>
            <p className="mt-4 text-sm text-[#8a8f98]">
              <Link href="/bring" className="text-[#7170ff] hover:text-[#a5b4fc]">
                Know a company? 3 months free if they become a customer.
              </Link>
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#62666d]">
              Coming as we take customers
            </p>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8f98]">
              Explore
            </p>
            <div className="space-y-3 text-sm text-[#d0d6e0]">
              <Link href="/how-it-works" className="block hover:text-white">
                How it works
              </Link>
              <Link href="/solutions" className="block hover:text-white">
                Features
              </Link>
              <Link href="/pricing" className="block hover:text-white">
                Pricing
              </Link>
              <Link href="/videos" className="block hover:text-white">
                Watch
              </Link>
              <Link href="/declaration" className="block hover:text-white">
                The Declaration
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8f98]">
              Company
            </p>
            <div className="space-y-3 text-sm text-[#d0d6e0]">
              <Link href="/book-consultation" className="block hover:text-white">
                Begin your exit
              </Link>
              <Link href="/bring" className="block hover:text-white">
                Bring a company
              </Link>
              <Link href="/support-protection" className="block hover:text-white">
                Support
              </Link>
              <span className="block text-[#62666d]">London, UK</span>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8f98]">
              Commercial
            </p>
            <div className="space-y-3 text-sm text-[#8a8f98]">
              <p>£19 / person / month</p>
              <p>Shield £29</p>
              <p>30 days free</p>
              <p>Month to month</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[12px] text-[#62666d] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Override. Fire your MSP.</p>
          <p className="font-mono uppercase tracking-[0.14em]">not an msp · ai business</p>
        </div>
      </div>
    </footer>
  );
}
