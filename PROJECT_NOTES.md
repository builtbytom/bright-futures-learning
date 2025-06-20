# Bright Futures Learning Center - Project Notes

## Project Overview
This is a demo website for showcasing web development capabilities with Astro and TinaCMS. The site is for a fictional nonprofit called "Bright Futures Learning Center" that provides literacy programs for underserved children.

## Tech Stack
- **Astro**: Latest version (static site generator)
- **TinaCMS**: Content management system
- **Tailwind CSS**: v3.x (NOT v4 due to compatibility issues)
- **Deployment**: Netlify

## Key Requirements
1. **CMS-First Approach**: EVERY piece of text must be editable through TinaCMS - no hardcoded copy
2. **Design**: Bright, colorful, optimistic with rainbow palette, hand-drawn elements, organic shapes
3. **Psychology-Driven Copy**: Emotional journey from awareness → empathy → hope → action
4. **Mobile-First**: Responsive design that works on all devices

## Project Structure
```
bright-futures-learning/
├── src/
│   ├── content/       # TinaCMS collections
│   ├── components/    # Reusable Astro components
│   ├── layouts/       # Page layouts
│   ├── pages/         # Astro pages
│   └── styles/        # Global styles
├── tina/              # TinaCMS configuration
├── public/            # Static assets
└── package.json       # Dependencies
```

## CMS Collections
1. **Site Settings**: Global content, navigation, footer
2. **Homepage Sections**: Hero, mission, impact, CTAs
3. **Programs**: What they offer, who they serve, outcomes
4. **Success Stories**: Case studies with before/after
5. **Team Members**: Bios, photos, roles
6. **Impact Stats**: Dynamic numbers, percentages
7. **Blog/Resources**: Educational content

## Development Commands
- `npm run dev`: Run both TinaCMS and Astro dev servers (locally)
- `npm run build`: Build for production (Astro only - TinaCMS not needed for static builds)
- `npm run preview`: Preview production build

## Current Progress

### ✅ Completed
1. Initialized Astro project with TypeScript and minimal template
2. Installed and configured TinaCMS with local development setup
3. Installed Tailwind CSS v3.x with custom configuration
4. Created TinaCMS schema for all 7 collections
5. Created initial content data for all collections:
   - Site settings with navigation and footer
   - Homepage sections (hero, mission, impact)
   - 3 programs (Early Readers, Reading Champions, Teen Book Club)
   - 2 success stories (Maria and Jayden)
   - 3 team members
   - Impact statistics
   - 1 blog post about early literacy
6. Set up global CSS with Tailwind and custom design system

### 🔄 In Progress
- Ready to start building components and pages

### 📋 Next Steps
1. Build reusable components that read from CMS data
2. Create layout components
3. Build homepage with all sections
4. Create other pages (programs, success stories, etc.)
5. Add hand-drawn SVG elements

## Design Decisions
- **Color Palette**: Bright rainbow colors (to be defined in CSS variables)
- **Typography**: Playful but readable fonts
- **Layout**: Clean, modern with organic shapes and hand-drawn elements
- **Images**: High-quality from Unsplash, focusing on diverse children learning

## Content Strategy
- **Emotional Journey**: Awareness → Empathy → Hope → Action
- **Multiple CTAs**: Different commitment levels (donate, volunteer, newsletter)
- **Social Proof**: Success stories, testimonials, impact statistics
- **Trust Building**: Transparency about programs and fund usage

## Performance Considerations
- Image optimization with Astro's built-in image component
- Lazy loading for below-fold content
- Minimal JavaScript for faster load times
- Static generation for optimal performance

## Deployment Notes
- Will be deployed to Netlify
- Build command: `npm run build`
- Publish directory: `dist/`
- Environment variables needed for TinaCMS (to be configured)
- Repository name: `bright-futures-learning`
- Netlify configuration file created with proper build settings

## Important Links
- Astro Docs: https://docs.astro.build
- TinaCMS Docs: https://tina.io/docs
- Tailwind CSS v3 Docs: https://v3.tailwindcss.com

## Notes for Future Sessions
- Always check this file first to understand project state
- Run `npm install` if returning to the project
- TinaCMS admin will be at localhost:4001/admin
- Development server runs on localhost:4321 by default