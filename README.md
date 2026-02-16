# Core AI Solutions Website

Next.js 16 + Tailwind CSS website for [coreaisolutions.co.uk](https://coreaisolutions.co.uk).

## Quick Start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Production build
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy — no env vars needed
5. Add custom domain `coreaisolutions.co.uk` in Vercel dashboard
6. Update DNS at Hostinger to point to Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — conversion-optimised with Vapi demo |
| `/pricing` | 3-tier pricing + ROI calculator |
| `/services/ai-receptionist` | AI receptionist deep dive + live demo |
| `/services/workflow-automation` | n8n workflow automation |
| `/services/implementation` | Strategy & audit offer |
| `/industries/plumbers` | SEO landing page for plumbers |
| `/industries/estate-agents` | SEO landing page for estate agents |
| `/industries/home-services` | SEO landing page for home services |
| `/case-studies` | Case study hub |
| `/case-studies/luke-finney` | Full Luke Finney case study |
| `/blog` | Blog listing (placeholder) |
| `/about` | Manny's story |
| `/book-demo` | Cal.com booking embed |

## Key Integrations

- **Vapi** — AI voice widget (public key embedded client-side)
- **Cal.com** — Booking iframe on `/book-demo`

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Vapi Web SDK
- Static export — all pages pre-rendered
