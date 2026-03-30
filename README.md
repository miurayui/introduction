# Portfolio: Logic & Creativity

A modern portfolio site designed to showcase engineering expertise and a detective-like approach to problem-solving, centered around the philosophy: "Challenge initial assumptions to find the truth behind the logic."

## 📝 Project Overview

This project goes beyond a simple list of skills, aiming to tell a story of "why" a technology was chosen and "how" complex challenges were overcome. Built with Next.js and Framer Motion, it transforms static information into a dynamic, memorable user experience.

### Key Sections
- **Hero (Reorder Animation):** An interactive intro where a philosophical sentence deconstructs and reshapes into the owner's name.
- **About (Creative Journey):** Narrative on the passion for debugging (riddle-solving) since KOSEN (National Institute of Technology) and the engineering philosophy in the AI era.
- **Capabilities (Skills):** Categorized visualization of the technical stack.
- **Career History (Accordion):** Professional experience documented with a focus on technical contributions (MVC, Razor, WordPress, Cookie management, DB design) while maintaining NDAs.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript (Type-safe implementation) |
| **Styling** | Tailwind CSS (Utility-first, CSS Variables) |
| **Animation** | Framer Motion (Layout transitions, AnimatePresence) |
| **Icons** | Lucide-react, Original SVG Icons |

---

## 🚀 Key Features & Implementation

### 1. Dynamic Character Reordering
The Hero section utilizes `useMemo` to extract specific characters from a source string. It leverages Framer Motion's `layout` prop and `staggerChildren` to create a fluid, sophisticated typographic animation.

### 2. Full-Stack Career Showcase
The Professional Experience section uses an accordion interface to demonstrate end-to-end development capabilities:
- **Backend:** C#, SQL, MVC Pattern, Razor, Schema Extension.
- **Frontend:** React, Next.js, TypeScript, WordPress (Gutenberg/Custom Blocks).
- **DevOps/QC:** Unit testing with Jest, Browser Cookie-based session control, Git Flow.

### 3. Integrated Design System
Centralized color management using CSS Variables (`:root`) in `global.css`. By utilizing Tailwind CSS "Arbitrary values" (`text-[var(--name)]`), the brand color (`#166534`) is managed across the system without heavy reliance on the configuration file.

---

## 📂 Folder Structure

```text
src/
├── app/                # Next.js App Router (Page & Layout)
├── components/         # Reusable UI Components
│   ├── Hero.tsx        # Character reorder logic
│   ├── About.tsx       # Profile & Narrative
│   ├── Skills.tsx      # Tech stack grid & Career integration
│   └── CareerAccordion.tsx # Career history logic
├── collections/        # Animation variants (popup.ts, etc.)
└── public/             # Assets (Icons, Profile images)

```

## 🛠️ Getting Started
### 1. Install dependencies:

```Bash
pnpm install
```
### 2. Run development server:

```Bash
pnpm dev
```
### 3. Build for production:

```Bash
pnpm build
```

---

## 📈 Project Status

| Status | Last Deployment | Environment |
| :--- | :--- | :--- |
| **Active** | 2026.03.31 | Vercel / Production |

---

## 💡 Key Translation Points

- **"Challenge initial assumptions"**: Expresses the core philosophy of "questioning common sense" using engineering-focused terminology (questioning "assumptions").
- **"End-to-end development capabilities"**: A strong professional phrase indicating the ability to handle both frontend and backend seamlessly.
- **"Schema Extension"**: Highlights expertise in database design by describing "adding a column" as an "extension of the data schema."

---

## 📄 License

Copyright © 2026 Yui.  
This project is private and intended for portfolio display purposes.