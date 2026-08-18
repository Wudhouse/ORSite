import Link from 'next/link';
import type { Metadata } from 'next';
import { existsSync } from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Override — Watch. Fire your MSP.',
  description:
    'Watch the office manager take IT back. Override is the AI that runs your IT. Fire your MSP.',
};

const films = [
  {
    id: 'ease',
    eyebrow: 'Ease',
    title: 'Stop phoning the middleman',
    body: 'Unlock a sign-in. Add a starter. Remove a leaver. Hand out licences you already pay for. The office manager does it in Override Portal. The MSP never hears about it.',
    src: '/assets/videos/ease.mp4',
    poster: '/assets/videos/ease.jpg',
  },
  {
    id: 'security',
    eyebrow: 'Security',
    title: 'You confirm the dangerous bits',
    body: 'Anything sharp waits for a tap. You confirm. Safer than hoping they patched it. Encryption, Defender, updates, and a PIN — for this company only.',
    src: '/assets/videos/security.mp4',
    poster: '/assets/videos/security.jpg',
  },
  {
    id: 'cost',
    eyebrow: 'Cost',
    title: 'Cheaper than the retainer',
    body: '£19 a person. 30 days free. Month to month. If you have 15 or more people on an IT support contract today, and Override does not cut that bill by £500 a month, your first three months are free.',
    src: '/assets/videos/cost.mp4',
    poster: '/assets/videos/cost.jpg',
  },
];

function mediaExists(publicPath: string) {
  const full = path.join(process.cwd(), 'public', publicPath.replace(/^\//, ''));
  return existsSync(full);
}

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-3xl">
        <p className="eyebrow mb-3">Watch</p>
        <h1 className="display text-4xl sm:text-6xl">
          Watch the office manager take IT back.
        </h1>
        <p className="mt-5 text-lg text-[#8a8f98]">
          Short films about ease, security, and cost — the reasons you leave the middleman.
        </p>
      </div>

      <div className="mt-14 space-y-10">
        {films.map((film) => {
          const hasVideo = mediaExists(film.src);
          const hasPoster = mediaExists(film.poster);

          return (
            <article key={film.id} className="card overflow-hidden p-0 sm:grid sm:grid-cols-[1.15fr_0.85fr]">
              <div className="relative aspect-video bg-black/40 sm:aspect-auto sm:min-h-[16rem]">
                {hasVideo ? (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={hasPoster ? film.poster : undefined}
                  >
                    <source src={film.src} type="video/mp4" />
                  </video>
                ) : (
                  <div className="flex h-full min-h-[14rem] flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#17182a] to-[#0b0c12] px-6 text-center">
                    {hasPoster ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={film.poster}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-40"
                      />
                    ) : null}
                    <p className="relative text-sm font-medium text-[#d0d6e0]">{film.eyebrow}</p>
                    <p className="relative text-xs text-[#62666d]">
                      Film file not in repo yet — drop {film.src.replace('/assets/', 'public/assets/')}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7170ff]">
                  {film.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{film.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#8a8f98]">{film.body}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link href="/pricing" className="btn-primary">
          See prices
        </Link>
        <Link href="/book-consultation" className="btn-ghost">
          Begin your permanent exit
        </Link>
      </div>
    </div>
  );
}
