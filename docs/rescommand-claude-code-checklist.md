# ResCommand Website - Claude Code Execution Checklist

## ⚡ Quick Reference for Building

**Project:** ResCommand Marketing Website  
**Tech:** Next.js 14 + TypeScript + Tailwind CSS  
**Design:** Scramblers Golf dark aesthetic (navy + sky blue)  
**Target Browsers:** Chrome, Firefox, Safari (latest 2 versions)  
**Mobile First:** Yes (test 320px, 768px, 1024px+)  

---

## Phase 1: Project Setup

### Initialize Next.js Project
```bash
npx create-next-app@latest rescommand --typescript --tailwind
# Accept defaults, say yes to TypeScript, Tailwind, App Router
```

### Install Dependencies
```bash
npm install -D @tailwindcss/forms @tailwindcss/typography
npm install next-font lucide-react react-hook-form zod zustand
npm install clsx tailwind-merge
```

### Font Setup (Add to app/layout.tsx)
```typescript
import { Fraunces, Hanken_Grotesk } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-fraunces',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken-grotesk',
})
```

### Directory Structure
```
rescommand/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── features/page.tsx
│   ├── pricing/page.tsx
│   ├── demo/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── about/page.tsx
│   ├── help/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── layout/Header.tsx
│   ├── layout/Footer.tsx
│   ├── ui/Button.tsx
│   ├── ui/Card.tsx
│   └── ... (rest of components)
├── content/blog/
│   ├── post-1.mdx
│   ├── post-2.mdx
│   └── ... (5 placeholder posts)
├── lib/
│   ├── blogMeta.ts
│   ├── constants.ts
│   └── utils.ts
├── public/
│   └── images/
├── styles/
│   ├── globals.css
│   └── theme.css
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Phase 2: Design System Implementation

### Colors (In tailwind.config.ts)
✅ Navy Primary: `#010D17`  
✅ Navy Panel: `#071A2C`  
✅ Navy Deep: `#0C2740`  
✅ Sky Accent: `#6BB3DE`  
✅ Sky Bright: `#9AD0F0`  
✅ Ink Text: `#EAF2F8`  
✅ Muted Text: `#8DA4B8`  
✅ Success: `#2D8659`  
✅ Warning: `#D97706`  
✅ Error: `#DC2626`  

### Typography (In tailwind.config.ts)
✅ Display Font: Fraunces (bold, headlines)  
✅ Body Font: Hanken Grotesk (all text/UI)  
✅ H1: 56–64px (Fraunces 700)  
✅ H2: 40–48px (Fraunces 700)  
✅ H3: 32–36px (Fraunces 600)  
✅ Body: 16–18px (Hanken 400)  
✅ Small: 12–14px (Hanken 400)  

### Spacing (8px Grid)
✅ Use `spacing-1` = 8px, `spacing-2` = 16px, etc.  
✅ Container: `max-w-6xl`  
✅ Gutter (desktop): `gap-6` or `gap-8`  
✅ Section padding: `py-12 sm:py-16 lg:py-20`  

---

## Phase 3: Component Library

### Essential Components to Build

**Layout Components:**
- [ ] Header.tsx (nav + logo + CTA button)
- [ ] Footer.tsx (4-column footer)
- [ ] Container.tsx (max-width wrapper)
- [ ] Section.tsx (full-width section + padding)

**UI Components:**
- [ ] Button.tsx (primary, secondary, ghost, link variants)
- [ ] Card.tsx (base card with hover lift)
- [ ] Badge.tsx (tags, category labels)
- [ ] FormInput.tsx (text input with Zod validation)
- [ ] FormTextarea.tsx (textarea)
- [ ] FormSelect.tsx (dropdown)
- [ ] YouTubeEmbed.tsx (iframe wrapper)
- [ ] Accordion.tsx (collapsible sections)
- [ ] Modal.tsx (for modals, if needed)

