# Project Context: US Dairy & Foods Consulting (USDF)

## Company Overview
**US Dairy and Foods Consulting LLC** (USDF) is a premier consultancy specializing in dairy and food industry solutions. Founded in 2019 by **Dr. Hasmukh Patel**, the firm is based in Plymouth, MN, and provides expert guidance on dairy processing, food safety compliance, product development, and operational efficiency.

**Tagline:** "USA’s Top Food & Dairy Solutions Partner for Business Expansion."

## Core Values & Identity
- **Experience:** Bringing extensive industry experience to enhance performance and growth.
- **Expertise:** Leveraging diverse expertise to meet unique needs.
- **Excellence:** Implementing advanced solutions for superior manufacturing processes.

### Vision
To be the leading consulting firm that empowers dairy and food businesses with cutting-edge solutions, fostering innovation, sustainability, and excellence in the industry.

### Mission
We strive to deliver strategic insights and customized solutions that enhance food safety, quality, and efficiency, ensuring long-term success for our clients in the ever-evolving food and dairy sector.

## Site Architecture & Content

### 1. Home
- **Hero Section:** Introduction to USDF, emphasizing innovation and quality.
- **Key Sections:** Experience, Expertise, Excellence.
- **Call to Action:** "Unlock Your Business" - Join successful businesses trusting USDF.

### 2. About Us
- **Founder:** Dr. Hasmukh Patel.
- **Focus:** Optimization, compliance, sustainable growth.
- **Philosophy:** "Our Strength, Our Teamwork" - Seamless collaboration driving excellence.

### 3. Services
Comprehensive consulting services tailored to the dairy and food industry:
- **Strategic Planning:** Market analysis, regulatory requirements, operational optimization.
- **Technology Assessment:** System evaluation, automation, advanced processing techniques.
- **Dairy and Food Ingredients Manufacturing:** Sourcing, formulation, cost optimization.
- **Research & Development (R&D):** New product development, nutritional enhancement, consumer insights.
- **Product Development & Commercialization:** Concept validation to large-scale production.
- **Turn-Key Projects:** End-to-end support (facility design, equipment, workflow).
- **Technical Support:** Troubleshooting, process optimization, quality assurance.

### 4. Industry Sectors
- **Food and Beverage Industry:** Process optimization, safety standards.
- **FMCG (Fast-Moving Consumer Goods):** Supply chain, speed, efficiency.
- **Dairy Products & Dairy Ingredients:** Quality assurance, sustainability, cheese/milk/ingredient manufacturing.
- **Food Products & Food Ingredients:** Clean-label, plant-based, functional ingredients.
- **New Processing Technologies:** High-pressure processing (HPP), automation, sustainable packaging.

### 5. Collaborators (Clients & Partners)
- General Mills
- Paras/VRS Foods
- Vadilal Ice Cream
- Amul
- Flavi Dairy Solutions

### 6. Contact Us
**Contact Details:**
- **Phone:** +1-605-690-6080
- **Email:** usdfconsulting@gmail.com
- **Address:** 5605 Weston Ln N, Plymouth, MN 55446, USA

**Inquiry Form:**
- Fields: Your Name, Your Email, Phone Number, Subject, Your Message.

## Footer Information
- **Quick Links:** About Us, Services, Industry, Collaborator, Contact Us.
- **Copyright:** "Copyright 2025 US Dairy & Foods. All Rights Received. Developed by Triovate PVT LTD"

---

# Frontend Template Agent Guide (Technical Reference)

This repository is a reusable Next.js 16 template that pairs Tailwind CSS v4 with shadcn/ui primitives and a curated collection of animation-heavy components imported from 21st.dev.

## Stack & Tooling

- **Framework:** Next.js 16 (App Router, React 19).
- **Styling:** Tailwind CSS v4 with CSS variables defined in [`src/app/globals.css`](src/app/globals.css).
- **Component systems:** shadcn/ui (see [`components.json`](components.json)) plus 21st.dev composites under [`src/components`](src/components).
- **Utilities:** `clsx` + `tailwind-merge` exposed via [`src/lib/utils.ts`](src/lib/utils.ts) as `cn`.

## Getting Started

```bash
npm install
npm run dev     # start development server (default http://localhost:3000)
npm run build   # production build using Turbopack
npm run start   # serve the production build
```

Node 18+ is recommended to align with Next.js 16 requirements.

## Directory Overview

| Path | Purpose |
| --- | --- |
| [`src/app`](src/app) | App Router entry points (`layout.tsx`, route segments, global CSS). |
| [`src/components/ui`](src/components/ui) | shadcn/ui primitives and light variants (buttons, forms, pricing cards, etc.). |
| [`src/components/devComponents`](src/components/devComponents) | Higher-level experiences imported from 21st.dev (hero sections, galleries, animated widgets). |
| [`src/components/theme-provider.tsx`](src/components/theme-provider.tsx) | Thin wrapper around `next-themes` used in `src/app/layout.tsx`. |
| [`src/lib`](src/lib) | Shared utilities (currently `utils.ts`). |

Use `ui/` for low-level reusable pieces and `devComponents/` for opinionated sections you can compose into pages.

## Theming Model

- Base tokens live in `:root` and `.dark` blocks inside [`src/app/globals.css`](src/app/globals.css), including semantic colors (`--background`, `--primary`, chart palette), radii, and animation keyframes.
- The Tailwind inline theme references these CSS variables so shadcn utilities (e.g., `bg-background`, `text-muted-foreground`) stay consistent.
- `ThemeProvider` in [`src/app/layout.tsx`](src/app/layout.tsx) wires `next-themes` with `attribute="class"` to toggle `light/dark/system`.
- When adding new components, prefer referencing the semantic CSS vars (e.g., `var(--brand)`), or extend the inline `@theme` block so tokens remain centralized.

## Working with shadcn & 21st.dev

### shadcn/ui

1. Configuration lives in [`components.json`](components.json); aliases map `@/components/ui` and `@/lib/utils`.
2. Add primitives with `npx shadcn@latest add <component>` (Tailwind v4 is autodetected). New files appear under `src/components/ui`.
3. Keep shared variants (e.g., buttons) minimal and theme-friendly; extend via `className` or component-specific props.

### 21st.dev Imports

- Imported components and any assets live under `src/components/devComponents`. Files retain their original naming for traceability (e.g., `animated-hero-with-web-gl-glitter.tsx`).
- Data such as author/title metadata is preserved in `title,author,install_cmd,page_url,create.jl` for reference.
- When a component depends on shared primitives (buttons, cards), either import from `@/components/ui` or embed a localized version to avoid regressions.

## Adding New Pages or Templates

1. Compose a page under `src/app/<route>/page.tsx` and import building blocks from `@/components/ui` and `@/components/devComponents`.
2. Wrap any route-level providers inside `src/app/layout.tsx` when necessary (e.g., analytics, global contexts).
3. Co-locate route-specific styles via CSS Modules if the base theme utilities are insufficient.

## Maintenance Tips

- **Documentation:** Update this `agent.md` whenever you add notable tooling or conventions. Keep `README.md` user-facing, while this file stays implementation-focused.
- **Component Hygiene:** When pulling additional 21st.dev entries, confirm TypeScript types and tweak effects (e.g., `use client` directives, motion easing) to satisfy ESLint/TypeScript.
- **Testing:** After major component imports, run `npm run build` to catch type or bundler issues early (especially when WebGL / three.js pieces are involved).
