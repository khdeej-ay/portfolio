# Syeda Khadeeja – Personal Portfolio

My personal portfolio website, built with Next.js and Tailwind CSS. It showcases my projects, skills, and experience as a Creative Computing student and full-stack developer.

> **Note:** This portfolio is based on [utkarsh singhal's portfolio template](https://github.com/Utkarsh-Singhal-26/portfolio).

---

## Tech Stack

- **Framework** – Next.js (App Router)
- **Language** – TypeScript
- **Styling** – Tailwind CSS
- **UI Components** – shadcn/ui
- **Animations** – Framer Motion, GSAP
- **Icons** – Lucide React
- **Theming** – next-themes (light/dark mode)
- **Analytics** – Vercel Analytics & Speed Insights
- **Deployment** – Vercel

---

## Features

- Light/dark mode toggle
- Animated custom cursor (desktop only)
- Sections: About, Skills, Projects, Contact
- "View all projects" page with featured and other projects
- Responsive across all screen sizes

---

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/khdeej-ay/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:

   ```bash
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── data.ts          # All personal content lives here
│   ├── page.tsx         # Home page
│   ├── projects/
│   │   └── page.tsx     # All projects page
│   └── globals.css
├── components/
│   ├── sections/        # Page sections (navbar, header, about, etc.)
│   ├── navbar/          # Navbar animation components
│   └── ui/              # UI utilities (cursor, grid pattern)
└── assets/              # Project images
```

---

## Acknowledgements

Built on top of [utkarsh singhal's portfolio template](https://github.com/Utkarsh-Singhal-26/portfolio). Updated design and component architecture by Pragnyan Ramtha.