**Section Components:**
- [ ] Hero.tsx (full-width hero with CTA)
- [ ] ProblemSection.tsx (3-column cards)
- [ ] FeaturesGrid.tsx (4-column grid)
- [ ] VideoSection.tsx (YouTube embed + copy)
- [ ] TestimonialSection.tsx (3-column testimonials)
- [ ] CTASection.tsx (full-width CTA with button)
- [ ] PricingCards.tsx (pricing plan cards)
- [ ] BlogGrid.tsx (blog post cards)
- [ ] PostCard.tsx (individual blog post card)
- [ ] FAQAccordion.tsx (FAQ section)

### Component Standards
✅ TypeScript interfaces/types for all props  
✅ Semantic HTML (proper heading hierarchy)  
✅ ARIA labels for interactive elements  
✅ Responsive props (className for breakpoints)  
✅ No inline styles (use Tailwind only)  
✅ Reusable, composable (DRY principle)  

---

## Phase 4: Pages & Routing

### Homepage (/page.tsx)
```
✅ Hero section
✅ Problem section (3 cards)
✅ Solution split layout
✅ Features grid (4 cards)
✅ Dashboard preview (YouTube embed)
✅ Testimonials (3 cards)
✅ Pricing preview
✅ Final CTA section
```

### Features Page (/features/page.tsx)
```
✅ Hero
✅ Team Scheduling (expand/tab)
✅ Inventory & Par (expand/tab)
✅ Recipes & Prep (expand/tab)
✅ Compliance (expand/tab)
✅ CTA: "See demo"
```

### Pricing Page (/pricing/page.tsx)
```
✅ Hero
✅ Pricing table (2 tiers: Starter, Pro)
✅ Feature comparison (checkmarks/crosses)
✅ FAQ accordion
✅ CTA: "Start Free Trial"
```

### Demo Page (/demo/page.tsx)
```
✅ Left: Demo booking form (Calendly embed or Google Calendar form)
✅ Right: YouTube embed placeholder
✅ Mobile: Stack vertically
✅ Form validation with Zod
✅ Success message after submit
```

### Blog Landing (/blog/page.tsx)
```
✅ Hero section
✅ Filter buttons (All, Scheduling, Food Cost, Compliance, Operations)
✅ Blog grid (3 columns, responsive)
✅ Each card: thumbnail, category, title, excerpt, read time, link
✅ Related posts section
```

### Blog Post ([slug]/page.tsx)
```
✅ Meta: title, date, author, read time, category
✅ Featured image
✅ Body content (MDX rendered)
✅ Images embedded full-width
✅ Code blocks with syntax highlight
✅ Related posts (3 cards at bottom)
✅ CTA: "Ready to try ResCommand?"
```

### About Page (/about/page.tsx)
```
✅ Hero: "Built by operators..."
✅ Origin story (split: text left, image right)
✅ Philosophy section (3 columns)
✅ Team placeholder (to be filled)
✅ CTA: "Book a demo"
```

### Help/FAQ Page (/help/page.tsx)
```
✅ Hero
✅ Accordion sections (6–7 sections, 4–5 items each)
✅ FAQ styling: headers in Fraunces
✅ Bottom CTA: Email support
```

### Privacy & Terms Pages
✅ Simple page layout with formatted text  
✅ Placeholder legal text (to be customized later)  

---

## Phase 5: Blog Infrastructure

### Blog Setup (MDX)
```bash
npm install mdx-bundler gray-matter
# OR
npm install @mdx-js/react @mdx-js/mdx
```

### Content Structure (content/blog/)
```
post-1.mdx (How to Cut Food Costs)
post-2.mdx (Your Team Wants to Love Their Schedule)
post-3.mdx (Compliance Doesn't Have to Be a Nightmare)
post-4.mdx (Duffers Donuts: How We Standardized Recipes)
post-5.mdx (The True Cost of Manual Scheduling)
```

### Blog Post Frontmatter (Example)
```yaml
---
title: "How to Cut Food Costs Without Cutting Quality"
excerpt: "Practical tips for inventory and par sheet management"
author: "ResCommand Team"
date: "2024-01-15"
category: "Food Cost"
readTime: "5"
featured: false
---
```

