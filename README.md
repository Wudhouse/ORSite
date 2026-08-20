# Override marketing site (ORSite)

Private marketing site for **Override**.

Audience: UK SME office managers who already loathe their MSP. Override is an **AI business**, not an MSP. Month to month. The office manager runs IT in **Override Portal**.

This repository is **private** and should stay private.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Homepage |
| `/how-it-works` | Day-in-the-life + getting started |
| `/solutions` | Features in plain English |
| `/pricing` | Official commercial pricing |
| `/videos` | Watch — Ease / Security / Cost |
| `/declaration` | The Override Declaration |
| `/bring` | Bring a company (coming as we take customers) |
| `/support-protection` | Human safety net |
| `/results` | Life with Override |
| `/book-consultation` | Book a walkthrough |

## Assets

| Path | Purpose |
| --- | --- |
| `public/assets/logo-mark.png` | Nav / footer mark |
| `public/assets/logo.jpg` | Full cinematic still (hero use only) |
| `public/assets/world.jpg` | Atmosphere |
| `public/assets/videos/*` | 16:9 films + posters (`ease`, `security`, `cost`) |

Do not put the full cinematic still in the header — mark only.

## Copy rules

- Override is an AI business. Do **not** call it an MSP, managed service, or partner.
- Talk to the office manager, not engineers.
- Say **sign-in**, not identity or tenant.
- Product name is **Override Portal**.
- Official pricing lives on `/pricing` and must stay commercial copy. Do not invent extras.
- The **£500 Promise** sits on the pricing page after the plans — not as a homepage-only hero claim without the 15+ clause.
- Do not publish Huntress, MDR, or 24/7 engineers as included.

## Stack

Next.js 16 · React 19 · Tailwind CSS 4
