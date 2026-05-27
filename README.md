# Core AI Solutions Website

Full-stack business website for a UK AI automation consultancy. Live at [coreaisolutions.co.uk](https://coreaisolutions.co.uk).

## The Problem

Most AI consultancies have generic template websites that don't convert. This site needed to demonstrate technical credibility (live AI voice demo), quantify business value (ROI calculator), and convert visitors into booked discovery calls — all while ranking for industry-specific search terms.

## How It Works

- **13 routes** covering homepage, pricing, services, industry landing pages, case studies, and booking
- **Vapi AI voice widget** — live conversational AI demo embedded client-side, visitors can talk to the AI receptionist
- **Cal.com integration** — booking iframe for discovery calls
- **SEO landing pages** — industry-specific pages (plumbers, estate agents, home services) targeting long-tail keywords
- **Static export** — all pages pre-rendered for performance

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Vapi Web SDK (AI voice widget)
- Cal.com (booking)
- Vercel (hosting + CI/CD)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — conversion-optimised with Vapi demo |
| `/pricing` | 3-tier pricing + ROI calculator |
| `/services/ai-receptionist` | AI receptionist deep dive + live demo |
| `/services/workflow-automation` | n8n workflow automation |
| `/services/implementation` | Strategy & audit offer |
| `/industries/plumbers` | SEO landing page |
| `/industries/estate-agents` | SEO landing page |
| `/industries/home-services` | SEO landing page |
| `/case-studies` | Case study hub |
| `/case-studies/luke-finney` | Full case study |
| `/about` | Founder story |
| `/book-demo` | Cal.com booking embed |
| `/proof` | Social proof + results |

## Setup

```bash
git clone https://github.com/CoreAIManny/coreai-website.git
cd coreai-website
npm install
npm run dev     # http://localhost:3000
```

## Configuration

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Claude API key for AI audit route |
| `NEXT_PUBLIC_VAPI_PUBLIC_KEY` | Vapi public key (client-side, safe to expose) |

Copy `.env.example` to `.env.local` and fill in values.

## Deploy

1. Push to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Framework preset: Next.js (auto-detected)
4. Add env vars in Vercel dashboard
5. Deploy

## License

Apache-2.0
