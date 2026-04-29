# 🌿 Phytoroot Extracts — Product Catalog

A production-grade Next.js website for Phytoroot Extracts' complete Ayurvedic cannabis product line.

**Live Repo:** [github.com/visheshkilewala/pre-website](https://github.com/visheshkilewala/pre-website)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (headings) + Inter (body)
- **Deployment:** Vercel-ready (static generation)

## Product Catalog

| Category | Products | Route |
|----------|----------|-------|
| 🧴 Hair & Body Care | 5 products | `/hair-care` |
| 💊 Internal Medicine | 8 products | `/internal-medicine` |
| 🌿 Smokable Range | 4 blends | `/smokable` |
| ✨ Wellness | 6 products | `/wellness` |

**Total: 20+ products across 27 statically generated pages**

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ Individual product detail pages with dynamic routing
- ✅ Data-driven product catalog (easy to add/update products)
- ✅ Schedule E(1) compliance warnings on every page
- ✅ WhatsApp ordering integration
- ✅ Playfair Display + Inter typography system
- ✅ Dark header with sticky navigation
- ✅ Mobile hamburger menu
- ✅ Static Site Generation (SSG) for fast loading

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind + global styles
│   ├── hair-care/
│   │   ├── page.tsx        # Category listing
│   │   └── [id]/page.tsx   # Product detail (dynamic)
│   ├── internal-medicine/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── smokable/
│   │   └── page.tsx
│   └── wellness/
│       ├── page.tsx
│       └── [id]/page.tsx
├── components/
│   ├── Header.tsx          # Sticky nav + mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── ProductCard.tsx     # Product listing card
│   └── ProductDetailPage.tsx # Full product detail
└── data/
    └── products.ts         # All product data + types
```

## Adding New Products

1. Add product data to `src/data/products.ts`
2. The product automatically appears on its category page
3. A detail page is auto-generated at `/{category}/{id}`

## Deploy on Vercel

1. Connect your GitHub repo to [Vercel](https://vercel.com)
2. Select this repository
3. Vercel auto-detects Next.js and deploys
4. Every push to `main` triggers a new deployment

## Compliance

- All products are **Schedule E(1) Drugs** under the Drugs & Cosmetics Act, 1940
- Prescription from a registered Ayurvedic physician is **mandatory**
- Prices displayed are **GST exclusive** (5%)
- **Manufactured by:** Aagya Enterprises, Plot No 11, TIT Colony Mahavir Marg, Neemuch (M.P.) - 458441
- **Marketed by:** Phytorootextracts Pvt Ltd

## Contact

- 📞 +91 9244107423
- 📧 vkilewala@aagya.co.in
- 💬 [WhatsApp](https://wa.me/919244107423)
