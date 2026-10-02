# ITZFIZZ Scroll-Driven Hero

A premium automotive landing page built for the ITZFIZZ internship assignment. Its hero turns page scroll into a vehicle journey: the car travels along the road while milestones reveal as progress advances.

## Stack

Next.js, React, TypeScript, CSS, and GSAP ScrollTrigger.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and scroll through the first section. The car's translate, scale, and rotation are scrubbed against real scroll position, so reverse scrolling reverses the scene naturally. Intro content uses small load-only GSAP reveals.

## Deploy

Deploy with Vercel by importing this repository, or deploy the static Next.js output to a provider such as GitHub Pages after configuring its base path for the repository name.
