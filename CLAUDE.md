# CLAUDE.md — Southern NH Digital

## Project Overview

This is the codebase for **Southern NH Digital** (southernnhdigital.com), a local business digital services company based in Southern New Hampshire. The site serves two purposes:

1. **Main business site** at the root (`/`) — sells our web design and Google optimization services to local businesses
2. **Demo sites** under `/demo/` — fully functional example sites that showcase what we build for clients. These are our product demos.

The owner is Jesse Morin, a 22-year-old GM-certified automotive technician and CS student at SNHU, building this business to exit the automotive industry.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Forms:** Formspree (form ID: xzdjvaeq)
- **Deployment:** Vercel (not yet deployed)
- **Domain:** southernnhdigital.com (not yet purchased)
- **Dev Environment:** WSL2 Ubuntu on Windows 11, Neovim with oil.nvim + LSP, tmux

## Design Decisions Already Made

### Main Site (/)
- **Theme:** Dark background (#0A0A0A), gold accents (#D4A017), cream text (#E8E4DF)
- **Fonts:** Playfair Display (headlines), Outfit (body)
- **Vibe:** Dark, professional, premium
- **Layout:** Left-aligned hero, single page with smooth scroll navigation
- **Form:** Audit request form with fields: name, business name, phone, website (optional)
- **Phone:** (603) 260-8830
- **Email:** jesse@southernnhdigital.com

### Auto Repair Demo Site (/demo/auto)
- **Theme:** Light background, emerald green (#047857 range) accents
- **Fonts:** DM Serif Display (headlines), DM Sans (body)
- **Vibe:** Clean, trustworthy, approachable — mid-level shop, not luxury
- **Fake business:** "Granite State Auto Repair" — Manchester, NH, 15+ years, family-owned
- **Phone:** (603) 555-0147
- **Address:** 247 Valley Street, Manchester, NH 03103
- **Multi-page site** with individual service pages (see structure below)

## Auto Demo Site Structure

This is the complete page and section structure. Build exactly this.

### Global Elements (every page)

**Header:**
- Logo / shop name (left)
- Nav links: Services, About, Reviews, Specials, Gallery, Contact
- Phone number (visible, clickable)
- "Schedule Service" CTA button
- Mobile: hamburger menu + phone number prominent

**Footer:**
- Shop name + tagline
- Address + map link
- Phone + email
- Hours of operation
- Quick links to all pages
- Services list
- Service area (towns covered)
- Payment methods accepted
- Certifications (ASE, AAA)
- "Built by Southern NH Digital" credit link
- Copyright + Privacy Policy link

**Sticky mobile CTA:**
- Fixed bar at bottom on mobile: "Call" and "Schedule" buttons

### PAGE 1: HOMEPAGE (app/demo/auto/page.tsx)

1. Hero — full background image, badge (Google rating), headline, subheadline, 2 CTAs, trust signals
2. Trust Bar — 4 stats: rating, years, certification, warranty
3. Services Overview — grid of all services with icon, title, short desc, price, link to individual page
4. Specials — 3-4 current deals with badges, prices, "Claim Offer" CTA
5. Why Choose Us — 4-6 reasons grid
6. Reviews Snippet — 3 featured reviews + "Read All Reviews" link
7. Gallery Preview — 4-6 photos + "See More" link
8. Service Area — towns served + optional map
9. CTA Banner — headline + 2 buttons

### PAGE 2: SERVICES OVERVIEW (app/demo/auto/services/page.tsx)

1. Page header — headline + subheadline
2. Services grid — all services, each linking to individual page
3. Brands We Service — car brand grid
4. CTA — "Schedule a free inspection"

### PAGES 2a-2h: INDIVIDUAL SERVICE PAGES (app/demo/auto/services/[slug]/page.tsx)

Each follows same template:
1. Service Hero — title, description, starting price, CTA
2. What's Included — detailed breakdown
3. Signs You Need This Service — common symptoms
4. Our Process — step by step what happens
5. Pricing — range, what affects cost, "written estimate before work"
6. FAQ — 3-4 service-specific questions
7. CTA — "Ready to schedule your [service]?"

Services:
- oil-changes (Oil Changes & Maintenance)
- brakes (Brake Service & Repair)
- diagnostics (Engine Diagnostics)
- inspections (NH State Inspections)
- steering-suspension (Steering & Suspension)
- transmission (Transmission Service)
- ac-heating (AC & Heating)
- electrical (Electrical & Battery)

### PAGE 3: ABOUT (app/demo/auto/about/page.tsx)

1. Page header with background image
2. The Story — how shop started, values, what makes them different
3. Meet the Team — photo, name, role, bio, certs per person
4. Certifications & Affiliations — ASE, AAA, BBB logos
5. Our Shop — 3-4 facility photos
6. CTA

### PAGE 4: REVIEWS (app/demo/auto/reviews/page.tsx)

1. Page header with overall rating
2. Featured Reviews — 6-10 review cards
3. Review Platforms — links to Google, Yelp, Facebook
4. CTA

### PAGE 5: SPECIALS (app/demo/auto/specials/page.tsx)

1. Page header
2. Active Specials — all current deals as cards
3. First-Time Customer Offer — highlighted
4. CTA

### PAGE 6: GALLERY (app/demo/auto/gallery/page.tsx)

1. Page header
2. Photo grid — 12-20 photos by category (Shop, Team, Work, Waiting Area)
3. CTA

### PAGE 7: CONTACT (app/demo/auto/contact/page.tsx)

1. Page header
2. Two-column: info (phone, email, address, hours, service area) + service request form
3. Full-width Google Map
4. Service area list

### PAGE 8: FAQ (app/demo/auto/faq/page.tsx)

1. Page header
2. Collapsible accordion organized by category
3. CTA

## Folder Structure

```
app/
  demo/
    auto/
      page.tsx              ← homepage assembles sections
      layout.tsx            ← shared header + footer
      data/
        services.ts         ← service data + individual page content
        reviews.ts          ← review data
        specials.ts         ← specials data
        faqs.ts             ← FAQ data
        shop-info.ts        ← phone, address, hours, service area, team
      components/
        ui/
          Button.tsx
          SectionHeader.tsx
          StarRating.tsx
          FadeIn.tsx
        sections/
          Hero.tsx
          TrustBar.tsx
          ServicesOverview.tsx
          Specials.tsx
          WhyChooseUs.tsx
          ReviewsSnippet.tsx
          GalleryPreview.tsx
          ServiceArea.tsx
          CtaBanner.tsx
        layout/
          Header.tsx
          Footer.tsx
          MobileStickyCta.tsx
      services/
        page.tsx            ← services overview
        [slug]/
          page.tsx          ← individual service pages
      about/
        page.tsx
      reviews/
        page.tsx
      specials/
        page.tsx
      gallery/
        page.tsx
      contact/
        page.tsx
      faq/
        page.tsx
```

## Component Architecture

- **Data is separate from components.** All business data lives in `data/` files. Components import from there.
- **Sections are individual files.** Each homepage section is its own component in `sections/`.
- **Shared UI components** (Button, SectionHeader, FadeIn, StarRating) are reusable across all pages.
- **The layout wraps all auto demo pages** with the shared Header and Footer.
- **Individual service pages use dynamic routes** with [slug] and pull content from services.ts.

## Coding Style

- Use TypeScript
- Use Tailwind classes, avoid inline styles
- Use "use client" only on components that need interactivity (forms, scroll animations, mobile menu)
- Keep server components where possible
- Use semantic HTML (section, nav, main, footer, article)
- All images use Unsplash URLs for the demo (real client sites will use actual photos)
- Mobile-first responsive design
- All phone numbers must be clickable tel: links
- Every page must have clear CTAs that drive to the contact/scheduling form

## Important Context

- This demo site IS the product Jesse sells to auto shop owners. It needs to be comprehensive and impressive enough that a shop owner looks at it and says "I want this for my business."
- Every decision should prioritize what makes a local shop owner pick up the phone.
- The demo banner at the top of every page links back to southernnhdigital.com with "Want one like this?"
- Stock photos from Unsplash are acceptable for the demo. Real client sites would use actual shop photos.

## Session Memory

When working on this project, update this section with what was accomplished and what's next.

### Last Session
- Set up project with Next.js + Tailwind
- Built main site (/) with all sections + Formspree audit form
- Built initial auto demo page (single page version)
- Defined complete multi-page site structure
- Set up dev environment: WSL2, tmux, neovim with oil.nvim + LSP + treesitter + autocomplete

### Next Steps
- Create folder structure for auto demo
- Create data files (shop-info.ts, services.ts, reviews.ts, specials.ts, faqs.ts)
- Create shared UI components (Button, SectionHeader, StarRating, FadeIn)
- Create layout (Header, Footer, MobileStickyCta)
- Build homepage sections one at a time starting with Hero
- Then build individual pages (services, about, reviews, etc.)
