# Airbnb Clone — Property Listing Page

A pixel-perfect recreation of an Airbnb property listing page built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This project demonstrates modern frontend development practices including responsive design, component architecture, and attention to UI/UX detail.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

---

## ✨ Features

- **Responsive Design** — Fully responsive layout that adapts seamlessly from mobile to desktop
- **Photo Gallery** — Interactive photo tour with lightbox and keyboard navigation
- **Booking Widget** — Sticky booking card with date selection and guest count
- **Reviews Section** — Rating breakdown with category scores and individual reviews
- **Interactive Calendar** — Date range picker for check-in/check-out
- **Location Map** — Embedded map section showing property location
- **Host Profile** — Detailed host information with stats
- **Things to Know** — House rules, safety, and cancellation policy sections
- **Smooth Animations** — Micro-interactions and hover effects throughout

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.2 | React framework with App Router |
| **React** | 19.2 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Lucide React** | 1.25 | Icon library |
| **Nunito Sans** | — | Typography (via Google Fonts) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm** 9.x or later

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd airbnb-clone

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
airbnb-clone/
├── public/
│   ├── images/              # Property photos (room-1 to room-5)
│   └── airbnb-logo.svg      # Airbnb logo
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with Navbar & fonts
│   │   ├── page.tsx         # Home page (listing page)
│   │   ├── globals.css      # Global styles & design tokens
│   │   └── favicon.ico
│   └── components/
│       ├── Navbar.tsx        # Top navigation bar
│       ├── Logo.tsx          # Airbnb logo component
│       ├── SearchPill.tsx    # Search bar pill
│       ├── UserMenu.tsx      # User profile dropdown
│       ├── HeroSection.tsx   # Photo gallery header
│       ├── PhotoTour.tsx     # Full-screen photo tour modal
│       ├── Lightbox.tsx      # Image lightbox overlay
│       ├── PropertyDetails.tsx # Property info, amenities, features
│       ├── BookingWidget.tsx  # Sticky booking card
│       ├── Calendar.tsx      # Date range calendar
│       ├── Reviews.tsx       # Ratings & review cards
│       ├── LocationMap.tsx   # Map section
│       ├── HostProfile.tsx   # Host information
│       ├── ThingsToKnow.tsx  # Rules & policies
│       └── Footer.tsx        # Site footer
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config (v4 via CSS)
└── postcss.config.mjs
```

---

## 🎨 Design Decisions

- **Component Architecture** — Each UI section is a self-contained component with its own data and types, making the codebase easy to navigate and maintain.
- **Tailwind CSS v4** — Uses the latest CSS-first configuration with `@theme` tokens defined in `globals.css` for consistent design tokens (colors, spacing, typography).
- **Static Data** — Property data is co-located within components for simplicity. In a production app, this would come from an API.
- **No External State Management** — React's built-in `useState` is sufficient for this single-page listing, keeping the bundle lean.
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation support, and focus-visible styles throughout.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint checks |
