# KORAH — corporate site

The KORAH homepage and corporate site: an African technology company building
products that solve real-world problems. Next.js (App Router), TypeScript,
Tailwind v4, bilingual EN/FR, with its own backend for forms and analytics.

```
npm install
npm run dev      # http://localhost:3000 → redirects to /en or /fr
npm run build
npm start
```

---

## Brand

Everything visual is derived from the logo. The two brand colours were sampled
straight out of `public/brand/korah-logo.png`:

| Token | Value | Use |
| --- | --- | --- |
| `--color-korah-purple` | `#72489D` | the left loop of the mark |
| `--color-korah-pink` | `#F280B0` | the right loop and the diagonal |
| `--color-ink-950` | `#07040D` | page ground, purple-tinted near-black |

Design direction: premium technology · African roots · futuristic minimalism.
Large type, generous space, slow motion, high contrast, no stock imagery.

Generated brand assets (all in `public/brand/`):

- `korah-logo.png` — the original file, untouched
- `korah-lockup.png` / `korah-mark.png` / `korah-wordmark.png` — trimmed cuts
- `icon-192.png`, `icon-512.png`, `og.png` — PWA icons and the Open Graph card
- `src/app/icon.png`, `src/app/apple-icon.png` — favicons, picked up by Next

---

## Structure

```
src/
├── app/
│   ├── [locale]/            every page, under /en or /fr
│   │   ├── page.tsx         the homepage — the whole narrative, in order
│   │   ├── solutions/       portfolio index + /solutions/[slug]
│   │   ├── about/ vision/ partners/ contact/
│   │   └── (legal)/[legalSlug]   privacy · terms · cookies
│   ├── api/                 contact · partners · analytics · health
│   ├── sitemap.ts robots.ts manifest.ts
│   └── globals.css          the design system
├── components/
│   ├── layout/              Navbar · Footer · PageHero · LanguageSwitcher
│   ├── sections/            one file per homepage section
│   ├── forms/               ContactForm · PartnerForm · shared fields
│   ├── visuals/             HeroBackdrop · ProductVisual (inline SVG)
│   └── ui/                  Logo · CtaLink · Reveal · Counter · SectionHeader
├── data/                    products · founders · stats · legal · site
├── i18n/                    config + en/fr dictionaries (type-checked parity)
├── lib/                     analytics · validation · storage · mailer · rate-limit
└── middleware.ts            locale negotiation and redirect
```

### Adding a product

Add one object to `src/data/products.ts`. It appears automatically in the
homepage grid, `/solutions`, its own `/solutions/[slug]` page, the footer, the
sitemap and the JSON-LD. `span` picks its weight in the editorial grid
(`hero` → 4 columns, `wide`/`standard` → 2).

### Adding a language

Add the code to `src/i18n/config.ts` and a dictionary next to `en.ts`. The
dictionary is typed against the English one, so a missing key is a build error.

---

## Backend

Four route handlers, all Node runtime, no database to provision.

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/contact` | POST | contact form — validate, store, notify |
| `/api/partners` | POST | partnership form — same pipeline |
| `/api/analytics` | POST | first-party event sink, always answers 204 |
| `/api/health` | GET | liveness + what is configured |

Every submission is validated with Zod, rate-limited per IP (5 per 10 minutes),
screened by a honeypot field, and appended as JSONL under `KORAH_DATA_DIR`
(default `./.data`). Email notification goes out through the Resend HTTP API
when `RESEND_API_KEY` and `KORAH_NOTIFY_EMAIL` are set — and when they are not,
the submission is still stored, so a missing key can never lose a lead.

Migrating to Postgres later is a replay of those JSONL files: swap the body of
`src/lib/storage.ts`, nothing else changes.

Copy `.env.example` to `.env.local` and fill in what you need.

---

## Analytics

`src/lib/analytics.ts` emits to whatever vendor is present on the page
(`dataLayer`, `gtag`, Plausible, Umami) **and** mirrors every event to
`/api/analytics`, so the funnel is measurable with no third-party script
installed. Events: `cta_explore_solutions`, `cta_partner`, `cta_contact`,
`product_view`, `language_switch`, `scroll_depth`, `form_submit`.

No cookie is used for measurement. The only cookie the site sets is
`korah_locale`, which remembers the chosen language.

---

## Performance and accessibility

- No animation library. Scroll reveals are CSS transitions toggled by one
  shared `IntersectionObserver`; every animation runs on `transform`/`opacity`.
- No stock imagery. Product visuals are inline SVG, so they cost nothing and
  scale to any size.
- `prefers-reduced-motion` disables all motion, including the stat counters.
- Semantic landmarks, a skip link, visible focus rings, `aria-*` on the process
  tabs and the mobile drawer, real labels and inline errors on both forms.
- `next/font` self-hosts Outfit and Inter; images go through `next/image` with
  AVIF/WebP.

---

## Things to finish before launch

1. **Kozapp and Green** — `src/data/products.ts` marks both `copyPending: true`
   and renders them as an intentional "positioning in definition" state rather
   than inventing a description. Replace `badge`, `description` and `overview`,
   then remove the flag.
2. **APME logo** — the proof section shows a typographic badge. Drop the
   official programme logo into `public/brand/` and swap the badge in
   `src/components/sections/Proof.tsx` once display is authorised.
3. **Founder portraits** — `FounderCard` renders monograms. Add square images to
   `public/team/` and render them there when consistent portraits exist.
4. **Verified numbers** — `src/data/stats.ts` holds the figures shown in the
   "We don't just dream. We build." section. Confirm each one before launch.
5. **Social handles** — the URLs in `src/data/site.ts` are placeholders.
6. **Legal review** — `src/data/legal.ts` describes accurately what this site
   does today; have counsel review it.
7. **`NEXT_PUBLIC_SITE_URL`** — set it to the production origin so canonicals,
   hreflang and the sitemap point at the right place.
