# VertiCar

**Community mobility for premium societies.**

VertiCar is a membership-based community mobility service for premium urban residential societies in India. Families in high-density vertical living communities get access to a shared, trusted car + dedicated driver — used for daily office commutes, school runs, grandparent errands, and social outings.

> This isn't a cab. It's your community's asset.

## Landing Page

Built with **Next.js 14 + TypeScript + Tailwind CSS**.

### Sections

1. **Hero** — Headline, subheadline, email waitlist CTA
2. **Problem** — 3 pain points: unreliable cabs, no trust, wasted spend
3. **How It Works** — 3 steps: Join → Book via WhatsApp → Ride with neighbours
4. **Benefits** — Trust & safety, cost savings, community, multigenerational
5. **Pricing Teaser** — From ₹3,500/month
6. **Waitlist CTA** — Launching in DLF Phase 5, Gurgaon

### Design

- Deep navy (`#0a0f1e`) + warm gold/amber (`#d4a843`) accents
- Mobile-first, fully responsive
- Premium feel — think Superhuman / Linear, not a cab company
- Waitlist form via Formspree (swap `FORMSPREE_ENDPOINT` in `app/page.tsx`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

One-click deploy on Vercel — just connect the repo.

## Waitlist Form

The form POSTs to Formspree. To activate:
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a form and copy your endpoint
3. Replace `FORMSPREE_ENDPOINT` in `app/page.tsx`