### Blog Generation Functions (lib/blogMeta.ts)
```typescript
✅ getSortedPosts() - Returns all posts sorted by date
✅ getPostBySlug(slug) - Returns single post + metadata
✅ getPostsByCategory(category) - Filter by category
✅ getAllPostSlugs() - For static generation
```

---

## Phase 6: Integrations

### Google Calendar API (Demo Booking)
Option A: Use Calendly embed (simpler, pre-built)
```tsx
<iframe src="https://calendly.com/[your-link]" />
```

Option B: Custom Google Calendar integration
```typescript
✅ OAuth 2.0 flow setup
✅ Create calendar event endpoint (/api/calendar)
✅ Form → email → calendar event
```

### Email Notifications (SendGrid or Resend)
```typescript
✅ On demo booking: send confirmation email
✅ Template: booking details + link to calendar
✅ API route: /api/email/demo-confirmation
```

### Analytics Setup
```typescript
✅ Vercel Web Analytics (built-in, no config needed)
✅ Google Analytics 4 (gtag.js in head)
✅ Tracking IDs in environment variables
✅ Track events:
   - CTA clicks ("Book Demo")
   - Demo form submissions
   - Blog post views
   - Pricing page visits
```

### SEO Setup
```typescript
✅ generateMetadata() on all pages
✅ Structured data (JSON-LD): Organization, LocalBusiness, FAQPage
✅ Sitemap generation (/sitemap.xml)
✅ robots.txt
✅ Open Graph tags (og:image, og:title, etc.)
✅ Canonical URLs
```

---

## Phase 7: Styling & Polish

### Global Styles (styles/globals.css)
✅ CSS variables loaded from theme.css  
✅ Reset base styles  
✅ Button, card, link, form styles  
✅ Utility classes (.text-ink, .bg-navy-panel, etc.)  

### Animations
✅ fadeIn, slideUp, slideDown, slideRight, slideLeft  
✅ Hover states: lift on cards, glow on buttons  
✅ Smooth transitions (300ms default)  
✅ No animations for users with `prefers-reduced-motion`  

### Responsive Design
✅ Mobile-first breakpoints: 320px, 640px, 768px, 1024px, 1280px  
✅ Test on iPhone SE (320px), iPad (768px), Desktop (1024px+)  
✅ Grids: 1 col (mobile), 2 col (tablet), 3–4 col (desktop)  
✅ Images: use `next/image` for optimization  

### Performance
✅ Image optimization (Next.js Image component)  
✅ Font subsetting (Latin only)  
✅ Lazy load off-screen sections  
✅ Code splitting (dynamic imports for heavy components)  
✅ No render-blocking resources  

### Accessibility
✅ WCAG 2.1 AA standard  
✅ Semantic HTML (nav, main, section, article)  
✅ ARIA labels on buttons, forms  
✅ Color contrast: 4.5:1 for text, 3:1 for graphics  
✅ Keyboard navigation (Tab, Enter, Arrow keys)  
✅ Form labels tied to inputs  
✅ Alt text on all images  

---

## Phase 8: Quality Assurance

### Testing Checklist
- [ ] All pages load without console errors
- [ ] Responsive design: test 320px, 768px, 1024px
- [ ] Forms validate (required fields, email format)
- [ ] Links work (internal + external)
- [ ] Demo booking form submits successfully
- [ ] YouTube embed placeholder displays correctly
- [ ] Blog posts render with proper formatting
- [ ] Images load and display correctly
- [ ] Colors match design system exactly
- [ ] Typography sizes and weights correct
- [ ] Buttons have hover/active states
- [ ] Footer links work
- [ ] Navigation accessible via keyboard
- [ ] Analytics events firing (dev console)

### Browser Testing
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Chrome (iOS)
- [ ] Mobile Safari (iOS)

### Performance Targets
- [ ] Lighthouse score: 90+ Core Web Vitals
- [ ] First Contentful Paint (FCP): <1.5s
- [ ] Largest Contentful Paint (LCP): <2.5s
- [ ] Cumulative Layout Shift (CLS): <0.1
- [ ] Time to Interactive (TTI): <3.5s

---

## Phase 9: Deployment Preparation

