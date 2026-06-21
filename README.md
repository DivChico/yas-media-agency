# YAS Media Agency — AI-Native Digital Marketing

> **وكالة ياس ميديا — تسويق رقمي بالذكاء الاصطناعي**

A professional single-page promotional website for **YAS Media Agency**, an AI-Native digital marketing agency based in Riyadh, Saudi Arabia. Built as a pitch demo to showcase capabilities, services, and brand identity to potential clients across KSA and the GCC.

موقع إعلاني احترافي مكون من صفحة واحدة لـ **وكالة ياس ميديا**، وكالة تسويق رقمي تعمل بالذكاء الاصطناعي ومقرها الرياض، المملكة العربية السعودية. تم بناؤه كعرض تقديمي لإظهار القدرات والخدمات والهوية البصرية.

---

## ✨ Features / المميزات

| English | العربية |
|---------|---------|
| Dark theme with glass-morphism design | تصميم داكن مع تأثيرات الزجاج |
| Bilingual (Arabic/English) with RTL support | دعم ثنائي اللغة (عربي/إنجليزي) |
| 100% responsive (Mobile, Tablet, Desktop) | استجابة كاملة لجميع الأجهزة |
| Lead generation contact form | نموذج تواصل لتوليد العملاء |
| WhatsApp floating button | زر واتساب عائم |
| SEO optimized with structured data | تحسين محركات البحث مع بيانات منظمة |
| Fast loading (158 kB shared JS) | تحميل سريع |

---

## 🛠️ Tech Stack / التقنيات

| Technology | Version |
|-----------|---------|
| Next.js | 13 (Pages Router) |
| React | 18 |
| TypeScript | 5 |
| MUI (Material UI) | 5 |
| Emotion | 11 |
| Framer Motion | 10 |
| React Hook Form | 7 |
| Yup | 1 |
| Iconify | 4 |

---

## 🚀 Quick Start / بدء الاستخدام

```bash
# Install dependencies / تثبيت الاعتماديات
npm install

# Start development server on port 8002 / تشغيل الخادم التطويري
npm run dev

# Production build / بناء الإنتاج
npm run build

# Preview production build / معاينة الإنتاج
npm run start
```

---

## 📄 Pages / الصفحات

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Homepage** | Full single-page demo with all sections |
| Other pages | Preserved | موجودة لكن مخفية من القائمة |

### Homepage Sections / أقسام الصفحة الرئيسية

1. **Hero** — Glass-morphism hero with animated stats
2. **About** — Agency story + stats counter
3. **Services** — 9 service cards with hover effects
4. **Process** — 4-step workflow (Discovery → Strategy → Execute → Optimize)
5. **Portfolio** — Showcase with grayscale-to-color effect
6. **FAQ** — 5 accordion questions
7. **CTA** — Call-to-action section
8. **Contact** — Lead gen form with validation
9. **WhatsApp** — Floating button with pulse animation

---

## 🌐 Language Toggle / تبديل اللغة

Click **AR** / **EN** in the header to switch between:
- **English (LTR)** — Default
- **Arabic (RTL)** — Full Arabic content + right-to-left layout

اضغط **AR** / **EN** في القائمة العلوية للتبديل بين اللغتين.

---

## 📦 Project Structure / هيكل المشروع

```
src/
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks (including useLocales)
├── layouts/         # Main layout, Header, Footer, Navigation
├── locales/         # Translation files (EN/AR)
├── pages/           # Next.js Pages Router entrypoints
├── sections/        # Page sections organized by domain
│   └── _marketing/  # Marketing-specific views
├── theme/           # MUI theme config (palette, typography)
├── types/           # TypeScript definitions
└── utils/           # Helper utilities
```

---

## 🎨 Brand Colors / الألوان

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Purple | `#8311d4` | Main brand color |
| Accent Yellow | `#fbef2d` | Highlights, CTAs |
| Background | `#050505` | Dark mode background |
| Deep Purple | `#2d0054` | Overlays, gradients |

---

## 📝 Scripts / الأوامر

```bash
npm run dev        # Start dev server (port 8002)
npm run build      # Production build
npm run lint       # ESLint check
npm run prettier   # Format code
npm run clear-all  # Clean .next + node_modules
```

---

## 🔗 Links / روابط

- **Live Demo:** [https://yas-media-agency.vercel.app/](https://yas-media-agency.vercel.app/)
- **GitHub:** [https://github.com/DivChico/yas-media-agency](https://github.com/DivChico/yas-media-agency)
- **Agency:** YAS Media Agency — Riyadh, Saudi Arabia

---

**Built by [DivChico](https://github.com/DivChico)** |
**بني بواسطة [ديفشيكو](https://github.com/DivChico)**
