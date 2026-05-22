---
name: jobs-board
description: Build a full-featured job board / recruitment web application using React + TypeScript + Vite with Shadcn/ui + Tailwind CSS. Use this skill whenever the user wants to create, scaffold, or build a job listing platform, recruitment site, career portal, hiring dashboard, or any employment-related web app — even if they don't explicitly say "job board" or use terms like "招聘网站", "求职平台", "职位列表", "career site", or "hiring portal". Also use when the user asks to set up a React project for displaying searchable listings of any kind that resemble a job board pattern.
---

# Jobs Board Skill

Build a complete, production-quality job board web application from scratch.

## What you'll create

A React + TypeScript + Vite app with Shadcn/ui + Tailwind CSS that includes:

- Job listing page with search, category filters, and location filters
- Job detail page with full description, requirements, and apply button
- Responsive layout that works on mobile and desktop
- Mock JSON data that can be swapped for a real API later
- Clean project structure ready for extension

## Step-by-step build process

Follow these steps in order. Each step builds on the previous one. Run the app after step 5 to verify everything works before adding detail pages.

### Step 1: Scaffold the project

Create the Vite + React + TypeScript project and install dependencies:

```bash
npm create vite@latest jobs-board -- --template react-ts
cd jobs-board
npm install
```

Install Tailwind CSS v4 (Vite plugin approach):

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure Tailwind in `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Replace the contents of `src/index.css` with:

```css
@import "tailwindcss";
```

Install Shadcn/ui CLI and initialize:

```bash
npx shadcn@latest init
```

During init, choose these options:
- Style: `new-york`
- Base color: `slate` (or any you prefer)
- CSS variables: `yes`
- Components alias: `@/components`
- Utils alias: `@/lib/utils`

Make sure `tsconfig.json` and `tsconfig.app.json` have the path alias configured:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Also ensure `vite.config.ts` has the resolve alias:

```ts
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Install the Shadcn/ui components you'll need:

```bash
npx shadcn@latest add button card input select badge separator sheet
```

Install React Router for page navigation:

```bash
npm install react-router-dom
```

Install Lucide icons (Shadcn/ui's default icon set):

```bash
npm install lucide-react
```

### Step 2: Set up project structure

Create this folder structure inside `src/`:

```
src/
├── components/
│   ├── ui/          (Shadcn/ui auto-generated, don't touch)
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── jobs/
│   │   ├── JobCard.tsx
│   │   ├── JobList.tsx
│   │   ├── JobFilters.tsx
│   │   └── JobSearch.tsx
│   │   └── JobDetail.tsx
├── data/
│   └── jobs.ts      (mock job data)
├── hooks/
│   └── useJobs.ts   (data fetching + filtering logic)
├── lib/
│   └── utils.ts     (Shadcn/ui auto-generated)
├── pages/
│   ├── HomePage.tsx
│   ├── JobDetailPage.tsx
│   └── NotFoundPage.tsx
├── types/
│   └── job.ts       (TypeScript interfaces)
├── App.tsx
├── index.css
├── main.tsx
```

### Step 3: Define types and mock data

Read `references/data-schema.md` for the full job data schema and sample data. Create `src/types/job.ts` with the TypeScript interfaces, then create `src/data/jobs.ts` with the mock data.

The key types are:

```ts
export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;        // URL or placeholder
  location: string;
  category: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedAt: string;    // ISO date string
  applyUrl: string;
}
```

Include at least 12-15 diverse job entries across different categories (frontend, backend, full-stack, DevOps, design, product, data, mobile) and locations (Beijing, Shanghai, Shenzhen, Hangzhou, remote). This gives enough data for meaningful search and filter testing.

### Step 4: Build the data hook

Create `src/hooks/useJobs.ts` — a custom hook that:

1. Returns all jobs from mock data
2. Accepts optional filter params: `search` (text), `category`, `location`, `type`
3. Filters jobs by matching search text against title, company, and description
4. Filters by exact match on category, location, and type
5. Returns filtered results and the list of unique categories/locations/types for filter dropdowns

Keep it simple — this reads from the static `jobs.ts` array. When the user later swaps in a real API, they replace this hook's data source.

### Step 5: Build listing page components

Build these components in order:

**Header.tsx** — Site header with logo text "Jobs Board" and a nav link to home. Use a clean layout with the site name on the left. Make it sticky at the top.

**Footer.tsx** — Simple footer with copyright text and a few links.

**JobSearch.tsx** — A search input with a search icon. Uses Shadcn/ui `Input` component. Calls the parent's `onSearch` callback on input change.

**JobFilters.tsx** — Three Shadcn/ui `Select` dropdowns for category, location, and job type. Each has an "All" option plus the unique values from the data. Calls parent callbacks on change.

**JobCard.tsx** — A Shadcn/ui `Card` showing: job title, company name, location badge, category badge, job type badge, salary range, and "posted X days ago" text. The card is clickable — wraps in a React Router `Link` to `/jobs/:id`.

**JobList.tsx** — Maps filtered jobs to `JobCard` components in a responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop). Shows a "No jobs found" message when filters return empty results.