### Before Pushing to GitHub
```bash
✅ npm run build -- test build locally
✅ npm run lint -- check for errors
✅ npm run format -- format code
✅ Remove console.logs and debugging code
✅ Check .env.example is in repo (no secrets)
```

### GitHub Setup
```bash
✅ Create repo: rescommand-website
✅ Push all code to main branch
✅ Create .env.local (never commit)
✅ Create .gitignore (node_modules, .env.local, .next)
```

### Vercel Deployment
```
✅ Link GitHub repo to Vercel project
✅ Set environment variables (NEXT_PUBLIC_GA_ID, etc.)
✅ Configure production domain (rescommand.com)
✅ Enable "Automatically deploy on push to main"
✅ Test preview deployments
✅ Verify production build on Vercel
```

### DNS & Domain
```
✅ Vercel provides 2 nameservers
✅ Point rescommand.com registrar to Vercel nameservers
✅ Propagation: 24–48 hours
✅ Verify DNS on Vercel dashboard (green checkmark)
```

---

## Phase 10: Content & Final Touches

### Content Needs (Provided Separately)
- [ ] Homepage copy (headlines, benefits, CTAs)
- [ ] Features page copy (deep dives)
- [ ] Pricing copy (terms, FAQ)
- [ ] About page story + team info
- [ ] Help/FAQ answers
- [ ] 5 blog post outlines/drafts

### Images Needed
- [ ] Hero mockup or lifestyle photo (1200x800)
- [ ] Feature screenshots (5 @ 1000x800 each)
- [ ] Duffers operation photo (1200x800)
- [ ] Testimonial avatars (3 @ 150x150)
- [ ] Blog featured images (1200x600 each)

### Post-Launch Setup (You Handle)
- [ ] Google Calendar API credentials (OAuth)
- [ ] SendGrid/Resend API key
- [ ] Google Analytics property ID
- [ ] Google Search Console verification
- [ ] Analytics tracking events test
- [ ] Email notification test

---

## 🎯 Success Criteria

### Code Quality
✅ No TypeScript errors  
✅ No console warnings  
✅ Semantic HTML  
✅ Accessible (WCAG 2.1 AA)  
✅ Mobile responsive  
✅ Performance optimized  

### Design Fidelity
✅ Colors match exactly (#010D17, #6BB3DE, etc.)  
✅ Typography: Fraunces (display) + Hanken Grotesk (body)  
✅ Spacing: 8px grid consistent  
✅ Shadows: subtle only  
✅ Hover states: sky blue accents + lift  

### Functionality
✅ All pages render  
✅ Navigation works  
✅ Demo booking form submits  
✅ Blog posts display  
✅ Links functional  
✅ Analytics firing  

### Performance
✅ Lighthouse 90+  
✅ FCP <1.5s  
✅ LCP <2.5s  
✅ CLS <0.1  

---

## 📋 Handoff Artifacts

You will receive:
1. ✅ Full Next.js project on GitHub
2. ✅ All pages built and functional
3. ✅ Design system implemented (Tailwind + CSS vars)
4. ✅ Blog infrastructure ready (MDX placeholders)
5. ✅ Components library (reusable, documented)
6. ✅ SEO setup (metadata, schema, sitemap)
7. ✅ Analytics tracking (code in place)
8. ✅ Deployment config (ready for Vercel)

You will need to:
1. 📝 Write final copy + add to pages
2. 📷 Source and optimize images
3. 🔑 Set up API keys (Google Calendar, SendGrid)
4. 🚀 Deploy to Vercel + configure domain
5. ✅ Final QA & launch

---

## 💡 Pro Tips

- Build reusable components first (Button, Card, Badge)
- Use Tailwind classes consistently (no custom CSS)
- Test responsive design throughout, not at the end
- Commit frequently to GitHub (good practice)
- Keep components focused and small
- Extract magic numbers to constants (colors, sizes)
- Use TypeScript strict mode (`strict: true`)
- Add comments for complex sections
- Keep animations subtle (respect `prefers-reduced-motion`)

---

**Ready to build. Let's go! 🚀**
