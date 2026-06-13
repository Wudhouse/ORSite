import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#08101F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-x-8 gap-y-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
                <span className="text-[#0A1628] font-semibold text-xl tracking-[-1px]">OR</span>
              </div>
              <span className="font-semibold text-2xl tracking-[-0.5px]">OverRide</span>
            </div>
            <p className="text-white/60 max-w-xs text-[15px]">
              Modern application development and strategic IT for UK SMEs. Replace your MSP.
            </p>
          </div>

          <div>
            <div className="font-semibold mb-4 text-sm tracking-wider text-white/80">EXPLORE</div>
            <div className="space-y-3 text-sm text-white/70">
              <Link href="/how-it-works" className="block hover:text-white">How It Works</Link>
              <Link href="/solutions" className="block hover:text-white">Solutions</Link>
              <Link href="/results" className="block hover:text-white">Results</Link>
              <Link href="/support-protection" className="block hover:text-white">Support &amp; Protection</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4 text-sm tracking-wider text-white/80">COMPANY</div>
            <div className="space-y-3 text-sm text-white/70">
              <Link href="/book-consultation" className="block hover:text-white">Book Consultation</Link>
              <a href="#" className="block hover:text-white">About Us</a>
              <a href="#" className="block hover:text-white">Careers</a>
              <a href="#" className="block hover:text-white">Blog</a>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4 text-sm tracking-wider text-white/80">LEGAL</div>
            <div className="space-y-3 text-sm text-white/70">
              <a href="#" className="block hover:text-white">Privacy Policy</a>
              <a href="#" className="block hover:text-white">Terms of Service</a>
              <a href="#" className="block hover:text-white">Cyber Security</a>
              <a href="#" className="block hover:text-white">FCA Compliance</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div>© {new Date().getFullYear()} OverRide Ltd. All rights reserved. Registered in England &amp; Wales.</div>
          <div className="flex gap-6">
            <span>London, UK</span>
            <span>hello@override.co.uk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