**HomePage.tsx** — Composes Header, JobSearch, JobFilters, and JobList. Uses the `useJobs` hook to get data and pass filtered results down. Manages filter state locally.

**App.tsx** — Sets up React Router with routes:
- `/` → HomePage
- `/jobs/:id` → JobDetailPage (build in next step)
- `*` → NotFoundPage

After completing this step, run `npm run dev` and verify:
- The app loads without errors
- Job cards appear in a grid
- Search input filters jobs by text
- Category/location/type dropdowns filter correctly
- Clicking a job card navigates to the detail route (page will be blank until next step)

### Step 6: Build the job detail page

**JobDetail.tsx** — A full detail view using Shadcn/ui `Card` and `Separator` components. Shows:
- Job title (large heading)
- Company name and logo placeholder
- Location, category, type, salary as badges
- Full description text
- Requirements as a bulleted list
- Benefits as a bulleted list
- "Posted X days ago" and apply URL link
- A prominent "Apply Now" Shadcn/ui `Button` linking to `applyUrl`
- A "Back to listings" link/button

**JobDetailPage.tsx** — Uses `useParams` from React Router to get the job `id`, finds the matching job from mock data, renders `JobDetail`. Shows a "Job not found" message if the ID doesn't match.

**NotFoundPage.tsx** — Simple 404 page with a message and link back to home.

Run `npm run dev` again and verify the full flow: browse listings → click a job → see full details → click back → return to listings with filters preserved.

### Step 7: Polish and responsive design

Review the app and add these finishing touches:

1. **Mobile responsiveness** — Ensure the grid collapses properly, filters stack vertically on small screens, and the detail page is readable on mobile. Use Tailwind responsive classes (`sm:`, `md:`, `lg:`).

2. **Loading and empty states** — Add a simple loading spinner or skeleton for when data would be fetching (even with mock data, having the pattern in place makes the API swap easier). Show a friendly empty state when no jobs match filters.

3. **Visual polish** — Ensure consistent spacing, proper font sizes, badge colors that distinguish categories from types, and a clean color scheme that matches Shadcn/ui's defaults.

4. **Filter state persistence** — When navigating from listings to detail and back, preserve the user's search and filter state. Use React Router's state or a simple context/state management approach.

## Extending the app

After the core app is built, common next steps the user might ask for:

- **Swap mock data for a real API** — Replace `useJobs` hook's data source with fetch/axios calls. The hook's interface stays the same.
- **Add job posting form** — A new page with a form for employers to submit jobs. Uses Shadcn/ui form components.
- **Add authentication** — Login/signup pages for job seekers and employers.
- **Add favorites/saved jobs** — Local storage or API-backed bookmarking.
- **Add pagination** — For large job datasets, add page-based navigation.
- **Deploy** — Build with `npm run build` and deploy the static output to Vercel, Netlify, or any static host.

When the user asks for any of these, build on the existing structure — don't re-scaffold.

## Important notes

- Don't over-engineer. The mock data approach means no backend complexity. Keep the hook simple.
- Use Shadcn/ui components as-is — don't customize them beyond what Tailwind classes handle. This keeps the UI consistent and maintainable.
- All text content should be in Chinese (中文) since this is a Chinese job board — company names can stay in English if they're international companies, but UI labels, filter options, and descriptions should be in Chinese.
- The `references/data-schema.md` file contains the full mock data schema and sample entries — read it when creating `src/data/jobs.ts`.
- Run `npm run dev` after step 5 and after step 6 to verify progress. Don't wait until everything is done to test.