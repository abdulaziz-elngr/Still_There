# STILL THERE
The machines we left behind on other worlds. Cinematic museum built with Next.js (App Router), React, TypeScript, Tailwind v4.

## Run
`npm install && cp .env.example .env.local && npm run dev` · check: `npm run lint && npm run build`

## Architecture
- `src/types` — all data models. `src/data` — SAMPLE DATA, replace with verified NASA data.
- `src/lib/nasa.ts` — only place that calls NASA. `src/lib/ai.ts` + `/api/ai/story` — server-only AI.
- `src/components/*` — one folder per feature; shared UI in `ui/`. Integration points: `PlanetScene`, `InteractiveMap`, `MiniGame`, `AudioButton`, `EquipmentStory`, `Timeline`.
- Rule: no secrets in client code; env vars in `.env.local` (see `.env.example`).

## Add content
- Equipment: append to `src/data/equipment.ts` (story chapters + timeline). It appears in Stories, Moon/Mars and Map automatically.
- Timeline events: add `TimelineEvent` items to the equipment's `timeline`.

## Git workflow
`main` (stable) ← `develop` ← `feature/{intro,earth,moon,mars,story,map,ai,3d,games}`.
Branch → implement → test → commit → push → PR → review → merge into `develop`.

## Deploy
Import the repo on Vercel, set `NASA_API_KEY`, `AI_API_KEY`, `AI_MODEL`.

## Branches
Created locally: main, develop and all feature/* branches. Push with `git push -u origin --all`.
