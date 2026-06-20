# Plan: YAS Media Agency — Pitch Demo

## Goal
Build a **stunning single-page pitch demo** for YAS Media Agency using the `@DivChico/zone-marketing` template. The demo will:
- Use the YAS brand colors (purple `#8311d4`, yellow `#fbef2d`, dark `#050505`)
- Use the YAS SVG wordmark as logo
- Support Arabic/English toggle (with RTL/LTR direction switching)
- Be a single-page experience (homepage) that showcases all capabilities
- Other pages exist in the codebase but are hidden from navigation
- Include WhatsApp integration, contact form, SEO meta tags

---

## Subtask 1 — Theme Customization (YAS Brand Colors)
- **Worker:** general
- **Depends on:** none
- **Files to modify:**
  - `src/theme/palette.ts` — Replace colors with YAS brand:
    - Primary: `#8311d4` (purple)
    - Secondary: `#fbef2d` (yellow)
    - Background default: `#050505` (dark) for dark mode
    - Text: adjusted for dark theme readability
    - Grey palette: adjusted for dark background
  - `src/theme/typography.ts` — Update font to Manrope (if needed)
  - `src/components/settings/config-setting.ts` — Change default to `themeMode: 'dark'`, `themeDirection: 'ltr'`
- **Expected output:** The theme file(s) modified with YAS colors

## Subtask 2 — YAS SVG Logo
- **Worker:** general
- **Depends on:** none
- **Files to modify:**
  - Create `public/assets/logo/yas-logo.svg` — Extract YAS wordmark SVG from old website HTML
  - `src/components/logo/Logo.tsx` — Replace the default ZONE logo with the YAS SVG wordmark
- **Expected output:** YAS logo appears in header and footer

## Subtask 3 — Navigation & Header
- **Worker:** general
- **Depends on:** Subtask 2 (logo)
- **Files to modify:**
  - `src/layouts/main/nav/config-navigation.ts` — Point all nav items to `/` (single page with anchor links like `/#services`, `/#portfolio`, `/#contact`)
  - `src/layouts/main/header/Header.tsx` — Add language selector toggle (Arabic/English), update CTA button to "Work With Us"
  - Create a language context/switch component that toggles `themeDirection` between 'rtl' and 'ltr'
- **Expected output:** Header shows YAS logo, nav items scroll to sections on same page, language toggle works

## Subtask 4 — Footer Customization
- **Worker:** general
- **Depends on:** Subtask 2 (logo)
- **Files to modify:**
  - `src/layouts/main/footer/Footer.tsx` — Replace placeholder content with YAS info:
    - YAS logo
    - Tagline: "AI-Native Digital Marketing Agency — Riyadh, KSA"
    - Contact: info@yasmedia.com, phone, address
    - Social links: Instagram, Behance, WhatsApp
    - Copyright: "© 2025 YAS Media Agency. All rights reserved"
- **Expected output:** Professional footer with YAS branding

## Subtask 5 — Homepage Hero Section
- **Worker:** general (frontend focus)
- **Depends on:** Subtask 1 (theme)
- **Files to modify/create:**
  - Rewrite `src/sections/_marketing/landing/MarketingLandingHero.tsx` — Create a stunning dark-theme hero:
    - Glass-morphism panel (as seen in old site)
    - Tagline: "AI-Native Digital Marketing Agency"
    - Headline: something impactful about driving growth with AI
    - CTA buttons: "Start a Project" / "View Showcase"
    - Purple glow effects and decorative elements
    - Responsive: image panel on desktop, stacked on mobile
  - Reference the old website design language (glass panels, purple glow, rounded corners)
- **Expected output:** Stunning hero section matching YAS brand

## Subtask 6 — Homepage Services Section
- **Worker:** general (frontend focus)
- **Depends on:** Subtask 1 (theme)
- **Files to modify:**
  - Rewrite `src/sections/_marketing/landing/MarketingLandingServices.tsx` — Services grid:
    - Digital Marketing, Campaign Management, Social Media, Brand Identity, Content Creation, SEO, Digital Transformation, AI & Automation, CRM & Marketing Automation
    - Each with icon, title, brief description, hover effects (glass-to-purple like old site)
    - 3-column grid with cards
- **Expected output:** Services section showcasing full capability

## Subtask 7 — Homepage About / Stats / Clients / Process / Portfolio / Contact Sections
- **Worker:** general (frontend focus)
- **Depends on:** Subtask 1 (theme)
- **Files to modify/create:**
  - Rewrite/update the remaining landing sections:
    - `MarketingLandingAbout.tsx` — About YAS (AI-Native agency, Riyadh-based, targeting KSA/GCC)
    - Add stats counter section (99+ clients, years experience, etc.)
    - `MarketingLandingProcess.tsx` — Customer journey / how it works
    - `MarketingLandingCaseStudies.tsx` — Portfolio showcase (use placeholder projects)
    - `MarketingLandingFaqs.tsx` — FAQ section
    - Add OurClients / logo marquee section (from old site)
    - Add WhatsApp floating button
  - Update `MarketingLandingView.tsx` to compose all sections in correct order
  - Update contact form section with proper form fields
- **Expected output:** Full landing page with all sections

## Subtask 8 — SEO & Meta
- **Worker:** general
- **Depends on:** none
- **Files to modify:**
  - `src/pages/index.tsx` — Update Head tags:
    - Title: "YAS Media Agency | AI-Native Digital Marketing Agency — Riyadh, KSA"
    - Description: proper meta description
    - Structured data (JSON-LD) for LocalBusiness
    - Open Graph tags
    - Favicon reference
  - Add a `public/favicon.svg` (can use a simple purple mark)
- **Expected output:** SEO meta tags for homepage

## Subtask 9 — Build & Verify
- **Worker:** general
- **Depends on:** All subtasks 1–8
- **Commands:**
  - `npm run lint` — Check for lint errors
  - `npm run build` — Verify production build succeeds
- **Expected output:** Clean lint + successful build

---

## Execution Order

```
Subtask 1 ──┐
Subtask 2 ──┤
            ├──→ Subtask 3 ──┐
Subtask 8 ──┤                │
            │                ├──→ Subtask 5 ──┐
            │                ├──→ Subtask 6 ──┤
            └──→ Subtask 4 ──┘                ├──→ Subtask 7 ──→ Subtask 9
                                              │
                                       Subtask 8 ──┘
```

**Parallel batches:**
- **Batch A (parallel):** Subtask 1 (Theme) + Subtask 2 (Logo) + Subtask 8 (SEO)
- **Batch B (parallel, after Batch A):** Subtask 3 (Nav) + Subtask 4 (Footer)
- **Batch C (parallel, after Batch B):** Subtask 5 (Hero) + Subtask 6 (Services)
- **Batch D (after Batch C):** Subtask 7 (All remaining sections)
- **Batch E (after all):** Subtask 9 (Build verification)
