# DECISIONS.md — Phase 1 Discovery

## Project: YAS Media Agency Website (Client Pitch Demo)

### Brand Identity (from old website HTML)

| Decision | Value |
|---|---|
| Primary color | `#8311d4` (vibrant purple) |
| Accent color | `#fbef2d` (bright yellow) |
| Background | `#050505` (near-black) |
| Deep purple overlay | `#2d0054` |
| Font | Manrope (Google Fonts) |
| Style | Dark theme, glass-morphism, large rounded corners, gradient overlays |
| Logo | SVG-based "YAS" wordmark with yellow accent and white text |

### Language
- **Decision:** Arabic-only for initial pitch demo (based on PRD and client location in Riyadh, KSA)
- Rationale: Client is Arabic-speaking, targeting KSA/GCC market. English can be added later.

### Scope for Pitch Demo
- The goal is to build an impressive visual demo that catches the client's eye and convinces them to work with us
- Content can be **generic/placeholder** — real content will come from the client later
- Focus on visual quality, animations, responsiveness, and professional feel

### Pages Required (from PRD)
1. Homepage (Hero, About, Services, Target Sectors, Competitive Advantages, Customer Journey, Contact, CTA)
2. About Us (Vision, Mission, Values, Story)
3. Services Main Page + Individual Service Pages
4. Service Request Form
5. Target Sectors Page
6. Blog (CMS-ready structure)
7. Contact Page
8. Privacy Policy / Terms & Conditions

### Technical Requirements
- Next.js 13 (Pages Router) ✅ already set up
- 100% Responsive ✅
- SEO Friendly + Structured Data
- Google Analytics / Meta Pixel / GTM ready
- WhatsApp integration
- Contact forms with validation
- High performance / fast loading

### Notes
- The `.enc` file (logo.enc) needs to be decrypted or we use the SVG logo extracted from old site HTML
- The old website screenshot could not be viewed by the model, but the full HTML was provided
